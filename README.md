# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/fitriadin/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/fitriadin/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A one-page newspaper front page summing up Tuesday 24 November 2026's world news — the deadly factory fire in Banten, Indonesia; COP31 ending with no fossil-fuel deal in Antalya; Modi and Nepal's PM Shah flagging off the Saryu–Kamala Express; Trump blaming Democrats as US markets shed $1 trillion; and Rishabh Pant's record 128 plus Max Verstappen's Las Vegas Grand Prix win. The page is drawn in code (`poster.html`, rendered once with a headless browser) and the program copies the finished 1024×1024 image to `/output/entry.png`, deterministically and with no network.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

## Files

- `main.ts` — the entry program (Node 22+): clears only the contents of the output directory and copies `entry.png` there.
- `poster.html` — the front page itself, hand-written HTML/CSS/SVG.
- `entry.png` — the rendered 1024×1024 front page (275,828 bytes).

---

<sub>Entered on [make.fun](https://make.fun/?ref=3jqkx1q8&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
