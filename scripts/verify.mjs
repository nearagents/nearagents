import fs from 'node:fs';
import path from 'node:path';
import {sha256} from './hash.mjs';

const RPC = process.env.NEAR_RPC || 'https://free.rpc.fastnear.com';
const ARCHIVAL = process.env.NEAR_ARCHIVAL_RPC || 'https://archival-rpc.mainnet.fastnear.com';
const EMPTY_CODE = '11111111111111111111111111111111';
const record = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, '..', 'deployments', 'mainnet.json'), 'utf8'));

async function rpc(method, params, url = RPC) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify({jsonrpc: '2.0', id: 1, method, params})});
      const body = await res.json();
      if (body.error) throw new Error(JSON.stringify(body.error));
      return body.result;
    } catch (e) {
      if (attempt === 4) throw e;
      await new Promise(r => setTimeout(r, 1500 * attempt));
    }
  }
}

const query = params => rpc('query', {finality: 'final', ...params});
const view = async (account_id, method_name, args = {}) => {
  const r = await query({request_type: 'call_function', account_id, method_name, args_base64: Buffer.from(JSON.stringify(args)).toString('base64')});
  return JSON.parse(Buffer.from(r.result).toString());
};
const keys = async account_id => (await query({request_type: 'view_access_key_list', account_id})).keys.length;
const code = async params => Buffer.from((await query(params)).code_base64, 'base64');

let failed = 0;
function check(label, ok, detail = '') {
  if (!ok) failed++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${label}${detail ? `  (${detail})` : ''}`);
}

const {factory, token} = record;

const factoryCode = await code({request_type: 'view_code', account_id: factory.account});
check('factory code matches the recorded sha256', sha256(factoryCode).toString('hex') === factory.sha256, `${factoryCode.length} bytes`);
check('factory has no access keys', await keys(factory.account) === 0);

const config = await view(factory.account, 'get_config');
for (const [key, expected] of Object.entries(record.config)) {
  check(`config.${key} = ${JSON.stringify(expected)}`, JSON.stringify(config[key]) === JSON.stringify(expected), JSON.stringify(config[key]));
}

const tokenCode = await code({request_type: 'view_global_contract_code', code_hash: config.token_code_hash});
check('token global contract matches the recorded sha256', sha256(tokenCode).toString('hex') === token.sha256, `${tokenCode.length} bytes`);

for (let i = 0; i < config.vaults; i++) {
  const vault = await view(factory.account, 'get_vault', {index: i});
  const account = await query({request_type: 'view_account', account_id: vault});
  check(`${vault} has no code`, account.code_hash === EMPTY_CODE && !account.global_contract_hash && !account.global_contract_account_id);
  check(`${vault} has no access keys`, await keys(vault) === 0);
}

const drill = record.guardian_drill;
for (const [step, hash] of [['pause', drill.pause], ['resume', drill.resume]]) {
  const tx = await rpc('tx', {tx_hash: hash, sender_account_id: record.config.guardian, wait_until: 'FINAL'}, ARCHIVAL);
  const call = tx.transaction.actions[0].FunctionCall;
  const args = JSON.parse(Buffer.from(call.args, 'base64').toString());
  const ok = tx.transaction.receiver_id === factory.account && call.method_name === 'set_launches_paused' && args.paused === (step === 'pause') && 'SuccessValue' in tx.status;
  check(`guardian drill ${step} succeeded`, ok, hash.slice(0, 8));
}

console.log(`\nlaunches: ${config.launches}, vaults: ${config.vaults}`);
if (failed) {
  console.log(`${failed} check(s) failed`);
  process.exit(1);
}
console.log('all checks passed');
