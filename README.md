# CodingMarvel

**CodingMarvel ([codingmarvel.com](https://codingmarvel.com)) is a directory of tools built by one developer: web apps for tasks, habits, PDFs and video, native Windows utilities written in Rust, Chrome extensions and Claude Code agent skills.**

<p align="center">
  <a href="https://codingmarvel.com"><img src="https://img.shields.io/badge/live-codingmarvel.com-d32f2f?style=for-the-badge" alt="Live site" /></a>
  <img src="https://img.shields.io/badge/Astro-5-ff5d01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro 5" />
  <img src="https://img.shields.io/badge/Cloudflare-Workers-f38020?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Cloudflare Workers" />
</p>

## What's listed

| Section | Apps |
| --- | --- |
| Web apps | [Ehmatrix](https://ehmatrix.codingmarvel.com), [Pollytasks](https://pollytasks.codingmarvel.com), [HabitGrid](https://habitgrid.codingmarvel.com), [Love for PDF](https://pdf.codingmarvel.com), [Video Grid Maker](https://video-grid-maker.codingmarvel.com), [X Tracker](https://x-tracker.codingmarvel.com), [Young Again](https://youngagain.codingmarvel.com) (18+) |
| Windows apps | [Platter](https://github.com/kyameinsahilwho/platter), [MAX File Recovery](https://github.com/kyameinsahilwho/ReincarnateMax), [Egress](https://github.com/kyameinsahilwho/egress) |
| Chrome extensions | [Item Numbers, Himekuri Countdown, Grok Chat Date Categorizer, Lexis](https://github.com/kyameinsahilwho/cool-chrome-extensions) |
| Agent skills | [frontend-design, video-editing, 3d-ai-video-edit, find-skills](https://github.com/kyameinsahilwho/kyameinsahilwho/tree/main/SSSkills) |

Every card shows the app's icon and a one-line tagline. Hover over it (or tap the chevron on a phone) and it expands to show what the app does, its main features, what it's built with and where to open it.

## Built for search and AI answers

- **Static HTML**: one fast page, no client framework.
- **Structured data**: `SoftwareApplication` JSON-LD for every listed app, with real prices and source links.
- **[`/llms.txt`](https://codingmarvel.com/llms.txt)**: a plain-text map of every app for AI answer engines, generated from the same data as the page.
- **Discovery files**: `sitemap-index.xml` and `robots.txt`.
- **Accessibility**: light and dark themes, reduced-motion support, keyboard and screen-reader friendly cards.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static build into dist/ (deployed on Cloudflare Workers)
```

## Add an app

1. Add an entry to [`src/data/apps.ts`](src/data/apps.ts) (`platform` is `Web`, `Windows`, `Chrome` or `Skill`).
2. Put its icon in `public/icons/`.
3. Set `repo` (or `sourceUrl`) only when the source is public.

The page, JSON-LD and `llms.txt` all update from that one file.

## FAQ

### What is CodingMarvel?
It is the home page for one developer's projects: browser tools, Windows utilities, Chrome extensions and agent skills, each with a short description and a link.

### Are the CodingMarvel tools free?
All the web apps can be used for free except X Tracker, which needs a $3/month plan to sync with X. The Windows apps (installers on GitHub Releases), Chrome extensions and skills are free to download from GitHub.

### Where is the source code?
Each card links to its GitHub repository when it is public. The extensions live in [cool-chrome-extensions](https://github.com/kyameinsahilwho/cool-chrome-extensions) and the skills in [SSSkills](https://github.com/kyameinsahilwho/kyameinsahilwho/tree/main/SSSkills).
