// Frequently asked questions for each division page. No prices, timelines in figures or guarantees.
import type { Lang } from './content';

export interface Qa { q: string; a: string }
type Faqs = { business: Qa[]; hr: Qa[]; travel: Qa[] };

const fr: Faqs = {
  business: [
    { q: 'Combien coûte une mission ?', a: 'Chaque mission fait l’objet d’une proposition écrite après une première consultation : périmètre, livrables, calendrier et prix. Vous savez exactement ce que vous achetez avant tout engagement.' },
    { q: 'Travaillez-vous avec les petites entreprises ?', a: 'Oui. Le Kit Systèmes PME a été conçu pour elles : les procédures, le reporting et les outils de gestion essentiels, à une échelle adaptée à une petite équipe.' },
    { q: 'Combien de temps dure une mission ?', a: 'Cela dépend du périmètre. Un bilan de santé est une mission courte ; une mise en place de systèmes se fait par étapes. Le calendrier est fixé dans la proposition écrite et suivi à chaque étape.' },
    { q: 'Nos informations restent-elles confidentielles ?', a: 'Oui. Nous signons un accord de confidentialité si vous le souhaitez, limitons l’accès aux documents aux personnes qui en ont besoin et vous restituons vos données à la fin de la mission.' },
    { q: 'Utilisez-vous l’intelligence artificielle ?', a: 'Lorsqu’elle fait gagner du temps sans risque, oui. Tout travail réalisé avec l’aide de l’IA est revu par une personne responsable, et aucune donnée confidentielle n’est confiée à un outil non approuvé.' },
  ],
  hr: [
    { q: 'Qu’est-ce que le service RH externalisé ?', a: 'Un appui RH régulier pour les PME qui n’ont pas de responsable RH : dossiers du personnel, contrats, politiques, suivi des absences et de la performance, et conseil à la direction, au mois ou au trimestre.' },
    { q: 'Pouvez-vous recruter pour nous ?', a: 'Nous vous aidons à bien recruter : définition des postes, grilles de présélection, guides d’entretien et appui à la décision. Le placement de personnel, activité réglementée, est exclu sauf autorisation en bonne et due forme.' },
    { q: 'Vos documents RH respectent-ils le droit du travail camerounais ?', a: 'Ils sont rédigés en tenant compte du Code du travail camerounais et des pratiques locales. Les documents à risque sont relus par un spécialiste qualifié avant usage.' },
    { q: 'Où se déroulent les formations ?', a: 'Dans vos locaux, dans nos bureaux de Douala ou Nkongsamba, ou en ligne. Les formations pratiques se font en petits groupes, y compris en soirée ou le samedi.' },
    { q: 'Travaillez-vous en français et en anglais ?', a: 'Oui. Nos documents, nos formations et nos échanges se font dans les deux langues officielles du Cameroun.' },
  ],
  travel: [
    { q: 'Garantissez-vous l’obtention du visa ?', a: 'Non. Nous vous aidons à préparer un dossier complet et exact. La décision appartient toujours à l’ambassade ou au consulat, et personne ne peut honnêtement la garantir.' },
    { q: 'Gardez-vous mon passeport ?', a: 'Jamais. Votre passeport reste avec vous. Nous travaillons sur des copies et vous accompagnons pour le dépôt.' },
    { q: 'Pour quels pays pouvez-vous m’aider ?', a: 'Le Canada (travail, études, visite), les Émirats arabes unis (travail, visite) et quatorze pays d’Europe (travail, études et visa Schengen de visite). La liste complète figure sur la page Travel & Mobilité.' },
    { q: 'Puis-je réserver mon vol et mon hôtel avec vous ?', a: 'Oui. Billets d’avion, hôtels et circuits sont réservés via nos partenaires agréés. Avant une décision de visa, nous vous conseillons sur le type de réservation le plus adapté.' },
    { q: 'Que se passe-t-il si ma demande est refusée ?', a: 'Nous relisons avec vous la lettre de refus, expliquons les motifs indiqués et vous disons honnêtement si une nouvelle demande a du sens, et à quelles conditions.' },
  ],
};

const en: Faqs = {
  business: [
    { q: 'How much does an engagement cost?', a: 'Every engagement gets a written proposal after a first consultation: scope, deliverables, timeline and fee. You know exactly what you are buying before any commitment.' },
    { q: 'Do you work with small businesses?', a: 'Yes. The SME Systems Starter was designed for them: the essential SOPs, reporting and management tools, at a scale that fits a small team.' },
    { q: 'How long does an engagement take?', a: 'It depends on the scope. A health check is a short assignment; putting systems in place is done in stages. The timeline is set in the written proposal and tracked at every step.' },
    { q: 'Is our information kept confidential?', a: 'Yes. We sign a confidentiality agreement if you wish, limit document access to the people who need it and return your data at the end of the engagement.' },
    { q: 'Do you use artificial intelligence?', a: 'Where it saves time safely, yes. All AI-assisted work is reviewed by a responsible person, and no confidential data goes into an unapproved tool.' },
  ],
  hr: [
    { q: 'What is the outsourced HR desk?', a: 'Regular HR support for SMEs without an HR manager: staff files, contracts, policies, absence and performance tracking, and advice to management, monthly or quarterly.' },
    { q: 'Can you recruit for us?', a: 'We help you recruit well: job design, screening frameworks, interview guides and decision support. Staff placement, a regulated activity, is excluded unless duly authorised.' },
    { q: 'Do your HR documents follow Cameroonian labour law?', a: 'They are drafted with the Cameroon Labour Code and local practice in mind. High-risk documents are reviewed by a qualified specialist before use.' },
    { q: 'Where does training take place?', a: 'At your premises, in our Douala or Nkongsamba offices, or online. Practical courses run in small groups, including evenings and Saturdays.' },
    { q: 'Do you work in French and English?', a: 'Yes. Our documents, training and conversations are available in both of Cameroon’s official languages.' },
  ],
  travel: [
    { q: 'Do you guarantee the visa?', a: 'No. We help you prepare a complete and accurate file. The decision always belongs to the embassy or consulate, and no one can honestly guarantee it.' },
    { q: 'Do you keep my passport?', a: 'Never. Your passport stays with you. We work from copies and support you when you file.' },
    { q: 'Which countries can you help with?', a: 'Canada (work, study, visit), the United Arab Emirates (work, visit) and fourteen European countries (work, study and Schengen visit visas). The full list is on the Travel & Mobility page.' },
    { q: 'Can I book my flight and hotel with you?', a: 'Yes. Flights, hotels and tours are booked through our licensed partners. Before a visa decision, we advise you on the most suitable type of reservation.' },
    { q: 'What happens if my application is refused?', a: 'We go through the refusal letter with you, explain the stated reasons and tell you honestly whether a new application makes sense, and on what conditions.' },
  ],
};

export const faq: Record<Lang, Faqs> = { fr, en };
