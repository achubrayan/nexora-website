# Nexora Services Company Ltd website

Static site for nexoraservicescompany.com, built with Astro. French is the default language (`/fr/`), English is at `/en/`.

## Work on it

```
npm install
npm run dev      # local site at http://localhost:4321
npm run build    # production build in dist/
```

## Deploy

Netlify builds every push to `main` using `netlify.toml` (build command `npm run build`, publish folder `dist`, Node 22). Forms (`request-fr`, `request-en`, contact) are Netlify forms.

## Where things are

- Page text: `src/i18n/` (one file per section, French and English side by side)
- Page layouts: `src/views/`, routes in `src/i18n/routes.ts`
- Styles: `src/styles/global.css`
- Share images: `public/og/` (one per page and language)
