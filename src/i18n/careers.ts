// Careers: page text and Nexora's own job offers. To post a job, add an entry to `jobs` (see the example at the end).
// Each job gets its own page at /fr/carrieres/{slug.fr}/ and /en/careers/{slug.en}/, with an application form.
import type { Lang } from './content';

type Tx = Record<Lang, string>;
type TxList = Record<Lang, string[]>;
export type Department = 'business' | 'hr' | 'travel' | 'desk' | 'admin';
export type Contract = 'cdi' | 'cdd' | 'internship' | 'freelance' | 'parttime';
export type WorkMode = 'onsite' | 'hybrid' | 'remote';

export interface Job {
  id: string;                  // short and unique, e.g. 'hr-assistant-2026'
  status: 'open' | 'closed';   // 'closed' keeps the page but stops applications
  posted: string;              // ISO date, e.g. '2026-11-02'
  deadline?: string;           // ISO date; applications close automatically after it
  slug: Tx;
  title: Tx;
  department: Department;
  contract: Contract;
  mode: WorkMode;
  location: Tx;
  start?: Tx;
  summary: Tx;
  missions: TxList;
  profile: TxList;
  plus?: TxList;
  offer?: TxList;
}

export const jobs: Job[] = [];

const fr = {
  meta: { title: 'Carrières · Rejoindre Nexora Services Company Ltd', description: 'Les offres d’emploi et de stage de Nexora à Douala et Nkongsamba, et la candidature spontanée pour rejoindre notre équipe.' },
  eyebrow: 'Carrières', title: 'Rejoignez-nous',
  lede: 'Construisez avec nous des entreprises plus solides. Nous recherchons des personnes rigoureuses, curieuses et fiables pour accompagner nos clients en conseil, en RH, en voyages et au comptoir. Consultez nos offres ou envoyez-nous une candidature spontanée.',
  whyEyebrow: 'Pourquoi Nexora', whyTitle: 'Un cabinet où l’on apprend vite',
  why: [
    { icon: 'chart', name: 'Un vrai impact', text: 'Vous travaillez sur des problèmes concrets de PME, d’ONG et d’institutions, et vous voyez le résultat.' },
    { icon: 'book', name: 'Apprendre en continu', text: 'Méthodes de conseil, outils numériques et IA responsable : vous progressez à chaque mission.' },
    { icon: 'globe', name: 'Une équipe bilingue', text: 'Nous travaillons en français et en anglais, avec des clients au Cameroun et des partenaires à l’étranger.' },
    { icon: 'shield', name: 'Des valeurs claires', text: 'Intégrité, confidentialité et respect des personnes : les mêmes règles pour nos clients et pour notre équipe.' },
  ],
  listEyebrow: 'Offres ouvertes', listTitle: 'Nos offres d’emploi et de stage',
  filterDept: 'Domaine', filterContract: 'Type de contrat', all: 'Tous', count: (n: number) => (n === 0 ? 'Aucune offre' : n === 1 ? '1 offre' : `${n} offres`),
  noMatch: 'Aucune offre ne correspond à ces filtres.',
  emptyTitle: 'Aucune offre ouverte pour le moment',
  emptyText: 'Nos prochaines offres seront publiées ici. En attendant, envoyez-nous une candidature spontanée : nous vous contacterons dès qu’un poste correspond à votre profil.',
  emptyCta: 'Candidature spontanée',
  posted: 'Publiée le', deadline: 'Date limite', closed: 'Clôturée', view: 'Voir l’offre',
  processEyebrow: 'Notre processus', processTitle: 'Comment nous recrutons',
  process: [
    { name: 'Candidature', text: 'Vous postulez en ligne avec votre CV. Chaque candidature est lue par une personne, pas par un logiciel.' },
    { name: 'Présélection', text: 'Si votre profil correspond, nous vous appelons pour un premier échange.' },
    { name: 'Entretien', text: 'Un entretien avec la direction, parfois accompagné d’un court cas pratique.' },
    { name: 'Réponse', text: 'Nous vous donnons une réponse, positive ou non, à la fin du processus.' },
  ],
  spontEyebrow: 'Candidature spontanée', spontTitle: 'Aucune offre pour votre profil\u00a0? Écrivez-nous.',
  spontText: 'Présentez-vous et joignez votre CV. Nous gardons votre candidature et revenons vers vous dès qu’une opportunité se présente.',
  fraudTitle: 'Attention aux arnaques',
  fraudText: 'Nexora ne demande jamais d’argent pour postuler, passer un entretien ou obtenir un poste. Nos offres sont publiées uniquement sur ce site et sur nos comptes officiels.',
  abroad: 'Vous cherchez un emploi à l’étranger ? Ce n’est pas un recrutement chez Nexora : voyez notre assistance aux dossiers de visa de travail.',
  abroadLink: 'Travel & Mobilité',
  apply: 'Postuler à cette offre', applyTitle: 'Postuler', back: 'Toutes les offres',
  sMissions: 'Vos missions', sProfile: 'Votre profil', sPlus: 'Un plus', sOffer: 'Ce que nous offrons',
  closedText: 'Cette offre est clôturée. Vous pouvez nous envoyer une candidature spontanée.',
  start: 'Prise de poste',
  form: {
    name: 'Nom complet', email: 'E-mail', phone: 'Téléphone (WhatsApp)', city: 'Ville de résidence',
    area: 'Domaine souhaité', areaOther: 'Autre', contract: 'Type de contrat souhaité', availability: 'Disponibilité',
    availabilityPh: 'Ex. : immédiate, dans un mois', linkedin: 'Profil LinkedIn (facultatif)',
    message: 'Votre motivation', messagePh: 'En quelques lignes : qui vous êtes, ce que vous savez faire et pourquoi Nexora.',
    cv: 'Votre CV', cvHint: 'PDF ou Word, 2 Mo maximum.', cvTooBig: 'Votre CV dépasse 2 Mo. Réduisez sa taille (par exemple en PDF) et réessayez.',
    consent: 'J’accepte que Nexora utilise ces informations pour étudier ma candidature et la conserve 12 mois au maximum pour d’autres postes.',
    privacy: 'Protection des données', submit: 'Envoyer ma candidature',
    sent: 'Merci, votre candidature a bien été envoyée. Nous la lisons avec attention et revenons vers vous si votre profil correspond.',
  },
  departments: { business: 'Business Solutions', hr: 'RH & Formation', travel: 'Travel & Mobilité', desk: 'Service Desk', admin: 'Administration et finance' } as Record<Department, string>,
  contracts: { cdi: 'CDI', cdd: 'CDD', internship: 'Stage', freelance: 'Consultant indépendant', parttime: 'Temps partiel' } as Record<Contract, string>,
  modes: { onsite: 'Sur site', hybrid: 'Hybride', remote: 'À distance' } as Record<WorkMode, string>,
};

const en: typeof fr = {
  meta: { title: 'Careers · Join Nexora Services Company Ltd', description: 'Nexora’s job and internship openings in Douala and Nkongsamba, and open applications to join our team.' },
  eyebrow: 'Careers', title: 'Join us',
  lede: 'Build stronger organisations with us. We are looking for rigorous, curious and reliable people to support our clients in consulting, HR, travel and at our counter. Browse our openings or send us an open application.',
  whyEyebrow: 'Why Nexora', whyTitle: 'A consultancy where you learn fast',
  why: [
    { icon: 'chart', name: 'Real impact', text: 'You work on concrete problems for SMEs, NGOs and institutions, and you see the result.' },
    { icon: 'book', name: 'Keep learning', text: 'Consulting methods, digital tools and responsible AI: you grow with every engagement.' },
    { icon: 'globe', name: 'A bilingual team', text: 'We work in French and English, with clients in Cameroon and partners abroad.' },
    { icon: 'shield', name: 'Clear values', text: 'Integrity, confidentiality and respect for people: the same rules for our clients and our team.' },
  ],
  listEyebrow: 'Open positions', listTitle: 'Our job and internship openings',
  filterDept: 'Area', filterContract: 'Contract type', all: 'All', count: (n: number) => (n === 0 ? 'No openings' : n === 1 ? '1 opening' : `${n} openings`),
  noMatch: 'No openings match these filters.',
  emptyTitle: 'No open positions right now',
  emptyText: 'Our next openings will be posted here. Meanwhile, send us an open application: we will contact you as soon as a role matches your profile.',
  emptyCta: 'Open application',
  posted: 'Posted', deadline: 'Deadline', closed: 'Closed', view: 'View the job',
  processEyebrow: 'Our process', processTitle: 'How we recruit',
  process: [
    { name: 'Application', text: 'You apply online with your CV. Every application is read by a person, not by software.' },
    { name: 'Screening', text: 'If your profile fits, we call you for a first conversation.' },
    { name: 'Interview', text: 'An interview with management, sometimes with a short practical case.' },
    { name: 'Answer', text: 'We give you an answer, positive or not, at the end of the process.' },
  ],
  spontEyebrow: 'Open application', spontTitle: 'No opening for your profile? Write to us.',
  spontText: 'Introduce yourself and attach your CV. We keep your application and come back to you as soon as an opportunity arises.',
  fraudTitle: 'Beware of scams',
  fraudText: 'Nexora never asks for money to apply, attend an interview or get a job. Our openings are published only on this website and our official accounts.',
  abroad: 'Looking for a job abroad? That is not recruitment at Nexora: see our work visa document assistance.',
  abroadLink: 'Travel & Mobility',
  apply: 'Apply for this job', applyTitle: 'Apply', back: 'All openings',
  sMissions: 'What you will do', sProfile: 'Your profile', sPlus: 'Nice to have', sOffer: 'What we offer',
  closedText: 'This opening is closed. You can send us an open application instead.',
  start: 'Start date',
  form: {
    name: 'Full name', email: 'Email', phone: 'Phone (WhatsApp)', city: 'City of residence',
    area: 'Preferred area', areaOther: 'Other', contract: 'Preferred contract type', availability: 'Availability',
    availabilityPh: 'E.g. immediately, in one month', linkedin: 'LinkedIn profile (optional)',
    message: 'Your motivation', messagePh: 'A few lines: who you are, what you do well and why Nexora.',
    cv: 'Your CV', cvHint: 'PDF or Word, 2 MB maximum.', cvTooBig: 'Your CV is larger than 2 MB. Reduce its size (for example as a PDF) and try again.',
    consent: 'I agree that Nexora may use this information to review my application and keep it for up to 12 months for other roles.',
    privacy: 'Data protection policy', submit: 'Send my application',
    sent: 'Thank you, your application has been sent. We read it carefully and will come back to you if your profile fits.',
  },
  departments: { business: 'Business Solutions', hr: 'HR & Training', travel: 'Travel & Mobility', desk: 'Service Desk', admin: 'Administration and finance' },
  contracts: { cdi: 'Permanent', cdd: 'Fixed-term', internship: 'Internship', freelance: 'Independent consultant', parttime: 'Part-time' },
  modes: { onsite: 'On site', hybrid: 'Hybrid', remote: 'Remote' },
};

export const careers: Record<Lang, typeof fr> = { fr, en };

/* Example of a job entry (copy into `jobs` above and adapt):
{
  id: 'service-desk-agent-2026',
  status: 'open',
  posted: '2026-11-02',
  deadline: '2026-11-30',
  slug: { fr: 'agent-service-desk', en: 'service-desk-agent' },
  title: { fr: 'Agent(e) Service Desk', en: 'Service Desk agent' },
  department: 'desk', contract: 'cdd', mode: 'onsite',
  location: { fr: 'Nkongsamba', en: 'Nkongsamba' },
  start: { fr: 'Dès que possible', en: 'As soon as possible' },
  summary: { fr: '…', en: '…' },
  missions: { fr: ['…'], en: ['…'] },
  profile: { fr: ['…'], en: ['…'] },
},
*/
