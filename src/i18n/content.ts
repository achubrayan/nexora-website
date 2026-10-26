// Company facts shared by both languages. Source: RCCM extract and Corporate Profile NXR-COR-001 v2.0.
export const company = {
  legalName: 'NEXORA SERVICES COMPANY LTD',
  rccm: 'CM-DLA-02-2026-B12-00851',
  niu: 'M092618954315E',
  email: 'contact@nexoraservicescompany.com',
  // Company WhatsApp and phone line (Fabrice, 25 Oct 2026).
  phone: '+237 6 70 51 34 18',
  tel: 'tel:+237670513418',
  whatsapp: 'https://wa.me/237670513418',
  // Online booking page for first consultations (e.g. a free Google Calendar appointment schedule). Empty: booking goes through WhatsApp.
  booking: '',
  site: 'https://www.nexoraservicescompany.com',
};

export type Lang = 'fr' | 'en';
import type { PageKey } from './routes';

const fr = {
  meta: {
    title: 'Nexora Services Company Ltd · Cabinet de transformation des entreprises · Douala, Cameroun',
    description:
      "Cabinet de transformation des entreprises à Douala et Nkongsamba : stratégie, procédures, tableaux de bord, RH, formation, IA responsable et voyages d'affaires, avec une seule équipe responsable du diagnostic aux résultats.",
  },
  skip: 'Aller au contenu',
  nav: [
    { key: 'services', label: 'Expertises' },
    { key: 'approach', label: 'Approche' },
    { key: 'clients', label: 'Clients' },
    { key: 'insights', label: 'Ressources' },
    { key: 'about', label: 'À propos' },
    { key: 'careers', label: 'Carrières' },
    { key: 'contact', label: 'Contact' },
  ] as { key: PageKey; label: string }[],
  home: 'Accueil',
  allServices: 'Toutes nos expertises',
  illustrative: 'Exemple illustratif',
  menu: 'Menu',
  chat: 'Écrire sur WhatsApp',
  call: 'Appeler',
  waText: 'Bonjour Nexora, ',
  otherLang: { code: 'EN', label: 'English version', lang: 'en' as Lang },
  cta: 'Demander une consultation',
  hero: {
    badge: 'Cabinet de transformation des entreprises · Cameroun',
    title: ['Des systèmes', 'plus solides.', 'Une croissance', 'durable.'],
    accent: [1, 3],
    lede:
      "Nous aidons les entreprises, les ONG et les institutions à renforcer leurs systèmes, à développer leurs équipes et à adopter la technologie de façon responsable, avec une seule équipe responsable, du diagnostic jusqu'aux résultats.",
    secondary: 'Découvrir nos expertises',
    ticker: [
      'Stratégie et diagnostic',
      'Procédures et contrôle interne',
      'Tableaux de bord et KPI',
      'Politiques RH',
      'Service RH externalisé',
      'Formation des dirigeants',
      'Automatisation',
      'Préparation à l’IA',
      'Voyages d’affaires',
    ],
  },
  statement: {
    eyebrow: 'Qui nous sommes',
    text: 'Pas seulement des RH. Pas seulement de la technologie. Pas seulement du voyage. Une seule entreprise de transformation, intégrée.',
    body:
      'NEXORA SERVICES COMPANY LTD réunit le conseil en management, le développement des compétences, la transformation numérique et l’appui opérationnel pour améliorer la performance, renforcer les systèmes internes et rendre la croissance durable.',
    facts: [
      { n: '03', l: 'divisions intégrées' },
      { n: '05', l: 'étapes de méthode' },
      { n: '02', l: 'bureaux dans le Littoral' },
      { n: '02', l: 'langues de travail' },
    ],
  },
  divisions: {
    eyebrow: 'Nos expertises',
    title: 'Trois divisions, une seule relation',
    lede: 'Faites appel à une division ou combinez-les. Un responsable Nexora coordonne chaque mission, avec un seul périmètre et un seul niveau d’exigence.',
    more: 'En savoir plus',
    items: [
      {
        tag: '01',
        key: 'business' as PageKey,
        name: 'Business Solutions',
        line: 'Des systèmes plus solides pour une meilleure performance.',
        img: '/img/visuals/business.webp',
        points: ["Stratégie et diagnostic d'entreprise", 'Procédures (SOP), processus et contrôle interne', 'Tableaux de bord, KPI et reporting', "Digitalisation et préparation à l'IA"],
      },
      {
        tag: '02',
        key: 'hr' as PageKey,
        name: 'RH & Formation',
        line: 'Les personnes. Les compétences. Un impact durable.',
        img: '/img/visuals/people.webp',
        points: ['Politiques RH, manuels et gouvernance', 'Service RH externalisé pour les PME', 'Performance et analyse des effectifs', 'Formation des dirigeants et des équipes'],
      },
      {
        tag: '03',
        key: 'travel' as PageKey,
        name: 'Travel & Mobilité',
        line: 'Coordination. Clarté. Conformité.',
        img: '/img/visuals/travel.webp',
        points: ['Billets d’avion, hôtels et circuits via nos partenaires agréés', 'Service voyages pour les organisations', 'Assistance au dossier de visa : travail, études, visite', 'Canada, Émirats arabes unis et Europe'],
        note: "Assistance documentaire uniquement : la décision appartient à l'ambassade.",
      },
    ],
  },
  ai: {
    eyebrow: 'Technologie, données et IA responsable',
    title: 'La technologie doit simplifier le travail, pas le compliquer.',
    body:
      'Nous partons du problème métier, évaluons votre maturité, choisissons les bons outils, configurons les processus, formons les utilisateurs et mesurons l’adoption. La responsabilité humaine reste au centre.',
    principlesTitle: 'Huit principes appliqués à chaque livrable assisté par l’IA',
    principles: ['Supervision humaine', 'Finalité légitime', 'Exactitude vérifiée', 'Confidentialité', 'Équité', 'Transparence', 'Sécurité', 'Proportionnalité'],
  },
  method: {
    eyebrow: 'Notre approche',
    title: 'Du diagnostic à une amélioration mesurable',
    lede: 'Chaque mission suit les mêmes cinq étapes, avec un périmètre écrit et des critères d’acceptation convenus avant le démarrage.',
    steps: [
      { name: 'Diagnostiquer', text: 'Comprendre le vrai problème, la situation actuelle, les contraintes et les causes profondes.' },
      { name: 'Concevoir', text: 'Construire une solution pratique, adaptée à vos objectifs, à vos capacités et à votre budget.' },
      { name: 'Mettre en œuvre', text: 'Installer, configurer et accompagner les systèmes, outils, formations ou changements convenus.' },
      { name: 'Renforcer les capacités', text: 'Former les utilisateurs et ancrer les pratiques pour que l’amélioration continue après nous.' },
      { name: 'Mesurer et améliorer', text: 'Suivre les résultats convenus, tirer les leçons et optimiser là où la valeur se confirme.' },
    ],
  },
  offers: {
    eyebrow: 'Par où commencer',
    title: 'Quatre offres phares',
    start: 'Démarrer',
    items: [
      { name: "Bilan de santé de l'entreprise", text: 'Un diagnostic complet de votre organisation et une feuille de route des priorités.' },
      { name: 'Kit Systèmes PME', text: 'Les procédures, le reporting et les outils de gestion essentiels pour structurer votre PME.' },
      { name: 'Pack Efficacité numérique', text: 'La digitalisation de vos processus, l’automatisation des tâches et la formation de vos équipes.' },
      { name: 'Accompagnement de direction', text: 'Un appui régulier à la direction et une revue de la performance, au mois ou au trimestre.' },
    ],
  },
  clients: {
    eyebrow: 'Nos clients',
    title: 'Pour les organisations prêtes à progresser',
    needsLabel: 'Besoins fréquents',
    startLabel: 'Point de départ conseillé',
    items: [
      { name: 'PME', head: 'Structurer pour grandir', needs: ['Procédures et contrôle interne', 'Reporting de gestion fiable', 'Bases RH et service RH externalisé'], start: 'Kit Systèmes PME' },
      { name: 'Startups', head: 'Poser des fondations solides', needs: ['Organisation et systèmes de fonctionnement', 'Premières politiques RH', 'Préparation à la croissance et aux financements'], start: "Bilan de santé de l'entreprise" },
      { name: 'ONG', head: 'Gouvernance et redevabilité', needs: ['Politiques et gouvernance', 'Systèmes RH et opérations de programmes', 'Reporting et renforcement des capacités'], start: 'Diagnostic RH' },
      { name: 'Entreprises', head: 'Transformer de façon ciblée', needs: ['Amélioration des processus', 'Tableaux de bord et analyse de données', 'Compétences des équipes et voyages d’affaires'], start: 'Pack Efficacité numérique' },
      { name: 'Institutions', head: 'Conseil structuré et mise en œuvre', needs: ['Appui à la conception de systèmes', 'Programmes de formation', 'Appui à la mise en œuvre'], start: 'Analyse des besoins de formation' },
      { name: 'Professionnels', head: 'Carrière et mobilité', needs: ['CV et accompagnement de carrière', 'Formations pratiques', 'Assistance voyage et dossier de visa'], start: 'Consultation individuelle' },
    ],
  },
  why: {
    eyebrow: 'Pourquoi Nexora',
    title: 'Un partenaire pratique, pensé pour les réalités africaines',
    items: [
      { icon: 'layers', name: 'Transformation intégrée', text: 'Stratégie, personnes, processus, technologie et performance reliés, au lieu de services isolés.' },
      { icon: 'wrench', name: 'Mise en œuvre concrète', text: 'Nous construisons avec vous les politiques, outils et tableaux de bord nécessaires pour exécuter.' },
      { icon: 'pin', name: 'Ancrage local', text: 'Des pratiques internationales adaptées aux budgets, réglementations et infrastructures locales.' },
      { icon: 'chip', name: 'Technologie responsable', text: 'L’IA accélère le travail ; des professionnels restent responsables de chaque décision.' },
      { icon: 'shield', name: 'Éthique et conformité', text: 'Aucune promesse trompeuse, aucune falsification, aucune activité réglementée sans autorisation.' },
      { icon: 'handshake', name: 'Partenariat durable', text: 'Évaluation, mise en œuvre, transfert de compétences et suivi pour des résultats qui durent.' },
    ],
    promiseTitle: 'Ce que nous ne promettons jamais',
    promise:
      "Nexora ne garantit ni visa, ni emploi, ni permis, ni décision d'immigration, et ne conserve jamais les passeports de ses clients. Les services réglementés passent par des partenaires agréés ou après les formalités légales.",
  },
  leaders: {
    eyebrow: 'Direction',
    title: 'Une entreprise dirigée par ses fondateurs, bâtie sur la gouvernance',
    people: [
      { name: 'Achu Ngando Fabrice', role: 'Directeur général et gérant statutaire', text: 'Stratégie, opérations, qualité des prestations, gouvernance et impact client.', img: '/img/fabrice.webp' },
      { name: 'Mancho Tebo Salif', role: 'Directeur du développement commercial et des partenariats', text: 'Développement du marché, partenariats, acquisition de clients et croissance nationale.', img: '/img/salif.webp' },
    ],
  },
  band: { title: 'Transformons vos défis en systèmes qui performent.', text: 'Partez du problème. Construisez le bon système. Renforcez les équipes. Mesurez le résultat.' },
  contact: {
    eyebrow: 'Contact',
    title: 'Parlons de votre prochain défi',
    lede: 'Décrivez votre besoin. Nous vous répondons pour convenir d’une première consultation.',
    offices: [
      { label: 'Siège social · Douala', lines: ['Première rue derrière Hôtel Belavie & Spa', 'Bonabéri, Douala, Région du Littoral'] },
      { label: 'Bureau opérationnel · Nkongsamba', lines: ['La Piste, Nkongsamba', 'Département du Moungo, Région du Littoral'] },
    ],
    emailLabel: 'E-mail',
    form: {
      name: 'Nom complet', org: 'Organisation', email: 'E-mail', phone: 'Téléphone (facultatif)', interest: 'Sujet',
      interests: ['Business Solutions', 'RH & Formation', 'Voyages d’affaires', 'Mobilité internationale', 'Autre'],
      message: 'Votre besoin', consent: "J'accepte que Nexora utilise ces informations pour répondre à ma demande.", submit: 'Envoyer la demande',
    },
  },
  footer: {
    tagline: 'Des systèmes plus solides. Des entreprises plus performantes. Une croissance durable.',
    cols: { services: 'Expertises', company: 'Entreprise', offices: 'Bureaux' },
    companyLinks: [{ key: 'approach', label: 'Notre approche' }, { key: 'clients', label: 'Nos clients' }, { key: 'insights', label: 'Ressources' }, { key: 'about', label: 'À propos' }, { key: 'careers', label: 'Carrières' }, { key: 'contact', label: 'Contact' }] as { key: PageKey; label: string }[],
    legalLinks: [{ key: 'legal', label: 'Mentions légales' }, { key: 'privacy', label: 'Protection des données' }, { key: 'confidentiality', label: 'Confidentialité' }, { key: 'cookies', label: 'Cookies' }] as { key: PageKey; label: string }[],
    offices: ['Bonabéri, Douala (siège)', 'La Piste, Nkongsamba'],
    legal: 'RCCM CM-DLA-02-2026-B12-00851 · NIU M092618954315E',
    rights: 'Tous droits réservés.',
  },
};

const en: typeof fr = {
  meta: {
    title: 'Nexora Services Company Ltd · Business transformation consultancy · Douala, Cameroon',
    description:
      'Business transformation consultancy in Douala and Nkongsamba, Cameroon: strategy, SOPs, dashboards, HR, training, responsible AI and corporate travel, with one accountable team from diagnosis to results.',
  },
  skip: 'Skip to content',
  nav: [
    { key: 'services', label: 'Expertise' },
    { key: 'approach', label: 'Approach' },
    { key: 'clients', label: 'Clients' },
    { key: 'insights', label: 'Insights' },
    { key: 'about', label: 'About' },
    { key: 'careers', label: 'Careers' },
    { key: 'contact', label: 'Contact' },
  ] as { key: PageKey; label: string }[],
  home: 'Home',
  allServices: 'All our expertise',
  illustrative: 'Illustrative example',
  menu: 'Menu',
  chat: 'Chat on WhatsApp',
  call: 'Call us',
  waText: 'Hello Nexora, ',
  otherLang: { code: 'FR', label: 'Version française', lang: 'fr' as Lang },
  cta: 'Book a consultation',
  hero: {
    badge: 'Business transformation consultancy · Cameroon',
    title: ['Stronger', 'systems.', 'Sustainable', 'growth.'],
    accent: [1, 3],
    lede:
      'We help enterprises, NGOs and institutions strengthen their systems, develop their people and adopt technology responsibly, with one accountable team from diagnosis to results.',
    secondary: 'Explore our expertise',
    ticker: ['Strategy & diagnostics', 'SOPs & internal controls', 'Dashboards & KPIs', 'HR policies', 'Outsourced HR desk', 'Leadership training', 'Automation', 'AI readiness', 'Corporate travel'],
  },
  statement: {
    eyebrow: 'Who we are',
    text: 'Not simply HR. Not simply technology. Not simply travel. One integrated transformation company.',
    body:
      'NEXORA SERVICES COMPANY LTD brings together management advisory, people capability, digital transformation and practical corporate support to improve performance, strengthen internal systems and make growth sustainable.',
    facts: [
      { n: '03', l: 'integrated divisions' },
      { n: '05', l: 'step delivery method' },
      { n: '02', l: 'offices in the Littoral' },
      { n: '02', l: 'working languages' },
    ],
  },
  divisions: {
    eyebrow: 'Our expertise',
    title: 'Three divisions, one relationship',
    lede: 'Engage one division or combine them. A single Nexora lead coordinates every engagement, with one scope and one standard of quality.',
    more: 'Learn more',
    items: [
      { tag: '01', key: 'business' as PageKey, name: 'Business Solutions', line: 'Stronger systems for greater performance.', img: '/img/visuals/business.webp', points: ['Business strategy and diagnostics', 'SOPs, processes and internal controls', 'Dashboards, KPIs and reporting', 'Digital workflows and AI readiness'] },
      { tag: '02', key: 'hr' as PageKey, name: 'HR & Training', line: 'People. Capability. Lasting impact.', img: '/img/visuals/people.webp', points: ['HR policies, handbooks and governance', 'Outsourced HR desk for SMEs', 'Performance and workforce analytics', 'Leadership and team training'] },
      { tag: '03', key: 'travel' as PageKey, name: 'Travel & Mobility', line: 'Coordination. Clarity. Compliance.', img: '/img/visuals/travel.webp', points: ['Flights, hotels and tours through our licensed partners', 'Corporate travel desk', 'Visa document assistance: work, study, visit', 'Canada, the UAE and Europe'], note: 'Document assistance only: the decision belongs to the embassy.' },
    ],
  },
  ai: {
    eyebrow: 'Technology, data & responsible AI',
    title: 'Technology should simplify work, not complicate it.',
    body:
      'We start with the business problem, assess readiness, select the right tools, configure workflows, train users and measure adoption. Human accountability stays at the centre.',
    principlesTitle: 'Eight principles applied to every AI-assisted deliverable',
    principles: ['Human oversight', 'Legitimate purpose', 'Verified accuracy', 'Privacy', 'Fairness', 'Transparency', 'Security', 'Proportionality'],
  },
  method: {
    eyebrow: 'Our approach',
    title: 'From diagnosis to measurable improvement',
    lede: 'Every engagement follows the same five steps, with a written scope and acceptance criteria agreed before work starts.',
    steps: [
      { name: 'Diagnose', text: 'Understand the real problem, the current state, the constraints and the root causes.' },
      { name: 'Design', text: 'Build a practical solution that fits your goals, capacity and budget.' },
      { name: 'Implement', text: 'Install, configure and support the agreed systems, tools, training or process changes.' },
      { name: 'Build capability', text: 'Train users and embed practices so that improvement continues after we leave.' },
      { name: 'Measure & improve', text: 'Track the agreed outcomes, capture lessons and optimise where value is confirmed.' },
    ],
  },
  offers: {
    eyebrow: 'Where to start',
    title: 'Four flagship offers',
    start: 'Get started',
    items: [
      { name: 'Business Health Check', text: 'A full diagnostic of your organisation and a roadmap of priorities.' },
      { name: 'SME Systems Starter', text: 'The core SOPs, reporting and management tools to put your SME on a solid footing.' },
      { name: 'Digital Efficiency Pack', text: 'Workflow digitisation, task automation and training for your teams.' },
      { name: 'Management Advisory Retainer', text: 'Ongoing management support and performance reviews, monthly or quarterly.' },
    ],
  },
  clients: {
    eyebrow: 'Who we serve',
    title: 'For organisations ready to improve',
    needsLabel: 'Typical needs',
    startLabel: 'Recommended starting point',
    items: [
      { name: 'SMEs', head: 'Structure to grow', needs: ['SOPs and internal controls', 'Reliable management reporting', 'HR foundations and an outsourced HR desk'], start: 'SME Systems Starter' },
      { name: 'Startups', head: 'Build solid foundations', needs: ['Organisation and operating systems', 'First HR policies', 'Growth and funding readiness'], start: 'Business Health Check' },
      { name: 'NGOs', head: 'Governance and accountability', needs: ['Policies and governance', 'HR systems and programme operations', 'Reporting and capacity building'], start: 'HR diagnostic' },
      { name: 'Corporations', head: 'Targeted transformation', needs: ['Process improvement', 'Dashboards and analytics', 'Workforce capability and corporate travel'], start: 'Digital Efficiency Pack' },
      { name: 'Institutions', head: 'Structured advisory and delivery', needs: ['Systems design support', 'Training programmes', 'Implementation support'], start: 'Training-needs discussion' },
      { name: 'Professionals', head: 'Career and mobility', needs: ['CV and career support', 'Practical training', 'Travel and visa document assistance'], start: 'Individual consultation' },
    ],
  },
  why: {
    eyebrow: 'Why Nexora',
    title: 'A practical partner built for African business realities',
    items: [
      { icon: 'layers', name: 'Integrated transformation', text: 'Strategy, people, processes, technology and performance connected, not isolated services.' },
      { icon: 'wrench', name: 'Practical implementation', text: 'We build the policies, tools and dashboards you need to execute.' },
      { icon: 'pin', name: 'Local relevance', text: 'International practices adapted to local budgets, regulation and infrastructure.' },
      { icon: 'chip', name: 'Responsible technology', text: 'AI speeds up the work; accountable professionals own every decision.' },
      { icon: 'shield', name: 'Ethics & compliance', text: 'No misleading guarantees, no falsification, no unlicensed regulated activity.' },
      { icon: 'handshake', name: 'Long-term partnership', text: 'Assessment, implementation, capability transfer and follow-up for lasting results.' },
    ],
    promiseTitle: 'What we never promise',
    promise:
      'Nexora does not guarantee visas, jobs, permits or immigration outcomes, and never retains client passports. Regulated services go through licensed partners or only after the legal formalities are complete.',
  },
  leaders: {
    eyebrow: 'Leadership',
    title: 'Founder-led. Governance-driven. Built to scale.',
    people: [
      { name: 'Achu Ngando Fabrice', role: 'Managing Director & Statutory Manager', text: 'Corporate strategy, operations, service delivery, governance and client impact.', img: '/img/fabrice.webp' },
      { name: 'Mancho Tebo Salif', role: 'Director of Business Development & Partnerships', text: 'Market development, partnerships, client acquisition and national growth.', img: '/img/salif.webp' },
    ],
  },
  band: { title: 'Let’s turn business challenges into systems that perform.', text: 'Start with the problem. Build the right system. Strengthen the people. Measure the result.' },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about your next challenge",
    lede: 'Tell us what you need. We will get back to you to arrange a first consultation.',
    offices: [
      { label: 'Registered office · Douala', lines: ['First street behind Hôtel Belavie & Spa', 'Bonabéri, Douala, Littoral Region'] },
      { label: 'Operational office · Nkongsamba', lines: ['La Piste, Nkongsamba', 'Moungo Division, Littoral Region'] },
    ],
    emailLabel: 'Email',
    form: {
      name: 'Full name', org: 'Organisation', email: 'Email', phone: 'Phone (optional)', interest: 'Topic',
      interests: ['Business Solutions', 'HR & Training', 'Corporate travel', 'International mobility', 'Other'],
      message: 'What do you need?', consent: 'I agree that Nexora may use this information to answer my request.', submit: 'Send request',
    },
  },
  footer: {
    tagline: 'Stronger Systems. Smarter Business. Sustainable Growth.',
    cols: { services: 'Expertise', company: 'Company', offices: 'Offices' },
    companyLinks: [{ key: 'approach', label: 'Our approach' }, { key: 'clients', label: 'Who we serve' }, { key: 'insights', label: 'Insights' }, { key: 'about', label: 'About' }, { key: 'careers', label: 'Careers' }, { key: 'contact', label: 'Contact' }] as { key: PageKey; label: string }[],
    legalLinks: [{ key: 'legal', label: 'Legal notice' }, { key: 'privacy', label: 'Data protection' }, { key: 'confidentiality', label: 'Confidentiality' }, { key: 'cookies', label: 'Cookies' }] as { key: PageKey; label: string }[],
    offices: ['Bonabéri, Douala (registered office)', 'La Piste, Nkongsamba'],
    legal: 'RCCM CM-DLA-02-2026-B12-00851 · NIU M092618954315E',
    rights: 'All rights reserved.',
  },
};

export const t = { fr, en };
