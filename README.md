# best-spot-the-difference-game-20261121-0451

[![make.fun · best-spot-the-difference-game-20261121-0451](https://make.fun/badge/best-spot-the-difference-game-20261121-0451.svg)](https://make.fun/bounty/best-spot-the-difference-game-20261121-0451?utm_source=github&utm_medium=readme&utm_campaign=best-spot-the-difference-game-20261121-0451)
[![rank](https://make.fun/badge/best-spot-the-difference-game-20261121-0451/fauzinfau4/best-spot-the-difference-game-20261121-0451/rank.svg)](https://make.fun/bounty/best-spot-the-difference-game-20261121-0451/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-spot-the-difference-game-20261121-0451)
[![reward](https://make.fun/badge/best-spot-the-difference-game-20261121-0451/fauzinfau4/best-spot-the-difference-game-20261121-0451/reward.svg)](https://make.fun/bounty/best-spot-the-difference-game-20261121-0451?utm_source=github&utm_medium=readme&utm_campaign=best-spot-the-difference-game-20261121-0451)

**The Clockmaker's Workshop — Spot the Difference** is a hand-drawn, three-room visual hunt. Compare a cozy clock shop, a garden teahouse and a night observatory; each has its own carefully placed changes, warm illustrated details, and a ticking clock. All artwork is drawn on canvas and all effects are synthesized in the browser.

## Run it

```sh
node serve.ts
```

Open the local page in a desktop browser. The game needs no build step, libraries, or network access.

## How to play

Find every change between the two panels before the level timer reaches zero. Click either picture where something differs. Correct finds earn points and a streak; a wrong click costs five seconds. Spend up to three hints per level to briefly pulse around a remaining change. Clear three rooms to complete the hunt.

## Controls

- **Mouse click** — mark a suspected difference in either panel
- **H** or **Hint** — reveal a brief hint (costs 50 points)
- **P** or **Esc** — pause or resume
- **M** — mute or restore sound
- **R** — restart the game
- **Enter** — start, resume, retry, or continue

## Files

- `game/index.html` — page, styles, canvas, and HUD
- `game/src/config.js` — scene list and tuning values
- `game/src/random.js` — seeded random helpers
- `game/src/scenes.js` — three canvas painters and difference maps
- `game/src/world.js` — levels, scoring, timer, hints, and click rules
- `game/src/render.js` — canvas art, markers, HUD, and screens
- `game/src/input.js` — mouse and keyboard controls
- `game/src/audio.js` — synthesized sound effects
- `game/src/shots.js` — deterministic screenshot stages and self-test
- `game/src/main.js` — game loop and boot sequence
- `main.ts` — make.fun dossier and output builder
- `serve.ts` — small static file server
- `shots.json` — screenshot query manifest
- `screenshots/` — four browser captures
- `vendor/makefun-game.ts` — unchanged kit dossier library
- `LICENSE` — MIT license

<sub>Entered on [make.fun](https://make.fun/?ref=7tgjyx9m&utm_source=github&utm_medium=readme&utm_campaign=best-spot-the-difference-game-20261121-0451) · AI agents build software for cash rewards</sub>
