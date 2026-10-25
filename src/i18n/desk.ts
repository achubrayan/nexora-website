// Nexora Service Desk: the 8 walk-in counter services Fabrice chose on 11 Oct 2026 (NXR-OPS-002).
// No prices on the website: the price list is displayed at the counter.
import type { Lang } from './content';
import type { PageKey } from './routes';

export interface DeskService { id: string; icon: string; name: string; text: string; points: string[]; wa: string }

const fr = {
  meta: { title: 'Nexora Service Desk · Services du quotidien · Douala et Nkongsamba', description: "Impression, photocopie et scan, photos d'identité et de visa, CV et lettres de motivation, formulaires en ligne, saisie, voyages, formations pratiques et pack petite entreprise : un comptoir rapide et soigné." },
  menu: { tag: 'SD', name: 'Service Desk', line: 'Impression, photos, CV, formulaires en ligne' },
  home: { title: 'Un service rapide au comptoir ?', text: 'Impression, photos d’identité, CV, candidatures en ligne et plus encore, dans nos bureaux de Douala et Nkongsamba.', link: 'Voir le Service Desk' },
  eyebrow: 'Nexora Service Desk', title: 'Les services du quotidien, avec le soin d’un cabinet.',
  lede: 'Imprimer un dossier, refaire son CV, remplir une candidature en ligne ou préparer une photo de visa : notre comptoir s’en occupe rapidement, avec un reçu pour chaque prestation.',
  ticket: { head: 'Ticket Service Desk', ready: 'Prêt', receipt: 'Reçu remis' },
  listEyebrow: 'Au comptoir', listTitle: 'Huit services, un seul comptoir',
  ask: 'Demander sur WhatsApp',
  services: [
    { id: 'print', icon: 'printer', name: 'Impression, photocopie et scan', text: 'Noir et blanc ou couleur, copies, numérisation et envoi de vos documents par e-mail.', points: ['Dossiers, mémoires et rapports', 'Scan vers e-mail ou clé USB', 'Fichiers supprimés après chaque travail'], wa: "Bonjour Nexora, j'ai des documents à imprimer / scanner." },
    { id: 'photo', icon: 'camera', name: "Photos d'identité et de visa", text: 'Photos pour passeport, carte d’identité, concours et visas, au format exigé par chaque administration ou ambassade.', points: ['Fond et cadrage conformes', 'Formats visa Schengen, Canada, EAU', 'Tirages et fichier numérique'], wa: "Bonjour Nexora, j'ai besoin de photos d'identité / de visa." },
    { id: 'cv', icon: 'doc', name: 'CV et lettres de motivation', text: 'Un CV moderne et une lettre adaptée au poste, à la bourse ou au programme d’études, en français ou en anglais.', points: ['CV refait ou créé', 'Lettre de motivation sur mesure', 'Profil LinkedIn en option'], wa: "Bonjour Nexora, je souhaite faire mon CV / ma lettre de motivation." },
    { id: 'online', icon: 'globe', name: 'Candidatures et formulaires en ligne', text: 'Concours, inscriptions universitaires, Campus France, portails d’emploi, pré-enrôlements : nous remplissons avec vous, sans erreur.', points: ['Création de compte et suivi', 'Pièces scannées au bon format', 'Frais officiels séparés, jamais majorés'], wa: "Bonjour Nexora, j'ai besoin d'aide pour une candidature en ligne." },
    { id: 'typing', icon: 'keyboard', name: 'Saisie et mise en forme', text: 'Lettres, demandes administratives, rapports et mémoires saisis et mis en page proprement.', points: ['Lettres et demandes officielles', 'Rapports et mémoires', 'Mise en page soignée'], wa: "Bonjour Nexora, j'ai un document à saisir / mettre en forme." },
    { id: 'travel', icon: 'plane', name: 'Comptoir voyages', text: 'Devis et réservation de billets et d’hôtels, prise de rendez-vous visa et relecture de votre liste de documents.', points: ['Billets via nos partenaires agréés', 'Rendez-vous consulaires', 'Assistance documentaire uniquement'], wa: "Bonjour Nexora, je prépare un voyage." },
    { id: 'training', icon: 'users', name: 'Formations pratiques', text: 'En petits groupes, en soirée ou le samedi : informatique de base, Word et Excel au travail, outils d’IA pour votre activité.', points: ['Petits groupes', 'Soirées et samedis', 'Exercices sur vos propres cas'], wa: "Bonjour Nexora, je suis intéressé(e) par une formation pratique." },
    { id: 'pack', icon: 'briefcase', name: 'Pack petite entreprise', text: 'Modèles de factures et de reçus, liste de prix et papier à en-tête à votre nom, prêts à utiliser.', points: ['Factures et reçus', 'Liste de prix', 'Papier à en-tête'], wa: "Bonjour Nexora, je souhaite le pack petite entreprise." },
  ] as DeskService[],
  howEyebrow: 'Comment ça marche', howTitle: 'Simple et rapide',
  how: [
    { name: 'Passez ou écrivez-nous', text: 'Venez au comptoir ou envoyez vos documents et votre besoin sur WhatsApp.' },
    { name: 'Nous préparons', text: 'Le travail est fait au bureau, sur nos postes, et relu avant remise.' },
    { name: 'Vous récupérez', text: 'Vous repartez avec votre document et un reçu, ou vous le recevez par e-mail.' },
  ],
  promiseEyebrow: 'Nos engagements', promiseTitle: 'Le sérieux d’un cabinet, au comptoir',
  promises: [
    { icon: 'check', name: 'Prix affichés', text: 'Une liste de prix claire au comptoir, la même pour tous.' },
    { icon: 'doc', name: 'Un reçu à chaque fois', text: 'Chaque prestation donne lieu à un reçu au nom de Nexora.' },
    { icon: 'shield', name: 'Vos documents protégés', text: 'Copies et scans supprimés après chaque travail, sauf demande de votre part.' },
    { icon: 'globe', name: 'Frais officiels séparés', text: 'Les frais d’administration sont payés à part et jamais majorés.' },
  ],
  nextEyebrow: 'Et ensuite', nextTitle: 'Le comptoir ouvre sur nos trois divisions',
  next: [
    { key: 'hr' as PageKey, name: 'Votre carrière', text: 'Après le CV : coaching d’entretien et formations pour progresser.' },
    { key: 'business' as PageKey, name: 'Votre entreprise', text: 'Après le pack : procédures, tableaux de bord et accompagnement.' },
    { key: 'travel' as PageKey, name: 'Votre projet à l’étranger', text: 'Après la candidature : assistance au dossier de visa et réservations.' },
  ],
  visit: 'Où nous trouver', call: 'Appelez ou écrivez avant de passer pour vérifier la disponibilité du service.',
  bandTitle: 'Un document à préparer aujourd’hui ?', bandText: 'Envoyez-le sur WhatsApp ou passez au comptoir.',
};

const en: typeof fr = {
  meta: { title: 'Nexora Service Desk · Everyday services · Douala and Nkongsamba', description: 'Printing, copying and scanning, ID and visa photos, CVs and cover letters, online forms, typing, travel, practical training and a small-business pack: a fast, careful counter.' },
  menu: { tag: 'SD', name: 'Service Desk', line: 'Printing, photos, CVs, online forms' },
  home: { title: 'A quick service at the counter?', text: 'Printing, ID photos, CVs, online applications and more, at our offices in Douala and Nkongsamba.', link: 'See the Service Desk' },
  eyebrow: 'Nexora Service Desk', title: 'Everyday services, with a consultancy’s care.',
  lede: 'Printing a file, redoing your CV, filling in an online application or preparing a visa photo: our counter handles it quickly, with a receipt for every service.',
  ticket: { head: 'Service Desk ticket', ready: 'Ready', receipt: 'Receipt issued' },
  listEyebrow: 'At the counter', listTitle: 'Eight services, one counter',
  ask: 'Ask on WhatsApp',
  services: [
    { id: 'print', icon: 'printer', name: 'Printing, copying and scanning', text: 'Black and white or colour, copies, scanning and emailing your documents.', points: ['Files, theses and reports', 'Scan to email or USB', 'Files deleted after every job'], wa: 'Hello Nexora, I have documents to print / scan.' },
    { id: 'photo', icon: 'camera', name: 'ID and visa photos', text: 'Photos for passports, ID cards, exams and visas, in the format each authority or embassy requires.', points: ['Compliant background and framing', 'Schengen, Canada and UAE visa formats', 'Prints and digital file'], wa: 'Hello Nexora, I need ID / visa photos.' },
    { id: 'cv', icon: 'doc', name: 'CVs and cover letters', text: 'A modern CV and a letter tailored to the job, scholarship or study programme, in French or English.', points: ['CV redone or created', 'Tailored cover letter', 'LinkedIn profile as an option'], wa: 'Hello Nexora, I would like a CV / cover letter.' },
    { id: 'online', icon: 'globe', name: 'Online applications and forms', text: 'Public exams, university applications, Campus France, job portals, pre-enrolment: we fill them in with you, without mistakes.', points: ['Account creation and follow-up', 'Documents scanned in the right format', 'Official fees separate, never marked up'], wa: 'Hello Nexora, I need help with an online application.' },
    { id: 'typing', icon: 'keyboard', name: 'Typing and formatting', text: 'Letters, administrative requests, reports and theses typed and laid out cleanly.', points: ['Letters and official requests', 'Reports and theses', 'Careful layout'], wa: 'Hello Nexora, I have a document to type / format.' },
    { id: 'travel', icon: 'plane', name: 'Travel counter', text: 'Flight and hotel quotes and bookings, visa appointment booking and a review of your document list.', points: ['Tickets through our licensed partners', 'Consular appointments', 'Document assistance only'], wa: 'Hello Nexora, I am preparing a trip.' },
    { id: 'training', icon: 'users', name: 'Practical training', text: 'Small groups, evenings or Saturdays: computer basics, Word and Excel for work, AI tools for your business.', points: ['Small groups', 'Evenings and Saturdays', 'Exercises on your own cases'], wa: 'Hello Nexora, I am interested in a practical course.' },
    { id: 'pack', icon: 'briefcase', name: 'Small-business pack', text: 'Invoice and receipt templates, a price list and letterhead in your name, ready to use.', points: ['Invoices and receipts', 'Price list', 'Letterhead'], wa: 'Hello Nexora, I would like the small-business pack.' },
  ],
  howEyebrow: 'How it works', howTitle: 'Simple and fast',
  how: [
    { name: 'Drop in or write to us', text: 'Come to the counter or send your documents and need on WhatsApp.' },
    { name: 'We prepare it', text: 'The work is done at the office, on our machines, and checked before handover.' },
    { name: 'You collect it', text: 'You leave with your document and a receipt, or receive it by email.' },
  ],
  promiseEyebrow: 'Our commitments', promiseTitle: 'A consultancy’s standards, at the counter',
  promises: [
    { icon: 'check', name: 'Prices on display', text: 'A clear price list at the counter, the same for everyone.' },
    { icon: 'doc', name: 'A receipt every time', text: 'Every service comes with a receipt in Nexora’s name.' },
    { icon: 'shield', name: 'Your documents protected', text: 'Copies and scans deleted after every job, unless you ask us to keep them.' },
    { icon: 'globe', name: 'Official fees kept separate', text: 'Administration fees are paid separately and never marked up.' },
  ],
  nextEyebrow: 'What comes next', nextTitle: 'The counter opens onto our three divisions',
  next: [
    { key: 'hr', name: 'Your career', text: 'After the CV: interview coaching and training to move ahead.' },
    { key: 'business', name: 'Your business', text: 'After the pack: SOPs, dashboards and ongoing support.' },
    { key: 'travel', name: 'Your project abroad', text: 'After the application: visa document assistance and bookings.' },
  ],
  visit: 'Where to find us', call: 'Call or write before coming in to check the service is available.',
  bandTitle: 'A document to prepare today?', bandText: 'Send it on WhatsApp or drop in at the counter.',
};

export const desk: Record<Lang, typeof fr> = { fr, en };
