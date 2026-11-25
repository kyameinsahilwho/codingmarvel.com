# codingmarvel.com

A directory of the apps built by CodingMarvel: web tools plus Windows desktop apps written in Rust.

- App data (names, copy, icons, links): `src/data/apps.ts`
- App icons: `public/icons/`
- Page: `src/pages/index.astro`, styles: `src/styles/global.css`

```sh
npm install
npm run dev      # local dev server
npm run build    # static build into dist/ (deployed on Cloudflare Workers)
```

To add an app, add an entry to `src/data/apps.ts` and drop its icon into `public/icons/`.
Set `repo` only when the GitHub repository is public.
