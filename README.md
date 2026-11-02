# saxymofo.com

Sam Slotsky's music site, built with [Astro](https://astro.build) and deployed by Netlify.

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # type check + static build into dist/
npm run fmt        # prettier
```

## Adding a show

Add a Markdown file to `src/content/shows/`, e.g. `2026-11-14-palmers.md`:

```md
---
date: 2026-11-14
time: 8pm
venue: Palmer's Bar
band: Bobby J's West Bank Social Club
link: https://westbank-socialclub.com/
---

Optional one-line note.
```

`city` defaults to Minneapolis, MN. Shows split into upcoming and past at build time, so the site needs a rebuild
(any deploy) to move a show into "Past".

## Adding a video

Add an entry to `src/data/videos.ts` with the YouTube video ID (the `v=` part of the URL).

## Bands and links

Bands, social links and the Calendly URL live in `src/data/site.ts`.
