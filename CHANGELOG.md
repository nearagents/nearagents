# Changelog

Commit log of the main repo (private), dates in UTC.

## 2026-09-27

- chore: initial import

## 2026-09-29

- chore: repo setup

## 2026-09-30

- chore: start v2 from the original site
- docs: security baseline, threat model, ADRs
- feat(ops): cost sheet + agent cost simulator
- fix(ops): run cost checks with node:test
- docs: review of legacy contracts
- docs(adr): 0% platform fee, auto agents
- fix(direct): keep withdrawals, disable dcl-2 launches
- ci: pin actions, sandbox fixtures, run all suites
- docs: sandbox results, M0
- ci: pin gitleaks
- feat(server): NEP-413 wallet login, sessions, audit log
- docs: M1 notes
- feat(web): wallet sign-in
- docs: signMessage notes
- feat(contracts): dcl-3 token + factory
- test(contracts): dcl-3 e2e against pinned rhea
- docs: dcl-3 design
- build: reproducible dcl-3 builds
- build: print diff when the build drifts
- ci: upload dcl-3 wasm
- build: pin dcl-3 hashes from reference host
- feat(web): launch/trade dcl-3 tokens
- docs: reference builds, local demo
- feat(server): keeper
- docs: keeper
- feat(ops): dcl-3 testnet deploy + rehearsal
- docs: testnet deploy checklist
- docs(adr): agent posts from the token's X account
- ci: gitleaks on PRs
- feat(ops): one-command local stack
- docs: X API rules, feed pricing

## 2026-10-05

- docs(adr): build the agent stack ourselves
- feat(server): agent studio + post drafts
- docs: studio API, M2
- docs(adr): token X account
- docs(adr): agent funding, free tier
- docs(adr): drop monthly draft quota
- feat(server): launch line on first post
- docs(adr): launch line
- docs: previews are optional
- fix(keeper): thresholds from measured gas
- feat(server): X OAuth for agents
- docs: X connect, M4
- fix(deps): security bump
- fix(server): escape invisible chars in source
- feat(server): agent worker (posts, replies, budget)
- docs: worker, M4/M5
- feat(server): show connected X account in studio
- feat(web): studio pages
- feat(web): meteor wallet
- fix(web): safari select styling

## 2026-10-06

- docs: dcl-3 testnet deployment
- feat(web): tax split sliders + presets
- fix(web): use meteor connect

## 2026-10-10

- fix: pin rhea dcl v2.3.15 on mainnet
- feat(contracts): dcl-4, shared keyless vaults
- fix(ci): gitleaks false positive
- feat(web): dcl-4 launches behind a flag
- feat(server): dcl-4 in studio + keeper
- feat(deploy): dcl-4 testnet deploy + rehearsal
- chore: dcl-4 reference build
- docs: dcl-4 design
- test: read dcl-4 hashes from manifest

## 2026-10-11

- perf(contracts): wasm-opt dcl-4 (-20%)
- feat(ops): testnet infra config
- chore: optimized dcl-4 reference build
- feat(server): serve web app from the api
- fix(ops): web build deps

## 2026-10-12

- feat(ops): testnet on dcl-4
- fix(server): log LLM refusals
- feat(agents): simplify posting pipeline + studio
- feat(agents): launch post, then news-based posts
- fix(agents): free failures don't count against quota
- feat(agents): token link in launch post
- feat(web): pulse redesign
- feat(web): restyle remaining pages
- feat(trades): index rhea trades, stream to site
- feat(server): rename in messages, terms, posts
- fix(trades): track launches via explorer api
- feat(site): neon theme

## 2026-10-13

- feat(site): hero cube animation
- feat(site): spotlight video
- feat(site): token icons on amounts
- feat(telegram): buy alerts, trending, paid slots

## 2026-10-15

- feat(telegram): AI ambassador
- feat(studio): 3-step telegram setup
- feat(site): NEARAGENTS rebrand
- feat(site): new spotlight loop
- docs(brand): logo source file
- feat(site): animated logo in launch card
- feat(telegram): bot speaks as the token's agent
- feat(telegram): emoji, rules, welcomes, big buys, announcements
- feat(telegram): whale alerts + settings panel

## 2026-10-16

- feat(deploy): dcl-4 mainnet deploy script
- feat(server): NEARAGENTS in sign-in, terms, posts
- docs(deploy): $NEARAGENTS launch plan
- feat(site): top NEAR tokens on home
- revert: top NEAR tokens on home
- feat(site): top tokens in volume column
- fix(site): remove third-party featured token
- feat(telegram): buy tiers + badges
- feat(telegram): bot health check, rename
- docs(deploy): dcl-4 mainnet deployment
- docs(deploy): guardian drill ok on mainnet
- docs(deploy): activation checklist
- feat(keeper): run in prod
- ci: verify dcl-4 records on chain
- chore(ops): prod on mainnet
- docs(deploy): prod on mainnet
- docs(telegram): status
- fix(copy): launch page wording
- fix(site): remove testnet footer link
- feat(telegram): alerts for any NEAR token
- feat(telegram): new alert layout
- feat(telegram): mint icon style
- feat(telegram): whale header style
- feat(telegram): momentum posts, private chat with agent
- docs(telegram): status, next steps
- fix(telegram): migrated supergroup blocked the outbox
- feat(telegram): separate bot for agents
- chore(ops): agent bot config

## 2026-10-17

- feat(studio): character presets instead of a prompt
- feat(studio): agent page with test chat
- feat(studio): simpler settings, autosave
- feat(telegram): buy bot welcome message
- feat(agents): NEAR top-ups for agent budget
- feat(telegram): agent bot welcome message
- chore(ops): nearagents.fun domain
- feat(site): copy CA button
- feat(server): redirect old domain
- feat(site): $NEARAGENTS CA in header
