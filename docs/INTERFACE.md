# Contract interface

`nearest-dcl-4` on mainnet. Method names are the exports of the deployed code (`node scripts/verify.mjs` checks that code). Callbacks (`on_*`) are private and left out.

## Factory `launch.goodhare8003.near`

change: `launch`, `refund_failed_launch`, `set_launches_paused` (guardian only)

view: `get_config`, `get_launch_deposit`, `get_launches`, `get_launch_records`, `get_launch_status`, `get_vault`, `contract_source_metadata`

`launch` takes `name, symbol, icon, description, website, x, telegram, tax`, where `tax` is

```json
{"buy_bps": 0, "sell_bps": 0, "buyback_bps": 0, "burn_bps": 0, "holders_bps": 0, "creator_bps": 0, "agent_bps": 0}
```

## Token `t-{symbol}-{id}.launch.goodhare8003.near`

NEP-141 / NEP-145: `ft_transfer`, `ft_transfer_call`, `ft_total_supply`, `ft_balance_of`, `ft_metadata`, `storage_deposit`, `storage_withdraw`, `storage_unregister`, `storage_balance_of`, `storage_balance_bounds`

setup: `advance_setup`, `verify_position`, `retry_wnear_registration`, `refund_setup`

tax: `convert`, `settle`, `buyback`, `pay_creator`, `pay_agent`, `pay_rewards`, `claim_rewards`

view: `get_info`, `get_config`, `get_setup`, `get_tax_state`, `get_rewards`, `contract_source_metadata`

## Events

Standard `nearest`, version `4.0.0`, logged as `EVENT_JSON`.

- factory: `launch`, `vault_opened`, `launches_paused`
- token: `setup`, `convert`, `buyback`, `buyback_burn`, `payout`, `tax_refund`, plus the NEP-141 `ft_mint`, `ft_transfer`, `ft_burn`
