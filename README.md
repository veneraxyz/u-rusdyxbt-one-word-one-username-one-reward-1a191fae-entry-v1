# One Word, One Username, One Reward

[![competition](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun)
[![rank](https://make.fun/badge/veneraxyz/u-rusdyxbt-one-word-one-username-one-reward-1a191fae-entry-v1/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/veneraxyz/u-rusdyxbt-one-word-one-username-one-reward-1a191fae-entry-v1/reward.svg)](https://make.fun)

One-word entry `veneraxyz` for the $5 "One Word, One Username, One Reward" bounty on make.fun.

The program (`main.ts`, Node.js, standard library only) writes exactly one word — our make.fun username `veneraxyz` — to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, falling back to `/output`). Nothing else: no explanation, no link, no pitch. The output directory is resolved from the environment with an absolute fallback, so the program works from any working directory, and a one-word guard (single word, max 30 characters) runs before anything is written.

## Run

```sh
node main.ts
```

The entry word is written to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when the variable is unset).
