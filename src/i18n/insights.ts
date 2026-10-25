// Insights: short practical guides written by the Nexora team. General information, not legal advice.
import type { Lang } from './content';
import type { PageKey } from './routes';

export interface Block { h: string; p?: string[]; list?: string[] }
export interface Article {
  id: string;
  division: PageKey;
  date: string; // ISO
  minutes: number;
  slug: Record<Lang, string>;
  category: Record<Lang, string>;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  intro: Record<Lang, string[]>;
  body: Record<Lang, Block[]>;
  takeaway: Record<Lang, string>;
  cta: { label: Record<Lang, string>; to: 'start' | 'checklist'; d?: string; s?: string };
  disclaimer?: Record<Lang, string>;
}

export const articles: Article[] = [
  {
    id: 'sme-systems',
    division: 'business',
    date: '2026-10-25',
    minutes: 5,
    slug: { fr: 'cinq-systemes-pme', en: 'five-systems-for-smes' },
    category: { fr: 'Business Solutions', en: 'Business Solutions' },
    title: { fr: 'Les cinq systèmes qu’une PME devrait mettre en place en premier', en: 'Five systems every growing SME should put in place first' },
    excerpt: {
      fr: 'Trésorerie, procédures, contrôles, tableau de bord et bases RH : ce qui permet à une PME de grandir sans dépendre de la mémoire de son fondateur.',
      en: 'Cash, procedures, controls, a dashboard and HR basics: what lets an SME grow without relying on its founder’s memory.',
    },
    intro: {
      fr: ['La croissance révèle les faiblesses d’une organisation. Tant que l’entreprise est petite, le fondateur voit tout, décide de tout et se souvient de tout. Dès que l’équipe grandit, les décisions s’accumulent sur son bureau, la trésorerie réserve des surprises et la qualité du service dépend de la personne présente ce jour-là.', 'Il n’est pas nécessaire d’installer de lourds logiciels pour changer cela. Cinq systèmes simples suffisent à donner de la stabilité à la plupart des PME.'],
      en: ['Growth exposes the weak points of an organisation. While the business is small, the founder sees everything, decides everything and remembers everything. As the team grows, decisions pile up on the founder’s desk, cash brings surprises and service quality depends on who happens to be in that day.', 'You do not need heavy software to change this. Five simple systems are enough to stabilise most SMEs.'],
    },
    body: {
      fr: [
        { h: '1. Une trésorerie visible chaque semaine', p: ['La première cause de difficulté d’une PME n’est pas le manque de clients, mais le manque de visibilité sur l’argent disponible. Un plan de trésorerie simple, mis à jour chaque semaine, montre les encaissements et les décaissements prévus et permet d’anticiper plutôt que de subir.'], list: ['Séparer strictement les comptes de l’entreprise et les dépenses personnelles.', 'Tenir un journal de caisse quotidien et garder une pièce pour chaque dépense.', 'Rapprocher les relevés bancaires chaque mois.'] },
        { h: '2. Des procédures écrites pour les tâches qui comptent', p: ['Inutile de tout documenter. Commencez par les cinq tâches les plus fréquentes ou les plus coûteuses en cas d’erreur : accueil d’un client, devis, encaissement, achat, livraison. Une page par procédure, un responsable, une date de révision.'] },
        { h: '3. Des contrôles simples', p: ['Le contrôle interne n’est pas une affaire de méfiance, mais de protection : il protège l’entreprise et les employés honnêtes.'], list: ['Séparer les rôles : celui qui commande n’est pas celui qui paie.', 'Fixer un seuil au-delà duquel une dépense demande une double validation.', 'Compter le stock et la caisse à intervalles réguliers.'] },
        { h: '4. Un tableau de bord de cinq à huit indicateurs', p: ['Un bon tableau de bord tient sur une page. Chiffre d’affaires, marge brute, trésorerie, créances clients, impayés et un indicateur de qualité suffisent souvent. L’essentiel est de le revoir chaque mois, à date fixe, et de décider d’une action pour chaque écart important.'] },
        { h: '5. Des bases RH solides', p: ['Contrats écrits, fiches de poste, dossier du personnel et déclarations sociales à jour : ces bases évitent la plupart des conflits et des risques. Nous y consacrons un guide à part.'] },
        { h: 'Par où commencer ?', p: ['Faites l’inventaire de ce qui existe déjà, choisissez le système qui vous coûte le plus aujourd’hui et traitez-le d’abord. Un bilan de santé de l’entreprise permet de faire cet inventaire de façon structurée et de construire une feuille de route réaliste.'] },
      ],
      en: [
        { h: '1. Cash you can see every week', p: ['The first cause of trouble in an SME is rarely a lack of customers; it is a lack of visibility on available cash. A simple cash plan, updated every week, shows expected receipts and payments and lets you anticipate rather than react.'], list: ['Keep business accounts strictly separate from personal spending.', 'Keep a daily cash book and a receipt for every expense.', 'Reconcile bank statements every month.'] },
        { h: '2. Written procedures for the tasks that matter', p: ['You do not need to document everything. Start with the five tasks that happen most often or cost most when they go wrong: welcoming a client, quoting, collecting payment, purchasing, delivering. One page per procedure, one owner, one review date.'] },
        { h: '3. Simple controls', p: ['Internal control is not about mistrust; it is about protection, for the business and for honest employees.'], list: ['Separate roles: the person who orders is not the person who pays.', 'Set a threshold above which spending needs a second approval.', 'Count stock and cash at regular intervals.'] },
        { h: '4. A dashboard of five to eight indicators', p: ['A good dashboard fits on one page. Revenue, gross margin, cash, receivables, overdue payments and one quality indicator are often enough. What matters is reviewing it every month, on a fixed date, and agreeing an action for every significant gap.'] },
        { h: '5. Solid HR foundations', p: ['Written contracts, job descriptions, staff files and up-to-date social security declarations prevent most disputes and risks. We cover them in a separate guide.'] },
        { h: 'Where to start?', p: ['List what already exists, pick the system that costs you most today and fix it first. A Business Health Check makes that inventory structured and turns it into a realistic roadmap.'] },
      ],
    },
    takeaway: { fr: 'Cinq systèmes simples, revus régulièrement, valent mieux qu’un logiciel coûteux que personne n’utilise.', en: 'Five simple systems, reviewed regularly, beat expensive software that nobody uses.' },
    cta: { label: { fr: "Demander un bilan de santé de l'entreprise", en: 'Request a Business Health Check' }, to: 'start', d: 'business', s: 'health-check' },
  },
  {
    id: 'hr-foundations',
    division: 'hr',
    date: '2026-10-25',
    minutes: 5,
    slug: { fr: 'bases-rh-petite-entreprise', en: 'hr-foundations-small-business' },
    category: { fr: 'RH & Formation', en: 'HR & Training' },
    title: { fr: 'Les bases RH d’une petite entreprise : par où commencer', en: 'HR foundations for a small business: where to start' },
    excerpt: {
      fr: 'Contrats, fiches de poste, dossier du personnel, CNPS et évaluation : les six fondations RH qui évitent la plupart des conflits.',
      en: 'Contracts, job descriptions, staff files, CNPS and appraisals: the six HR foundations that prevent most disputes.',
    },
    intro: {
      fr: ['Dans beaucoup de petites entreprises, les ressources humaines se gèrent « au feeling » : un accord oral, un salaire, et l’on verra plus tard. Cela fonctionne jusqu’au premier désaccord, au premier départ ou au premier contrôle.', 'Mettre en place des bases RH ne demande ni un service dédié ni des procédures lourdes. Voici les six fondations à poser en priorité.'],
      en: ['In many small businesses, HR is run on instinct: a verbal agreement, a salary, and we will see later. That works until the first disagreement, the first resignation or the first inspection.', 'Laying HR foundations does not require a dedicated department or heavy procedures. Here are the six to put in place first.'],
    },
    body: {
      fr: [
        { h: '1. Des contrats de travail écrits', p: ['Le Code du travail camerounais encadre la relation de travail. Un contrat écrit, qui précise le poste, la rémunération, la durée et les conditions de travail, protège à la fois l’employeur et le salarié. C’est particulièrement important pour les contrats à durée déterminée.'] },
        { h: '2. Une fiche de poste pour chaque fonction', p: ['La fiche de poste dit ce qui est attendu : missions, responsabilités, rattachement, compétences requises. Elle sert au recrutement, à l’intégration, à l’évaluation et, en cas de désaccord, à clarifier les responsabilités.'] },
        { h: '3. Un dossier par employé', p: ['Contrat et avenants, pièces d’identité, diplômes, attestations, fiches de paie, congés et absences : un dossier complet et confidentiel pour chaque personne, rangé au même endroit.'] },
        { h: '4. L’affiliation et les déclarations à la CNPS', p: ['L’entreprise doit être affiliée à la Caisse nationale de prévoyance sociale et y déclarer ses salariés. Tenir ces déclarations à jour évite des régularisations coûteuses et protège vos équipes.'] },
        { h: '5. Des règles connues de tous', p: ['Un règlement intérieur ou un manuel de l’employé présente les horaires, les congés, la conduite attendue et la discipline. Des règles écrites et expliquées réduisent les malentendus.'] },
        { h: '6. Une évaluation annuelle simple', p: ['Un entretien par an, sur la base de la fiche de poste et de quelques objectifs, suffit pour reconnaître le travail bien fait, corriger ce qui doit l’être et construire un plan de formation utile.'] },
      ],
      en: [
        { h: '1. Written employment contracts', p: ['The Cameroon Labour Code governs the employment relationship. A written contract stating the role, pay, duration and working conditions protects both employer and employee. It matters especially for fixed-term contracts.'] },
        { h: '2. A job description for every role', p: ['A job description says what is expected: duties, responsibilities, reporting line, required skills. It supports recruitment, onboarding, appraisal and, in a disagreement, clarity on who is responsible for what.'] },
        { h: '3. A file for every employee', p: ['Contract and amendments, ID, diplomas, certificates, payslips, leave and absences: one complete, confidential file per person, kept in one place.'] },
        { h: '4. CNPS registration and declarations', p: ['The business must be registered with the National Social Insurance Fund (CNPS) and declare its employees there. Keeping declarations up to date avoids costly regularisations and protects your team.'] },
        { h: '5. Rules everyone knows', p: ['Internal rules or an employee handbook set out working hours, leave, expected conduct and discipline. Written, explained rules reduce misunderstandings.'] },
        { h: '6. A simple annual appraisal', p: ['One conversation a year, based on the job description and a few objectives, is enough to recognise good work, correct what needs correcting and build a useful training plan.'] },
      ],
    },
    takeaway: { fr: 'Des bases RH écrites coûtent peu à mettre en place et beaucoup moins qu’un conflit mal préparé.', en: 'Written HR foundations cost little to set up, and far less than a badly prepared dispute.' },
    cta: { label: { fr: 'Faire le point sur vos bases RH', en: 'Review your HR foundations' }, to: 'start', d: 'hr', s: 'hr-audit' },
    disclaimer: { fr: 'Information générale, qui ne remplace pas un avis juridique adapté à votre situation.', en: 'General information, not a substitute for legal advice on your situation.' },
  },
  {
    id: 'study-visa',
    division: 'travel',
    date: '2026-10-25',
    minutes: 4,
    slug: { fr: 'dossier-visa-etudes-erreurs', en: 'study-visa-file-mistakes' },
    category: { fr: 'Travel & Mobilité', en: 'Travel & Mobility' },
    title: { fr: 'Dossier de visa d’études : six erreurs qui coûtent cher', en: 'Study visa files: six mistakes that cost dearly' },
    excerpt: {
      fr: 'Calendrier, preuves de ressources, lettre de motivation, traductions, incohérences et faux intermédiaires : comment les éviter.',
      en: 'Timing, proof of funds, motivation letter, translations, inconsistencies and fake agents: how to avoid them.',
    },
    intro: {
      fr: ['Un refus de visa d’études ne vient pas toujours d’un mauvais profil. Il vient souvent d’un dossier incomplet, incohérent ou préparé dans l’urgence. Voici les erreurs que nous voyons le plus souvent, et comment les éviter.'],
      en: ['A refused study visa does not always come from a weak profile. It often comes from a file that is incomplete, inconsistent or prepared in a rush. Here are the mistakes we see most often, and how to avoid them.'],
    },
    body: {
      fr: [
        { h: '1. Commencer trop tard', p: ['Admission, traductions, attestations bancaires et rendez-vous consulaires prennent du temps, et les créneaux se remplissent vite en période de rentrée. Commencez dès que l’admission est en vue, pas après.'] },
        { h: '2. Des preuves de ressources incohérentes', p: ['Un dépôt important et inexpliqué juste avant la demande attire l’attention. Les ressources doivent être stables, documentées et cohérentes avec le garant déclaré, dont les pièces (revenus, identité, lettre de prise en charge) doivent accompagner le dossier.'] },
        { h: '3. Une lettre de motivation générique', p: ['La lettre doit expliquer pourquoi ce programme, pourquoi ce pays et ce que vous ferez ensuite. Une lettre copiée ou trop vague affaiblit un bon dossier.'] },
        { h: '4. Des documents non traduits ou non certifiés', p: ['Les pièces qui ne sont pas dans une langue acceptée par le consulat doivent souvent être accompagnées d’une traduction assermentée. Vérifiez aussi si des copies certifiées conformes sont demandées.'] },
        { h: '5. Des incohérences entre le formulaire et les pièces', p: ['Orthographe du nom, dates, parcours scolaire, adresse : la moindre différence entre le formulaire et les documents crée un doute. Relisez tout, ligne par ligne, avant de déposer.'] },
        { h: '6. Faire confiance à qui promet un visa garanti', p: ['Personne ne peut garantir un visa : la décision appartient au consulat. Un intermédiaire qui promet un résultat, demande votre passeport ou propose de « compléter » votre dossier avec des documents arrangés vous met en danger. Un faux document peut entraîner un refus et une interdiction durable.'] },
      ],
      en: [
        { h: '1. Starting too late', p: ['Admission, translations, bank letters and consular appointments take time, and slots fill quickly before the academic year. Start as soon as admission is in sight, not after.'] },
        { h: '2. Inconsistent proof of funds', p: ['A large, unexplained deposit just before applying draws attention. Funds should be stable, documented and consistent with the declared sponsor, whose documents (income, ID, support letter) must come with the file.'] },
        { h: '3. A generic motivation letter', p: ['The letter should explain why this programme, why this country and what you will do afterwards. A copied or vague letter weakens a good file.'] },
        { h: '4. Untranslated or uncertified documents', p: ['Documents that are not in a language the consulate accepts often need a sworn translation. Check too whether certified true copies are required.'] },
        { h: '5. Inconsistencies between the form and the documents', p: ['Spelling of your name, dates, education history, address: the smallest difference between the form and the documents raises doubt. Read everything line by line before filing.'] },
        { h: '6. Trusting anyone who promises a guaranteed visa', p: ['No one can guarantee a visa: the decision belongs to the consulate. An agent who promises a result, asks for your passport or offers to “complete” your file with arranged documents puts you at risk. A false document can lead to refusal and a lasting ban.'] },
      ],
    },
    takeaway: { fr: 'Un dossier complet, cohérent et préparé à temps est la meilleure chance que vous puissiez vous donner.', en: 'A complete, consistent file prepared in time is the best chance you can give yourself.' },
    cta: { label: { fr: 'Générer ma liste de documents', en: 'Generate my document checklist' }, to: 'checklist' },
  },
];
