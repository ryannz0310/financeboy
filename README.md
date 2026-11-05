# FinanceBoy

Created by Ryan.

A bilingual (English / Vietnamese) pre-finance learning site: lessons with quizzes, flashcards with spaced repetition, a mistake notebook, a 12-month roadmap, a source-credibility library and calculators (compound interest, NPV & IRR, three-statement links, DCF).

## Run locally

It is a static site with no build step. Open `index.html`, or serve the folder:

```
python3 -m http.server 8000
```

## Deploy on Vercel

1. Go to vercel.com/new and import this repository.
2. Framework preset: **Other**. Leave the build command and output directory empty.
3. Deploy. Every push to `main` redeploys the site.

Progress is saved in the browser (localStorage). Use Notes → Export full progress backup to move it between devices.
