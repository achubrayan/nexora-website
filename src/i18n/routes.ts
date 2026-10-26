import type { Lang } from './content';

// Every page and its translated URL. The language switch uses this map to land on the same page.
export const routes = {
  home: { fr: '/fr/', en: '/en/' },
  services: { fr: '/fr/expertises/', en: '/en/services/' },
  business: { fr: '/fr/expertises/business-solutions/', en: '/en/services/business-solutions/' },
  hr: { fr: '/fr/expertises/rh-formation/', en: '/en/services/hr-training/' },
  travel: { fr: '/fr/expertises/voyages-mobilite/', en: '/en/services/travel-mobility/' },
  checklist: { fr: '/fr/expertises/voyages-mobilite/liste-des-documents/', en: '/en/services/travel-mobility/document-checklist/' },
  desk: { fr: '/fr/service-desk/', en: '/en/service-desk/' },
  approach: { fr: '/fr/approche/', en: '/en/approach/' },
  clients: { fr: '/fr/clients/', en: '/en/clients/' },
  insights: { fr: '/fr/ressources/', en: '/en/insights/' },
  about: { fr: '/fr/a-propos/', en: '/en/about/' },
  contact: { fr: '/fr/contact/', en: '/en/contact/' },
  careers: { fr: '/fr/carrieres/', en: '/en/careers/' },
  start: { fr: '/fr/demarrer/', en: '/en/get-started/' },
  legal: { fr: '/fr/mentions-legales/', en: '/en/legal-notice/' },
  privacy: { fr: '/fr/protection-des-donnees/', en: '/en/data-protection/' },
  confidentiality: { fr: '/fr/confidentialite/', en: '/en/confidentiality/' },
  cookies: { fr: '/fr/cookies/', en: '/en/cookies/' },
} as const;

export type PageKey = keyof typeof routes;
// Translated paths of a page that is not in the map above (an article), for hreflang and the language switch.
export type Paths = Record<Lang, string>;
export const href = (lang: Lang, key: PageKey) => routes[key][lang];
// Link to the guided request, optionally preselecting a division (d), services (s) or a destination (dest).
export const startHref = (lang: Lang, q: { d?: string; s?: string; dest?: string } = {}) => {
  const qs = new URLSearchParams(Object.entries(q).filter(([, v]) => v) as [string, string][]).toString();
  return routes.start[lang] + (qs ? `?${qs}` : '');
};
