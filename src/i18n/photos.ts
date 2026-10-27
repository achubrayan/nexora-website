// Photographs on the division pages: free Pexels photos (pexels.com/license), served and resized by the Netlify
// Image CDN from our own domain, so visitors never connect to Pexels. Credits are listed in the legal notice.
// They illustrate the kind of work we do; they never show Nexora staff or clients.
import type { Lang } from './content';

export interface Photo { id: number; alt: Record<Lang, string>; by: string; position?: 'top' | 'center' | 'bottom' }
export type PhotoSet = 'business' | 'hr' | 'travel';

export const photos: Record<PhotoSet, Photo[]> = {
  business: [
    { id: 30688593, by: 'Ninthgrid', alt: { fr: 'Une équipe en réunion de travail dans un bureau', en: 'A team in a working meeting in an office' } },
    { id: 9301257, by: 'Mikhail Nilov', alt: { fr: 'Un responsable présente un projet à ses collègues', en: 'A manager presents a project to colleagues' } },
    { id: 10376240, by: 'RDNE Stock project', alt: { fr: 'Un dirigeant au téléphone devant son ordinateur et ses dossiers', en: 'A business owner on the phone at his laptop, with files on the desk' } },
  ],
  hr: [
    { id: 30688591, by: 'Ninthgrid', alt: { fr: 'Un entretien entre deux professionnels dans un bureau', en: 'An interview between two professionals in an office' } },
    { id: 9034869, by: 'RDNE Stock project', alt: { fr: 'Une formatrice anime une séance devant un tableau blanc', en: 'A trainer leads a session at a whiteboard' } },
    { id: 8761336, by: 'Pavel Danilyuk', alt: { fr: 'Un séminaire de formation avec présentation sur écran', en: 'A training seminar with an on-screen presentation' } },
  ],
  travel: [
    { id: 4173205, by: 'Gustavo Fring', alt: { fr: 'Des voyageurs d’affaires, passeport en main, dans un aéroport', en: 'Business travellers holding passports in an airport' } },
    { id: 4173219, by: 'Gustavo Fring', alt: { fr: 'Un voyageur avec sa valise dans un couloir d’aéroport', en: 'A traveller with his suitcase in an airport corridor' } },
    { id: 7292747, by: 'Julia Volk', alt: { fr: 'L’aile d’un avion au coucher du soleil', en: 'An airplane wing at sunset' }, position: 'center' },
  ],
};

// Homepage cards: one photo per division, different from the large photo on the division page.
export const homePhotos: Record<PhotoSet, number> = { business: 9301257, hr: 9034869, travel: 4173219 };
export const photoById = (id: number) => Object.values(photos).flat().find((p) => p.id === id)!;

// Resized copy from the Netlify Image CDN (remote source allowed in netlify.toml).
export const photoSrc = (id: number, w: number, h: number, position = 'center') =>
  `/.netlify/images?url=${encodeURIComponent(`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`)}&w=${w}&h=${h}&fit=cover&position=${position}&fm=webp&q=72`;

export const credits = (lang: Lang) => {
  const all = Object.values(photos).flat();
  const names = [...new Set(all.map((p) => p.by))].join(', ');
  return lang === 'fr'
    ? `Photographies : ${names}, via Pexels (licence Pexels, libre d’utilisation). Elles illustrent nos domaines d’activité et ne représentent ni nos équipes ni nos clients.`
    : `Photographs: ${names}, via Pexels (Pexels licence, free to use). They illustrate our areas of work and do not show our team or our clients.`;
};
