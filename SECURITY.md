# Security

## Reporting

Use GitHub's private vulnerability reporting (Security tab, "Report a vulnerability"). Please don't open a public issue for a security bug.

## What the contracts enforce

- No platform fee: the factory has no platform account and a platform share of 0.
- Liquidity can't be removed. The position is owned by a vault with no keys and no code, and the token has no LP fee collection.
- Supply is fixed at 1B.
- Tax rates and split are set at launch. There is no setter.
- The token has no upgrade method and can't pause transfers. The factory has no access keys.
- The guardian (`guardian.goodhare8003.near`) can only pause and resume new launches.
- The keeper can only swap what the tax actually collected, pays fixed recipients, and never touches the position. Payouts can be triggered by anyone, holders can claim their own rewards, and if the keeper is inactive for 14 days anyone can run the swaps too.

Trades go through Rhea, which upgrades through its own governance.

We will never ask for your seed phrase. The only official site is https://nearagents.fun.
