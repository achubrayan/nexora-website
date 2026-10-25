// Indicative visa document checklists by visa type and destination group.
// The official list is always the consulate's or visa centre's; Nexora helps confirm it and prepare an accurate file.
// Document assistance only: no prices, fees amounts, processing times or guarantees.
import type { Lang } from '../i18n/content';
import type { Visa } from './mobility';

type T = Record<Lang, string>;
export type Group = 'canada' | 'uae' | 'schengen' | 'europe';
export interface Item { id: string; t: T; note?: T }
export interface Section { id: string; t: T; items: Item[] }

const i = (id: string, fr: string, en: string, note?: [string, string]): Item => ({ id, t: { fr, en }, ...(note ? { note: { fr: note[0], en: note[1] } } : {}) });

// Documents asked for almost every application.
const identity: Section = {
  id: 'identity', t: { fr: 'Identité et formulaires', en: 'Identity and forms' },
  items: [
    i('passport', 'Passeport valide, avec des pages vierges', 'Valid passport with blank pages', ['Vérifiez sa date d’expiration par rapport à toute la durée du séjour.', 'Check its expiry date against the whole length of your stay.']),
    i('passport-copy', 'Copies des pages d’identité et des visas précédents', 'Copies of the identity page and previous visas'),
    i('photos', 'Photos d’identité récentes au format exigé', 'Recent passport photos in the required format'),
    i('form', 'Formulaire de demande rempli, daté et signé', 'Completed, dated and signed application form'),
    i('birth', 'Acte de naissance', 'Birth certificate'),
    i('fees', 'Reçu de paiement des frais consulaires', 'Receipt for the consular fees'),
  ],
};

const byVisa: Record<Visa, Section[]> = {
  work: [
    { id: 'job', t: { fr: 'Emploi', en: 'Employment' }, items: [
      i('offer', 'Contrat de travail ou offre d’emploi signé(e)', 'Signed employment contract or job offer'),
      i('permit', 'Autorisation de travail ou approbation préalable du pays d’accueil, lorsque la procédure l’exige', 'Work authorisation or prior approval from the host country, where the procedure requires it'),
      i('cv', 'CV à jour', 'Up-to-date CV'),
      i('diplomas', 'Diplômes et attestations de travail', 'Diplomas and employment certificates', ['Avec traduction assermentée s’ils ne sont ni en français ni en anglais, et reconnaissance des qualifications si elle est exigée.', 'With a sworn translation when required, and recognition of qualifications where it is required.']),
    ] },
    { id: 'record', t: { fr: 'Antécédents et santé', en: 'Record and health' }, items: [
      i('police', 'Extrait de casier judiciaire récent', 'Recent police clearance certificate'),
      i('medical', 'Certificat ou examen médical, si exigé', 'Medical certificate or examination, if required'),
      i('housing', 'Preuve de logement ou engagement de l’employeur', 'Proof of accommodation or employer undertaking'),
    ] },
  ],
  study: [
    { id: 'school', t: { fr: 'Études', en: 'Studies' }, items: [
      i('admission', 'Lettre d’admission de l’établissement', 'Letter of admission from the institution'),
      i('transcripts', 'Relevés de notes et diplômes', 'Transcripts and diplomas', ['Avec traduction assermentée si nécessaire.', 'With a sworn translation where needed.']),
      i('tuition', 'Preuve de paiement des frais de scolarité ou de l’acompte, si exigée', 'Proof of tuition or deposit payment, if required'),
      i('motivation', 'Lettre de motivation et projet d’études', 'Motivation letter and study plan'),
      i('language', 'Attestation de niveau de langue, si exigée', 'Language certificate, if required'),
    ] },
    { id: 'funds', t: { fr: 'Ressources et séjour', en: 'Funds and stay' }, items: [
      i('funds', 'Preuve de ressources : relevés bancaires, bourse ou garant', 'Proof of funds: bank statements, scholarship or sponsor'),
      i('sponsor', 'Pièces du garant : lettre de prise en charge, revenus, identité', 'Sponsor documents: support letter, income, identity'),
      i('insurance', 'Assurance santé couvrant le séjour', 'Health insurance for the stay'),
      i('housing', 'Preuve de logement', 'Proof of accommodation'),
    ] },
  ],
  visit: [
    { id: 'trip', t: { fr: 'Voyage', en: 'Trip' }, items: [
      i('itinerary', 'Itinéraire et réservation de vol', 'Itinerary and flight reservation', ['Nous vous conseillons sur le type de réservation adapté avant la décision de visa.', 'We advise you on the right type of reservation before the visa decision.']),
      i('hotel', 'Réservation d’hôtel, attestation d’hébergement ou lettre d’invitation', 'Hotel booking, proof of hosting or invitation letter'),
      i('insurance', 'Assurance voyage', 'Travel insurance'),
    ] },
    { id: 'ties', t: { fr: 'Situation et attaches', en: 'Situation and ties' }, items: [
      i('bank', 'Relevés bancaires récents', 'Recent bank statements'),
      i('job', 'Attestation de travail et de congé, registre de commerce ou certificat de scolarité', 'Employment and leave letter, business registration or school certificate'),
      i('ties', 'Preuves d’attaches au Cameroun : famille, biens, activité', 'Proof of ties to Cameroon: family, property, business'),
    ] },
  ],
};

// Points that depend on where the application goes.
const byGroup: Record<Group, Partial<Record<Visa, Item[]>>> = {
  schengen: {
    visit: [
      i('sc-ins', 'Assurance médicale de voyage d’au moins 30 000 €, valable dans tout l’espace Schengen', 'Travel medical insurance of at least €30,000, valid across the Schengen area'),
      i('sc-pass', 'Passeport délivré il y a moins de 10 ans et valable au moins 3 mois après le retour prévu', 'Passport issued within the last 10 years and valid at least 3 months after the planned return'),
      i('sc-where', 'Dépôt auprès du consulat ou du centre de visa du pays de destination principale', 'Application filed with the consulate or visa centre of the main destination country'),
      i('sc-bio', 'Relevé des empreintes digitales lors du dépôt', 'Fingerprints taken when you file'),
    ],
    work: [i('d-visa', 'Visa national de long séjour (type D) demandé à l’ambassade du pays d’emploi', 'National long-stay visa (type D) requested from the embassy of the country of employment')],
    study: [i('d-visa', 'Visa national de long séjour (type D) demandé à l’ambassade du pays d’études', 'National long-stay visa (type D) requested from the embassy of the country of study')],
  },
  europe: {
    work: [i('d-visa', 'Visa national de long séjour demandé à l’ambassade du pays d’emploi', 'National long-stay visa requested from the embassy of the country of employment')],
    study: [i('d-visa', 'Visa national de long séjour demandé à l’ambassade du pays d’études', 'National long-stay visa requested from the embassy of the country of study')],
    visit: [i('eu-visit', 'Visa de court séjour demandé auprès de l’ambassade du pays', 'Short-stay visa requested from the country’s embassy')],
  },
  canada: {
    work: [i('ca-offer', 'Offre d’emploi et, le cas échéant, étude d’impact sur le marché du travail (EIMT)', 'Job offer and, where applicable, a Labour Market Impact Assessment (LMIA)'), i('ca-bio', 'Données biométriques (empreintes et photo)', 'Biometrics (fingerprints and photo)')],
    study: [i('ca-loa', 'Lettre d’acceptation d’un établissement d’enseignement désigné (EED)', 'Letter of acceptance from a designated learning institution (DLI)'), i('ca-pal', 'Lettre d’attestation provinciale ou territoriale, le cas échéant', 'Provincial or territorial attestation letter, where applicable'), i('ca-bio', 'Données biométriques (empreintes et photo)', 'Biometrics (fingerprints and photo)')],
    visit: [i('ca-bio', 'Données biométriques (empreintes et photo)', 'Biometrics (fingerprints and photo)'), i('ca-host', 'Lettre d’invitation, si vous rendez visite à un proche ou à une entreprise', 'Invitation letter if you are visiting family or a business')],
  },
  uae: {
    work: [i('ae-sponsor', 'Demande portée par l’employeur, qui agit comme parrain', 'Application filed by the employer, acting as sponsor'), i('ae-arrival', 'Examen médical et empreintes à l’arrivée, pour le titre de séjour', 'Medical test and fingerprints on arrival, for the residence permit')],
    visit: [i('ae-sponsor', 'Parrain : hôtel, compagnie aérienne, agence ou proche résidant aux Émirats', 'Sponsor: hotel, airline, agency or relative resident in the UAE'), i('ae-photo', 'Photo sur fond blanc et copie couleur du passeport', 'Photo on a white background and colour copy of the passport')],
  },
};

export const groupOf = (d: { region: string; schengen?: boolean; id: string }): Group =>
  d.id === '124' ? 'canada' : d.id === '784' ? 'uae' : d.schengen ? 'schengen' : 'europe';

export const checklist = (visa: Visa, group: Group): Section[] => {
  const extra = byGroup[group][visa] ?? [];
  return [identity, ...byVisa[visa], ...(extra.length ? [{ id: 'country', t: { fr: 'Spécificités de la destination', en: 'Destination specifics' }, items: extra }] : [])];
};
