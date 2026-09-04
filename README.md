# Topview Homepage Clone

This project recreates the Topview homepage as a single self-contained `index.html`.

- Full navigation, hero composer, product sections, skill strip, model cards, case gallery, workflow, FAQ, CTA, and footer.
- 12 placeholder video cards use public Unsplash poster images and native `<video>` elements without original Topview media.
- Native JavaScript handles menus, mobile navigation, Composer modes, model selection, filters, media previews, skill dialogs, FAQ, toast feedback, and scroll reveal effects.
- `worker.js` contains the Cloudflare Workers Static Assets entry point and an HTML-string fallback.

## Local

```powershell
python -m http.server 4173
```

Open `http://127.0.0.1:4173/`.

## Cloudflare Worker

```powershell
npx wrangler deploy --temporary
```

For persistent deployment, authenticate with `npx wrangler login` and run `npx wrangler deploy`.
