import { Project, Experience, Education, ServiceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Mohamed Lakhloufi',
  title: {
    fr: 'Développeur Web Full Stack & Solutions SaaS',
    en: 'Full Stack Web Developer & SaaS Solutions Builder',
  },
  shortBio: {
    fr: 'Spécialisé dans la création de plateformes SaaS, dashboards professionnels, automatisations IA et applications web sur-mesure à forte valeur ajoutée.',
    en: 'Specialized in building high-performance SaaS platforms, professional dashboards, AI automations, and custom web applications.',
  },
  fullBio: {
    fr: "Développeur Web Full Stack passionné avec une solide expérience en développement frontend, backend, bases de données, déploiement cloud et maintenance. J'intègre les technologies d'intelligence artificielle pour accélérer le développement, automatiser les processus d'affaires et concevoir des applications web robustes, scalables et intuitives.",
    en: "Passionate Full Stack Web Developer with robust experience across frontend, backend, databases, cloud deployment, and system maintenance. I leverage AI technologies to accelerate engineering, automate business workflows, and craft scalable, reliable, and user-friendly web platforms.",
  },
  email: 'mohamedkhloufi125@gmail.com',
  phone: '+212 6 50 36 42 76',
  whatsappRaw: '212650364276',
  github: 'https://github.com/mohamedkhloufi',
  linkedin: 'https://www.linkedin.com/in/mohamed-lakhloufi',
  availability: {
    fr: 'Disponible pour missions Freelance & CDI',
    en: 'Available for Freelance Projects & Full-time Roles',
  },
  stats: [
    {
      value: '+15',
      label: { fr: 'Projets Déployés', en: 'Delivered Projects' },
    },
    {
      value: '100%',
      label: { fr: 'Clients Satisfaits', en: 'Client Satisfaction' },
    },
    {
      value: 'SaaS & IA',
      label: { fr: 'Spécialité Principale', en: 'Core Specialization' },
    },
    {
      value: '< 24h',
      label: { fr: 'Délai de Réponse', en: 'Response Time' },
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'freelance-flow-saas',
    category: 'saas',
    title: {
      fr: 'FreelanceFlow — SaaS Gestion & Facturation Automatique',
      en: 'FreelanceFlow — Tasks & Auto-Invoicing SaaS',
    },
    subtitle: {
      fr: 'Plateforme complète de gestion de projets et facturation automatisée pour indépendants',
      en: 'All-in-one project management & automated billing platform for independent workers',
    },
    description: {
      fr: 'Solution SaaS moderne permettant aux freelances de gérer leurs tâches (Kanban/Sprint), générer automatiquement des factures PDF conformes avec calcul de TVA multi-devises, programmer des relances d’impayés et suivre leur trésorerie en temps réel.',
      en: 'Modern SaaS solution enabling freelancers to track tasks (Kanban/Sprint), automatically generate compliant PDF invoices with multi-currency VAT calculations, schedule auto-reminders, and monitor cashflow in real-time.',
    },
    fullDetails: {
      fr: [
        'Gestion visuelle des tâches et jalons par client avec tableau Kanban interactif.',
        'Module de facturation automatique récurrente et génération instantanée de devis/factures PDF.',
        'Suivi du temps passé (Time Tracking) transformable en 1 clic en ligne de facturation.',
        'Intégration passerelle de paiement (Stripe) pour paiement direct en ligne par carte bancaire.',
        'Dashboard financier : chiffre d’affaires mensuel, factures en attente et prévisions fiscales.',
      ],
      en: [
        'Visual project & task management per client using an interactive Kanban board.',
        'Automated recurring billing engine with instant compliant PDF quote and invoice generation.',
        'Integrated time tracking converting billable hours into invoice line items in 1 click.',
        'Stripe payment gateway integration for frictionless online credit card settlement.',
        'Financial analytics: monthly revenue trends, overdue alerts, and tax forecasting.',
      ],
    },
    keyFeatures: {
      fr: [
        'Facturation automatique & relances programmées',
        'Kanban interactif & suivi du temps facturable',
        'Export comptable & calcul TVA automatique',
        'Paiements Stripe intégrés & notifications client',
      ],
      en: [
        'Automated invoicing & scheduled payment reminders',
        'Interactive Kanban & billable time tracking',
        'Accounting export & automatic tax computation',
        'Integrated Stripe payments & client notifications',
      ],
    },
    technologies: ['React.js', 'Node.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'Stripe API', 'PDFKit'],
    metrics: {
      fr: '+70% de temps gagné sur la gestion administrative des freelances',
      en: '+70% administrative time saved for freelance professionals',
    },
    badge: {
      fr: 'SaaS Phare',
      en: 'Featured SaaS',
    },
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accentColor: '#10b981',
  },
  {
    id: 'standard-ia-francais',
    category: 'saas',
    title: {
      fr: 'Standard Téléphonique IA Français',
      en: 'French AI Voice Receptionist SaaS',
    },
    subtitle: {
      fr: 'Agent vocal conversationnel intelligent pour artisans, restaurants et commerces',
      en: 'Intelligent conversational voice agent for local businesses, clinics and restaurants',
    },
    description: {
      fr: 'Standard téléphonique autonome propulsé par des modèles d’IA vocale en français. Il prend en charge les appels entrants 24/7, répond aux questions courantes, prend les réservations et synchronise l’agenda sans intervention humaine.',
      en: 'Autonomous phone receptionist powered by French conversational AI models. Handles incoming calls 24/7, answers FAQs, records reservations, and syncs calendar appointments with zero human latency.',
    },
    fullDetails: {
      fr: [
        'Reconnaissance vocale haute fidélité avec accentuation et compréhension naturelle du français.',
        'Prise de rendez-vous en direct connectée à Google Calendar et logiciels de réservation.',
        'Transcription instantanée et notification SMS/WhatsApp au commerçant en cas d’urgence.',
        'Dashboard d’écoute, d’analyse des motifs d’appels et journal d’activité complet.',
      ],
      en: [
        'High-fidelity speech recognition with natural French phrasing and acoustic nuance understanding.',
        'Live appointment booking synchronized with Google Calendar and local reservation systems.',
        'Instant audio transcription and SMS/WhatsApp emergency alerts to business owners.',
        'Central dashboard for call playback, reason analytics, and detailed lead logs.',
      ],
    },
    keyFeatures: {
      fr: [
        'Disponibilité 24h/24 et 7j/7 sans appel manqué',
        'Prise de rendez-vous et commandes vocales',
        'Transcription et résumés automatiques par IA',
        'Routage intelligent des demandes prioritaires',
      ],
      en: [
        '24/7 availability with zero missed calls',
        'Automated voice appointments & order logging',
        'AI transcription & smart summary delivery',
        'Priority routing for urgent escalations',
      ],
    },
    technologies: ['Python', 'Node.js', 'FastAPI', 'WebSockets', 'OpenAI/Whisper', 'Twilio Voice', 'React.js'],
    metrics: {
      fr: '0 appel manqué pour les artisans partenaires',
      en: '0 missed calls for local partner businesses',
    },
    badge: {
      fr: 'IA Vocale',
      en: 'Voice AI',
    },
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    accentColor: '#06b6d4',
  },
  {
    id: 'centre-appel-ia',
    category: 'saas',
    title: {
      fr: 'SaaS Centre d’Appel IA & Supervision',
      en: 'AI Call Center Supervision Platform',
    },
    subtitle: {
      fr: 'Plateforme SaaS de gestion et supervision de centre d’appels assistée par IA',
      en: 'Enterprise SaaS for AI-assisted call center supervision and agent workflow',
    },
    description: {
      fr: 'Plateforme cloud complète d’assistance en temps réel pour téléconseillers : analyse de sentiment en direct, suggestions de réponses intelligentes par IA, transcription instantanée et métriques de productivité pour superviseurs.',
      en: 'Cloud call center management system providing live AI copilot assistance for tele-operators: real-time sentiment scoring, intelligent response suggestions, automated QA scoring, and supervisor dashboards.',
    },
    fullDetails: {
      fr: [
        'Supervision en temps réel des agents avec tableau de bord télémétrique haute performance.',
        'Co-pilote IA suggérant au téléconseiller la meilleure réponse ou clause contractuelle.',
        'Détection automatique d’insatisfaction client pour intervention proactive du superviseur.',
        'Génération automatique de comptes-rendus d’appels et synchronisation CRM.',
      ],
      en: [
        'Real-time agent monitoring with high-throughput telemetry performance dashboard.',
        'Live AI assistant prompting agents with relevant knowledge base entries and compliant answers.',
        'Automated customer friction/sentiment detection triggering supervisor escalation.',
        'Automated post-call summary generation and two-way CRM sync.',
      ],
    },
    keyFeatures: {
      fr: [
        'Analyse de sentiment en temps réel',
        'Génération automatique de comptes-rendus',
        'Intégration CRM & historique unifié',
        'Tableau de bord de performance d’équipe',
      ],
      en: [
        'Real-time sentiment & tone analysis',
        'Instant AI post-call auto-summaries',
        'CRM two-way integration & unified timeline',
        'Supervisor live telemetry dashboard',
      ],
    },
    technologies: ['React.js', 'Node.js', 'MongoDB', 'WebSockets', 'Python AI Service', 'Tailwind CSS'],
    metrics: {
      fr: '-45% de temps de traitement par dossier client',
      en: '-45% average handle time per customer inquiry',
    },
    badge: {
      fr: 'Enterprise AI',
      en: 'Enterprise AI',
    },
    gradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    accentColor: '#6366f1',
  },
  {
    id: 'vitrines-professions-liberales',
    category: 'vitrine',
    title: {
      fr: 'Vitrines & Portails pour Professions Libérales',
      en: 'Showcase Portals for Regulated Professionals',
    },
    subtitle: {
      fr: 'Cabinets d’avocats, médecins, experts-comptables et architectes',
      en: 'Law firms, private medical clinics, certified accountants & architects',
    },
    description: {
      fr: 'Conception de sites vitrines sur-mesure combinant élégance, crédibilité professionnelle et fonctionnalités pratiques : prise de rendez-vous en ligne, formulaire sécurisé de dépôt de documents, optimisation SEO local et conformité RGPD.',
      en: 'Tailored showcase websites merging refined prestige, legal compliance, and conversion-focused utility: integrated online booking, secure client document dropboxes, local SEO optimization, and mobile-first responsiveness.',
    },
    fullDetails: {
      fr: [
        'Design soigné et premium adapté à la déontologie de chaque corps de métier (droit, santé, finance, architecture).',
        'Module de réservation de consultations avec rappels automatiques par e-mail et SMS.',
        'Espace sécurisé de transmission de pièces justificatives et formulaires de contact qualifiés.',
        'Score Google PageSpeed supérieur à 95/100 et référencement naturel ciblé sur la zone géographique.',
      ],
      en: [
        'Refined aesthetic tuned to professional codes of conduct (legal, medical, financial, architectural).',
        'Appointment scheduling module with automated email/SMS reminder sequences.',
        'Encrypted document upload portal and pre-qualification contact questionnaires.',
        'Google PageSpeed score exceeding 95/100 and localized search engine optimization.',
      ],
    },
    keyFeatures: {
      fr: [
        'Prise de rendez-vous en ligne synchronisée',
        'Optimisation SEO local Google & vitesse 95+',
        'Formulaires de contact qualifiés & sécurisés',
        'Design responsive élégant adapté au secteur',
      ],
      en: [
        'Synchronized online appointment booking',
        'High-ranking local SEO & 95+ PageSpeed',
        'Pre-qualified secure contact inquiries',
        'Responsive luxury design tailored to industry',
      ],
    },
    technologies: ['React.js', 'Tailwind CSS', 'PHP/Laravel', 'Cal.com API', 'Figma', 'SEO Tools'],
    metrics: {
      fr: '+120% de demandes de consultations qualifiées',
      en: '+120% qualified consultation inquiries received',
    },
    badge: {
      fr: 'Haute Conversion',
      en: 'High Conversion',
    },
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accentColor: '#f59e0b',
  },
  {
    id: 'plateforme-ecommerce-moderne',
    category: 'ecommerce',
    title: {
      fr: 'Plateforme E-Commerce Moderne & Rapide',
      en: 'Modern High-Performance E-Commerce',
    },
    subtitle: {
      fr: 'Boutique en ligne complète avec panier dynamique et paiement sécurisé',
      en: 'Complete digital storefront with reactive cart & multi-currency checkout',
    },
    description: {
      fr: 'Architecture e-commerce haute performance : catalogue produits avec filtres à facettes instantanés, panier d’achat réactif sans rechargement, paiement sécurisé Stripe, gestion des stocks et espace client pour suivi des livraisons.',
      en: 'High-speed e-commerce solution: faceted live product catalog, instant responsive shopping cart, multi-step checkout with Stripe, dynamic inventory tracking, and client order portal with tracking status.',
    },
    fullDetails: {
      fr: [
        'Catalogue interactif avec recherche instantanée, variantes de produits (tailles, couleurs) et avis clients.',
        'Processus de paiement optimisé en 2 étapes pour réduire le taux d’abandon de panier.',
        'Panneau d’administration marchand : gestion des commandes, factures automatiques et alertes de stock.',
        'Architecture optimisée pour un chargement instantané même avec des milliers de références.',
      ],
      en: [
        'Interactive catalog featuring instant search, product variations (sizes, hues), and verified customer reviews.',
        'Streamlined two-step checkout funnel designed to eliminate cart abandonment.',
        'Merchant administration portal: order dispatching, automatic invoices, and low-stock triggers.',
        'Optimized headless architecture ensuring millisecond response times under peak traffic.',
      ],
    },
    keyFeatures: {
      fr: [
        'Panier dynamique & tunnel d’achat express',
        'Paiements sécurisés Stripe & PayPal',
        'Gestion des stocks et commandes en temps réel',
        'Expérience mobile ultra-fluide & PWA ready',
      ],
      en: [
        'Instant dynamic cart & express checkout funnel',
        'Stripe & PayPal secure multi-currency payments',
        'Real-time inventory and fulfillment system',
        'Ultra-fluid mobile experience & PWA-ready',
      ],
    },
    technologies: ['React.js', 'Node.js', 'Express', 'MySQL', 'Stripe Payments', 'Tailwind CSS'],
    metrics: {
      fr: '< 1.2s de temps de chargement moyen',
      en: '< 1.2s average page load speed',
    },
    badge: {
      fr: 'E-Commerce',
      en: 'E-Commerce',
    },
    gradient: 'from-emerald-500/20 via-sky-500/10 to-transparent',
    accentColor: '#10b981',
  },
  {
    id: 'atlas-vibe-dashboard',
    category: 'saas',
    title: {
      fr: 'AtlasVibe — Dashboard Métriques & Analytics SaaS',
      en: 'AtlasVibe — SaaS Analytics & Business Dashboard',
    },
    subtitle: {
      fr: 'Tableau de bord télémétrique pour pilotage des indicateurs clés d’entreprise',
      en: 'Executive telemetry dashboard for monitoring critical business KPIs',
    },
    description: {
      fr: 'Développement d’un dashboard professionnel complet pour le suivi des métriques clés (MRR, churn, rétention, tickets de support). Visualisations interactives de données, filtres temporels dynamiques et système d’alertes automatisées.',
      en: 'Executive telemetry dashboard built for tracking essential enterprise metrics (MRR, churn, cohorts, support SLA). Features interactive data visualizations, dynamic time ranges, and automated threshold alerts.',
    },
    fullDetails: {
      fr: [
        'Visualisation avancée de séries temporelles avec graphiques interactifs et export CSV/PDF.',
        'Contrôle d’accès basé sur les rôles (RBAC) pour les administrateurs, managers et analystes.',
        'Mise à jour en temps réel des données via WebSockets sans rafraîchissement.',
        'Architecture modulaire facilitant l’ajout rapide de nouveaux widgets et indicateurs.',
      ],
      en: [
        'Advanced time-series visualization with interactive chart drill-downs and CSV/PDF reports.',
        'Role-Based Access Control (RBAC) supporting granular admin, manager, and auditor scopes.',
        'Live WebSockets telemetry streaming for zero-refresh operational awareness.',
        'Modular widget architecture facilitating rapid deployment of custom metric cards.',
      ],
    },
    keyFeatures: {
      fr: [
        'Graphiques interactifs et analyses prédictives',
        'Gestion des droits & rôles d’équipe (RBAC)',
        'Mises à jour temps réel via WebSockets',
        'Exportation de rapports d’activité personnalisés',
      ],
      en: [
        'Interactive charts & predictive trend forecasting',
        'Granular team permission & role security (RBAC)',
        'Real-time data streaming via WebSockets',
        'Custom scheduled business report exports',
      ],
    },
    technologies: ['React.js', 'TypeScript', 'Node.js', 'Laravel API', 'MySQL', 'Chart.js', 'Tailwind CSS'],
    metrics: {
      fr: 'Visualisation instantanée de plus de 50 000 événements/jour',
      en: 'Real-time monitoring of 50,000+ business events/day',
    },
    badge: {
      fr: 'Dashboard',
      en: 'Dashboard',
    },
    gradient: 'from-violet-500/20 via-fuchsia-500/10 to-transparent',
    accentColor: '#8b5cf6',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'atlas-vibe-labs',
    period: {
      fr: 'Mars 2026 - Septembre 2026',
      en: 'March 2026 - September 2026',
    },
    role: {
      fr: 'Développeur Full Stack',
      en: 'Full Stack Developer',
    },
    company: 'AtlasVibeLabs',
    type: {
      fr: 'Poste en Entreprise',
      en: 'Full-time / In-house',
    },
    description: {
      fr: [
        'Développement de sites web, applications SaaS et dashboards professionnels haute performance.',
        'Création et intégration de solutions intelligentes basées sur l’intelligence artificielle.',
        'Développement full stack (frontend réactif & APIs backend sécurisées) avec intégration de services tiers.',
        'Déploiement cloud, monitoring de production, maintenance proactive et amélioration continue des projets.',
      ],
      en: [
        'Engineered high-performance websites, enterprise SaaS applications, and analytical dashboards.',
        'Architected and integrated intelligent workflows powered by artificial intelligence APIs.',
        'Led full stack development spanning reactive frontends and secure RESTful backend services.',
        'Handled cloud deployment, production monitoring, proactive maintenance, and continuous optimization.',
      ],
    },
    technologies: ['React.js', 'Node.js', 'Laravel', 'Python', 'MySQL', 'MongoDB', 'AI APIs', 'Git'],
  },
  {
    id: 'low-coste-offices',
    period: {
      fr: 'Février 2025 - Décembre 2025',
      en: 'February 2025 - December 2025',
    },
    role: {
      fr: 'Développeur Web Freelance',
      en: 'Freelance Web Developer',
    },
    company: 'LowCosteOffices',
    type: {
      fr: 'Missions Freelance',
      en: 'Freelance Contractor',
    },
    description: {
      fr: [
        'Création, refonte et amélioration continue de sites web professionnels pour clients variés.',
        'Intégration d’interfaces web responsives au pixel près avec une attention particulière à l’UX et la vitesse.',
        'Développement de fonctionnalités sur-mesure selon les cahiers des charges des clients.',
        'Assistance technique, maintenance corrective et déploiement de correctifs en direct.',
      ],
      en: [
        'Designed, revamped, and maintained professional commercial websites for diverse client rosters.',
        'Implemented pixel-perfect responsive user interfaces with acute focus on performance and usability.',
        'Built custom client-driven feature sets matching bespoke technical specifications.',
        'Provided technical support, rapid defect resolution, and seamless production deployments.',
      ],
    },
    technologies: ['HTML5/CSS3', 'JavaScript', 'React.js', 'PHP', 'Tailwind CSS', 'WordPress/Custom CMS'],
  },
  {
    id: 'tamsouri-livraison',
    period: {
      fr: 'Novembre 2023 - Février 2024',
      en: 'November 2023 - February 2024',
    },
    role: {
      fr: 'Stage Développeur Web',
      en: 'Web Developer Intern',
    },
    company: 'Tamsouri Livraison',
    type: {
      fr: 'Stage Professionnel',
      en: 'Professional Internship',
    },
    description: {
      fr: [
        'Participation active au développement d’applications web de gestion logistique et de livraison.',
        'Intégration de modules fonctionnels, réalisation de tests unitaires et recettes d’application.',
        'Optimisation de l’expérience utilisateur (UI/UX) pour les livreurs et le personnel administratif.',
      ],
      en: [
        'Contributed to the core development of web applications for logistics and package tracking.',
        'Engineered functional modules, performed unit testing, and conducted QA integration cycles.',
        'Enhanced UI/UX usability flows for field couriers and dispatch administration teams.',
      ],
    },
    technologies: ['JavaScript', 'PHP', 'MySQL', 'Bootstrap/Tailwind', 'REST APIs'],
  },
  {
    id: 'commune-meknes',
    period: {
      fr: 'Février 2023 - Mars 2023',
      en: 'February 2023 - March 2023',
    },
    role: {
      fr: 'Stage Développeur Web & Systèmes',
      en: 'Web & Systems Developer Intern',
    },
    company: 'Commune de Meknès',
    type: {
      fr: 'Stage en Secteur Public',
      en: 'Public Sector Internship',
    },
    description: {
      fr: [
        'Gestion, audit et mise à jour du système informatique municipal.',
        'Participation au développement d’applications internes de gestion administrative.',
        'Support technique aux utilisateurs et participation à l’optimisation des outils internes.',
      ],
      en: [
        'Audited and maintained municipal information systems and infrastructure.',
        'Collaborated on building internal web utilities for administrative record keeping.',
        'Provided user technical support and participated in upgrading internal tooling.',
      ],
    },
    technologies: ['PHP', 'MySQL', 'HTML/CSS', 'Maintenance SI'],
  },
];

export const EDUCATION: Education[] = [
  {
    id: 'istag',
    year: '2023',
    degree: {
      fr: 'Diplôme Technicien Spécialisé en Développement Digital, option Web Full Stack',
      en: 'Specialized Technician Diploma in Digital Development, Web Full Stack option',
    },
    institution: 'ISTAG Bab Tizimi',
    location: {
      fr: 'Meknès',
      en: 'Meknes',
    },
  },
  {
    id: 'bac',
    year: '2021',
    degree: {
      fr: 'Baccalauréat Sciences Physiques',
      en: 'Baccalaureate in Physical Sciences',
    },
    institution: 'Lycée 11 Janvier',
    location: {
      fr: 'Ain Taoujdat',
      en: 'Ain Taoujdat',
    },
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'saas-dev',
    iconName: 'LayoutDashboard',
    title: {
      fr: 'Applications SaaS & Dashboards',
      en: 'SaaS Platforms & Custom Dashboards',
    },
    description: {
      fr: 'Conception de logiciels SaaS complets : authentification, abonnements Stripe, tableaux de bord interactifs et gestion des rôles.',
      en: 'End-to-end SaaS development: user authentication, recurring Stripe subscriptions, reactive dashboards, and role-based permissions.',
    },
    highlights: {
      fr: [
        'Gestion des abonnements & facturation récurrente',
        'Architecture multi-locataires (Multi-tenant)',
        'Tableaux de bord analytiques en temps réel',
      ],
      en: [
        'Subscription billing & recurring payments',
        'Scalable multi-tenant architecture',
        'Real-time analytical KPI dashboards',
      ],
    },
  },
  {
    id: 'ai-automation',
    iconName: 'Cpu',
    title: {
      fr: 'Intelligence Artificielle & Automatisation',
      en: 'AI Solutions & Voice/Task Automations',
    },
    description: {
      fr: 'Intégration d’agents conversationnels, standards téléphoniques IA, modèles génératifs et automatisations de flux de travail.',
      en: 'Integration of conversational agents, AI voice phone systems, generative models, and automated business workflows.',
    },
    highlights: {
      fr: [
        'Standards vocaux IA autonomes 24/7',
        'Extraction et traitement automatique de documents',
        'Assistants virtuels connectés à votre base de données',
      ],
      en: [
        'Autonomous 24/7 AI voice receptionists',
        'Automated document parsing & extraction',
        'AI copilots securely wired to your databases',
      ],
    },
  },
  {
    id: 'showcase-sites',
    iconName: 'Briefcase',
    title: {
      fr: 'Vitrines pour Professions Libérales',
      en: 'Websites for Regulated Professionals',
    },
    description: {
      fr: 'Sites web haut de gamme pour avocats, médecins, experts-comptables et architectes avec prise de rendez-vous en ligne et SEO local.',
      en: 'High-end showcase portals for lawyers, doctors, accountants, and architects with synchronized online booking and local SEO.',
    },
    highlights: {
      fr: [
        'Design sobre, prestigieux et rassurant',
        'Module de réservation d’entretiens / consultations',
        'Référencement local Google optimisé',
      ],
      en: [
        'Prestige, trust-building visual aesthetic',
        'Online consultation booking calendar',
        'Optimized local search engine positioning',
      ],
    },
  },
  {
    id: 'ecommerce-solutions',
    iconName: 'ShoppingBag',
    title: {
      fr: 'Sites E-Commerce & Boutiques Clé en Main',
      en: 'High-Speed E-Commerce Stores',
    },
    description: {
      fr: 'Boutiques en ligne optimisées pour la conversion avec tunnel d’achat ultra-rapide, paiement multi-devises et gestion de stock.',
      en: 'Conversion-focused digital storefronts featuring ultra-fast checkout, multi-currency payments, and stock fulfillment.',
    },
    highlights: {
      fr: [
        'Paiements sécurisés (Stripe, PayPal, Cartes bancaires)',
        'Panier dynamique sans rechargement de page',
        'Interface d’administration des commandes & stocks',
      ],
      en: [
        'Secure gateways (Stripe, PayPal, credit cards)',
        'Zero-reload dynamic shopping cart',
        'Streamlined merchant fulfillment portal',
      ],
    },
  },
];

export const SKILLS = {
  frontend: [
    { name: 'React.js', level: 95 },
    { name: 'JavaScript (ES6+)', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'HTML5 & CSS3', level: 95 },
  ],
  backend: [
    { name: 'Node.js & Express', level: 90 },
    { name: 'PHP & Laravel', level: 88 },
    { name: 'Python & FastAPI', level: 82 },
    { name: 'REST APIs & WebSockets', level: 92 },
  ],
  database: [
    { name: 'MySQL', level: 90 },
    { name: 'MongoDB', level: 85 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'Redis / Caching', level: 80 },
  ],
  aiTools: [
    { name: 'Intégration d’APIs IA (OpenAI, Gemini)', level: 92 },
    { name: 'Agents Vocaux & Twilio / Speech AI', level: 88 },
    { name: 'Automatisation de tâches & Workflows', level: 90 },
    { name: 'Prompt Engineering & RAG', level: 85 },
  ],
  toolsAndMethods: [
    { name: 'Git & GitHub', level: 95 },
    { name: 'VS Code & Débogage', level: 95 },
    { name: 'Figma & UI/UX', level: 85 },
    { name: 'Méthodes Agiles & Scrum', level: 90 },
    { name: 'Déploiement Cloud (VPS, Vercel, Docker)', level: 85 },
  ],
};

export const TRANSLATIONS = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      projects: 'Projets',
      experience: 'Parcours',
      skills: 'Compétences',
      contact: 'Contact',
      whatsappBtn: 'WhatsApp Direct',
    },
    hero: {
      availableBadge: 'Disponible pour nouveaux projets',
      greeting: 'Bonjour, je suis',
      name: 'Mohamed Lakhloufi',
      role: 'Développeur Web Full Stack & Créateur SaaS',
      description: 'Je conçois des applications SaaS sur-mesure, des standards téléphoniques et copilotes IA, des vitrines haut de gamme pour professions libérales et des boutiques e-commerce performantes.',
      ctaProjects: 'Explorer mes projets',
      ctaContact: 'Me contacter',
      ctaWhatsApp: 'Discuter sur WhatsApp',
      downloadCv: 'Voir le CV',
      trustedStack: 'Technologies maîtrisées au quotidien',
    },
    services: {
      badge: 'Expertises & Solutions',
      title: 'Ce que je développe pour vous',
      subtitle: 'Des solutions web clé en main conçues pour propulser votre activité, automatiser votre travail et ravir vos clients.',
    },
    projects: {
      badge: 'Réalisations Récentes',
      title: 'Projets & Développements',
      subtitle: 'Découvrez des exemples concrets de plateformes SaaS, outils freelances, vitrines professionnelles et boutiques en ligne.',
      filters: {
        all: 'Tous les projets',
        saas: 'SaaS & IA',
        vitrine: 'Professions Libérales',
        ecommerce: 'E-Commerce',
      },
      viewDetails: 'Voir les détails',
      liveFeatures: 'Fonctionnalités clés',
      metricsLabel: 'Impact obtenu',
      techStack: 'Technologies',
    },
    experience: {
      badge: 'Expériences & Formation',
      title: 'Mon Parcours Professionnel',
      subtitle: 'Une solide expérience pratique en entreprise, en freelance et dans la création de solutions digitales complexes.',
      educationTitle: 'Diplômes & Certifications',
      strengthsTitle: 'Qualités Professionnelles',
      strengths: [
        'Travail en équipe & écoute active',
        'Grande autonomie & rigueur',
        'Esprit d’analyse & résolution de problèmes',
        'Communication fluide & transparence',
        'Respect strict des délais et gestion du temps',
        'Adaptabilité et capacité à travailler sous pression',
      ],
      languagesTitle: 'Langues',
      languages: [
        { name: 'Arabe', level: 'Langue maternelle' },
        { name: 'Français', level: 'Courant, parlé et compris' },
        { name: 'Anglais', level: 'Intermédiaire professionnel' },
      ],
    },
    skills: {
      badge: 'Stack Technique',
      title: 'Compétences & Outils',
      subtitle: 'Un arsenal technologique moderne pour concevoir des applications rapides, fiables et évolutives.',
      categories: {
        frontend: 'Frontend & Interfaces',
        backend: 'Backend & Architecture',
        database: 'Bases de données & Données',
        ai: 'IA & Automatisation',
        tools: 'Outils, Méthodes & Déploiement',
      },
    },
    contact: {
      badge: 'Travaillons ensemble',
      title: 'Démarrons votre projet',
      subtitle: 'Vous avez une idée de SaaS, besoin d’un site vitrine ou d’une boutique e-commerce ? Échangeons dès aujourd’hui.',
      form: {
        nameLabel: 'Votre nom complet',
        namePlaceholder: 'ex: Jean Dupont',
        emailLabel: 'Votre adresse e-mail',
        emailPlaceholder: 'ex: jean@entreprise.com',
        projectTypeLabel: 'Type de projet recherché',
        projectTypes: [
          'Plateforme SaaS / Logiciel Web',
          'Standard Téléphonique IA / Automatisation',
          'Site Vitrine pour Profession Libérale',
          'Boutique E-Commerce',
          'Autre besoin sur-mesure',
        ],
        budgetLabel: 'Budget estimé ou délai',
        budgetOptions: [
          '< 1 000 €',
          '1 000 € - 3 000 €',
          '3 000 € - 5 000 €',
          '> 5 000 €',
          'À définir ensemble',
        ],
        messageLabel: 'Décrivez votre besoin en quelques lignes',
        messagePlaceholder: 'Parlez-moi de vos objectifs, fonctionnalités attendues et délais souhaités...',
        submitBtn: 'Envoyer le message',
        sending: 'Envoi en cours...',
        successTitle: 'Message envoyé avec succès !',
        successMsg: 'Merci pour votre prise de contact. Je vous répondrai dans un délai maximum de 24 heures.',
        whatsappAlt: 'Préférez-vous un échange immédiat ?',
        whatsappAction: 'Ouvrir la discussion WhatsApp',
      },
      directContactTitle: 'Coordonnées directes',
      phoneLabel: 'Téléphone direct',
      emailLabel: 'E-mail professionnel',
      responseTime: 'Réponse sous 24h garantie',
    },
    whatsappWidget: {
      tooltip: 'Discuter sur WhatsApp',
      onlineStatus: 'En ligne — Réponse rapide',
      headerTitle: 'Mohamed Lakhloufi',
      headerSubtitle: 'Développeur Web Full Stack',
      greeting: 'Bonjour ! Comment puis-je vous aider dans votre projet web ou SaaS ?',
      quickOptionsLabel: 'Ou choisissez un sujet :',
      options: [
        'Demander un devis pour un projet',
        'Créer un SaaS ou outil IA',
        'Créer un site vitrine professionnel',
        'Boutique E-Commerce',
      ],
      inputPlaceholder: 'Tapez votre message...',
      sendButton: 'Envoyer',
    },
    footer: {
      rights: 'Tous droits réservés.',
      developerTag: 'Conçu avec passion et précision.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
      whatsappBtn: 'Direct WhatsApp',
    },
    hero: {
      availableBadge: 'Available for new projects',
      greeting: "Hello, I'm",
      name: 'Mohamed Lakhloufi',
      role: 'Full Stack Web Developer & SaaS Creator',
      description: 'I architect bespoke SaaS platforms, AI voice receptionists & copilots, high-end showcase portals for regulated professionals, and conversion-ready e-commerce stores.',
      ctaProjects: 'View My Projects',
      ctaContact: 'Contact Me',
      ctaWhatsApp: 'Chat on WhatsApp',
      downloadCv: 'View CV',
      trustedStack: 'Technologies used daily in production',
    },
    services: {
      badge: 'Expertise & Solutions',
      title: 'What I Build for You',
      subtitle: 'Turnkey web engineering engineered to scale your operations, automate repetitive workflows, and delight end users.',
    },
    projects: {
      badge: 'Featured Works',
      title: 'Selected Projects & Software',
      subtitle: 'Explore real-world implementations across SaaS systems, freelance automation tools, professional portals, and e-commerce.',
      filters: {
        all: 'All Projects',
        saas: 'SaaS & AI',
        vitrine: 'Professional Portals',
        ecommerce: 'E-Commerce',
      },
      viewDetails: 'View Details',
      liveFeatures: 'Core Capabilities',
      metricsLabel: 'Client Impact',
      techStack: 'Tech Stack',
    },
    experience: {
      badge: 'Career & Background',
      title: 'Professional Journey',
      subtitle: 'Proven track record through company roles, high-velocity freelancing, and mission-critical web applications.',
      educationTitle: 'Degrees & Education',
      strengthsTitle: 'Professional Qualities',
      strengths: [
        'Team collaboration & active listening',
        'High autonomy & problem-solving mindset',
        'Rigorous analytical thinking',
        'Clear & transparent communication',
        'Strict deadline adherence & time management',
        'Adaptability and composure under pressure',
      ],
      languagesTitle: 'Languages',
      languages: [
        { name: 'Arabic', level: 'Native proficiency' },
        { name: 'French', level: 'Fluent, spoken & written' },
        { name: 'English', level: 'Professional working proficiency' },
      ],
    },
    skills: {
      badge: 'Technical Arsenal',
      title: 'Skills & Toolset',
      subtitle: 'A contemporary developer stack geared towards building lightning-fast, secure, and extensible web applications.',
      categories: {
        frontend: 'Frontend & UI',
        backend: 'Backend & APIs',
        database: 'Databases & Storage',
        ai: 'AI & Automation',
        tools: 'Tooling, CI/CD & DevOps',
      },
    },
    contact: {
      badge: "Let's Collaborate",
      title: 'Start Your Project',
      subtitle: 'Have a SaaS concept in mind, or need a polished showcase website or an online store? Let’s talk today.',
      form: {
        nameLabel: 'Your Full Name',
        namePlaceholder: 'e.g. John Doe',
        emailLabel: 'Your Email Address',
        emailPlaceholder: 'e.g. john@company.com',
        projectTypeLabel: 'Desired Project Type',
        projectTypes: [
          'SaaS Platform / Web Software',
          'AI Phone Receptionist / Automation',
          'Showcase Website for Regulated Profession',
          'E-Commerce Store',
          'Other Bespoke Need',
        ],
        budgetLabel: 'Estimated Budget or Timeline',
        budgetOptions: [
          '< $1,000 / €1,000',
          '$1,000 - $3,000',
          '$3,000 - $5,000',
          '> $5,000',
          'To discuss together',
        ],
        messageLabel: 'Briefly describe your requirements',
        messagePlaceholder: 'Tell me about your business goals, target features, and timeline expectations...',
        submitBtn: 'Send Inquiry',
        sending: 'Sending...',
        successTitle: 'Inquiry Sent Successfully!',
        successMsg: 'Thank you for reaching out. I will respond within 24 hours.',
        whatsappAlt: 'Prefer an immediate response?',
        whatsappAction: 'Open WhatsApp Chat',
      },
      directContactTitle: 'Direct Coordinates',
      phoneLabel: 'Direct Phone',
      emailLabel: 'Work Email',
      responseTime: 'Guaranteed 24-hour response time',
    },
    whatsappWidget: {
      tooltip: 'Chat on WhatsApp',
      onlineStatus: 'Online — Fast response',
      headerTitle: 'Mohamed Lakhloufi',
      headerSubtitle: 'Full Stack Web Developer',
      greeting: 'Hello! How can I assist you with your web or SaaS project today?',
      quickOptionsLabel: 'Or select a topic:',
      options: [
        'Request a quote for a new project',
        'Build a SaaS or AI tool',
        'Create a professional showcase website',
        'Launch an E-Commerce store',
      ],
      inputPlaceholder: 'Type your message...',
      sendButton: 'Send',
    },
    footer: {
      rights: 'All rights reserved.',
      developerTag: 'Engineered with precision and passion.',
    },
  },
};
