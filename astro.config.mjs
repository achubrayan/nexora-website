// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.nexoraservicescompany.com',
  trailingSlash: 'always',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  build: { inlineStylesheets: 'always' },
});
