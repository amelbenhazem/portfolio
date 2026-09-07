export const siteConfig = {
  name: "Amel Ben Hazem",
  title: "Amel Ben Hazem | Ingénieure Cloud & DevOps",
  description:
    "Portfolio d'Amel Ben Hazem — Ingénieure en Génie Logiciel et Systèmes d'Information, spécialisée en Cloud & DevOps, full-stack et automatisation.",
  url: "https://amelbenhazem.vercel.app",
  email: "amelbenhazem@gmail.com",
  phone: "+216 51 019 482",
  location: "Ben Arous, Mornag, Tunisie",
  linkedin: "https://linkedin.com/in/amal-ben-hazem",
  github: "https://github.com/amelbenhazem",
  instagram: "https://www.instagram.com/amal.ben.hazem",
  profileImage: "/images/profile.jpg",
  aboutImage: "/images/aboutme.jpg",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    href: siteConfig.linkedin,
    icon: "linkedin" as const,
  },
  {
    name: "GitHub",
    href: siteConfig.github,
    icon: "github" as const,
  },
  {
    name: "Instagram",
    href: siteConfig.instagram,
    icon: "instagram" as const,
  },
];


export const skillCategories = [
  {
    title: "Langages de programmation",
    items: ["Java", "C#", "C++", "PHP", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["Angular", "React", "Next.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Spring Boot",
      "ASP.NET Core",
      "Symfony",
    ],
  },
  {
    title: "Bases de Données",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Supabase"],
  },
  {
    title: "DevOps & Cloud",
    items: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "GitHub Actions",
      "GitLab CI/CD",
      "Azure DevOps",
      "Azure Stack Hub",
      "Nginx",
      "Prometheus",
      "Grafana",
      "DigitalOcean",
    ],
  },
  {
    title: "Qualité & Sécurité",
    items: ["SonarQube", "Snyk", "Trivy", "Nexus"],
  },
  {
    title: "Architecture & Bonnes pratiques",
    items: [
      "MVC",
      "Repository/Service Pattern",
      "Clean Architecture",
      "REST API",
      "JWT",
      "WebSockets",
      "Git",
    ],
  },
  {
    title: "Big Data",
    items: ["Hadoop", "Spark", "HDFS", "YARN"],
  },
  {
    title: "IoT & Systèmes embarqués",
    items: ["Qt Creator", "Arduino", "Raspberry Pi", "Figma"],
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  category: string;
  featured?: boolean;
  highlights: string[];
  tags: string[];
  image: string;
}

export interface ProjectSection {
  title: string;
  projects: Project[];
}

export const projectSections: ProjectSection[] = [
  {
    title: "Expériences professionnelles",
    projects: [
      {
        id: "ticketmanager",
        title: "TicketManager — Gestion de tickets sur Azure Stack Hub",
        subtitle: "Projet de Fin d'Études · RFC",
        period: "Février – Juin 2026",
        location: "Menzah 4, Tunis",
        category: "PFE",
        featured: true,
        highlights: [
          "Plateforme de gestion d'incidents IT : multi-rôles, cycle de vie des tickets, historique et notifications temps réel.",
          "Industrialisation complète : IaC, conteneurisation, orchestration et pipeline CI/CD jusqu'au déploiement automatisé.",
          "Sécurisation de l'environnement et supervision de la solution en production.",
        ],
        tags: [
          "Next.js",
          "NestJS",
          "MongoDB",
          "Docker",
          "Kubernetes",
          "Terraform",
          "Azure DevOps",
          "Prometheus",
          "Grafana",
          "Socket.IO",
          "JWT",
        ],
        image: "/images/projects/ticketmanager.svg",
      },
      {
        id: "autoremise",
        title: "AutoRemise — Application web de gestion bancaire",
        subtitle: "Stage d'été · Shamash Information Technology",
        period: "Juillet – Août 2025",
        location: "Centre Urbain Nord, Tunis",
        category: "Stage",
        highlights: [
          "PWA automatisant la génération de PDF de remise bancaire à partir de fichiers Excel.",
          "Création de templates personnalisés pour plusieurs banques tunisiennes.",
        ],
        tags: [
          "Next.js",
          "React",
          "Tailwind CSS",
          "Framer Motion",
          "PDF-lib",
          "XLSX",
          "TypeScript",
          "next-pwa",
        ],
        image: "/images/projects/autoremise.svg",
      },
      {
        id: "chimiotherapie",
        title: "Solution robotisée — Préparation automatisée de chimiothérapie",
        subtitle: "Projet de Fin de Licence · ASQII",
        period: "Février – Mai 2023",
        location: "Le Kram",
        category: "PFL",
        highlights: [
          "Solution robotisée assistant le personnel soignant, réduisant les risques d'erreur et d'exposition aux substances.",
          "Module de vision par ordinateur pour surveillance et vérification automatisée du processus.",
          "Interface Figma et application de contrôle C++/Qt Creator avec SQL Server.",
          "Pilotage via Raspberry Pi et Arduino pour l'automatisation du dispositif.",
        ],
        tags: ["Figma", "Qt Creator", "C++", "SQL Server", "Raspberry Pi", "Arduino"],
        image: "/images/projects/ecare.svg",
      },
      {
        id: "armoire-medicaments",
        title: "Armoire intelligente — Stockage et distribution de médicaments",
        subtitle: "Projet de Fin d'Année · ASQII",
        period: "Juillet – Septembre 2022",
        location: "Le Kram",
        category: "PFA",
        highlights: [
          "Armoire intelligente automatisant le stockage et la distribution sécurisée de médicaments.",
          "Traçabilité et suivi de l'inventaire en temps réel pour un contrôle rigoureux des stocks.",
          "Logique de contrôle C++/Qt et pilotage des mécanismes physiques via Arduino.",
        ],
        tags: ["Qt", "C++", "Arduino", "Inventaire temps réel"],
        image: "/images/projects/ecare.svg",
      },
      {
        id: "steg",
        title: "Stage d'observation — Téléphonie & réseaux",
        subtitle: "STEG",
        period: "Août – Septembre 2020",
        location: "Tunis",
        category: "Stage",
        highlights: [
          "Observation des activités liées à la téléphonie, fibre optique et antennes radioélectriques.",
        ],
        tags: ["Téléphonie", "Fibre optique", "Réseaux"],
        image: "/images/projects/devops.svg",
      },
    ],
  },
  {
    title: "Projets académiques",
    projects: [
      {
        id: "devops-monitoring",
        title: "Déploiement et monitoring d'une application Next.js",
        subtitle: "Projet académique",
        period: "2025",
        category: "Académique",
        highlights: [
          "Déploiement Next.js conteneurisé sur k3s avec CI/CD GitHub Actions.",
          "Gestion des secrets Supabase et reverse proxy Nginx.",
          "Monitoring Prometheus/Grafana et dépannage Kubernetes (pods, rollout, scale).",
        ],
        tags: [
          "Docker",
          "Kubernetes",
          "GitHub Actions",
          "Nginx",
          "Supabase",
          "Prometheus",
          "Grafana",
          "DigitalOcean",
        ],
        image: "/images/projects/devops.svg",
      },
      {
        id: "chat-mern",
        title: "Chat Application MERN avec CI/CD Docker/EC2",
        subtitle: "Projet académique",
        period: "2025",
        category: "Académique",
        highlights: [
          "Application de chat MERN conteneurisée avec Docker.",
          "Orchestration multi-services via Docker Compose.",
          "Pipeline CI/CD GitLab pour build, tests automatisés et déploiement sur EC2.",
        ],
        tags: ["MERN Stack", "Docker", "Docker Compose", "GitLab CI/CD", "EC2", "Yarn"],
        image: "/images/projects/chat.svg",
      },
      {
        id: "e-care",
        title: "e-Care — Solution médicale web",
        subtitle: "Projet académique",
        period: "2025",
        category: "Académique",
        highlights: [
          "Plateforme web centralisant les données médicales, messagerie sécurisée et prise de rendez-vous.",
        ],
        tags: ["NestJS", "Next.js", "PostgreSQL"],
        image: "/images/projects/ecare.svg",
      },
      {
        id: "immoconnect",
        title: "ImmoConnect — Plateforme immobilière",
        subtitle: "Projet académique",
        period: "2025",
        category: "Académique",
        highlights: [
          "Gestion des annonces (vente/location), recherche avancée, planification des visites et dashboard agents.",
        ],
        tags: ["ASP.NET Core", "MySQL", "Repository/Service Pattern"],
        image: "/images/projects/immo.svg",
      },
      {
        id: "bookmanager",
        title: "BookManager — Gestion de livres",
        subtitle: "Projet académique",
        period: "2024",
        category: "Académique",
        highlights: [
          "CRUD, notation par étoiles, commentaires et tableau de bord administrateur.",
        ],
        tags: ["Angular", "Guards", "Reactive Forms"],
        image: "/images/projects/autoremise.svg",
      },
      {
        id: "restaurant",
        title: "Restaurant Management System",
        subtitle: "Projet académique",
        period: "2024",
        category: "Académique",
        highlights: [
          "Système complet de gestion de restaurant : menu, commandes, tables, personnel et clients.",
        ],
        tags: ["NestJS", "GraphQL", "TypeORM", "MySQL", "Swagger"],
        image: "/images/projects/ticketmanager.svg",
      },
      {
        id: "senyetna",
        title: "Senyetna — Plateforme e-commerce agricole",
        subtitle: "Projet académique",
        period: "2024",
        category: "Académique",
        highlights: [
          "Vente en ligne de produits agricoles avec avis clients et statistiques.",
        ],
        tags: ["Symfony", "PostgreSQL", "Chart.js"],
        image: "/images/projects/immo.svg",
      },
    ],
  },
];

export const aboutBio = [
  "Software Engineer with a degree in Software Engineering and Information Systems from Tekup University, specialized in Cloud & DevOps. Curious, creative, and passionate about innovation, I enjoy turning ideas into concrete, industrialized software solutions.",
  "My journey has taught me autonomy, adaptability, and mastery of modern technologies. I am looking to join an ambitious team where I can take on real challenges in software development, Cloud, and DevOps, and continue to grow professionally.",
];

export const education = [
  {
    degree:
      "Cycle d'ingénieur en Génie Logiciel et Systèmes d'Information",
    school: "Université Tekup",
    schoolUrl: "https://tek-up.de/",
    year: "2026",
    location: "Ariana, Tunisie",
    mapsUrl: "https://www.google.com/maps/search/Tekup+University+Ariana+Tunisia",
  },
  {
    degree:
      "Licence en Technologies de l'Information et de la Communication",
    school:
      "ISTIC (Institut Supérieur des Technologies de l'Information et de la Communication)",
    schoolUrl: "http://www.istic.rnu.tn/fr/",
    year: "2023",
    location: "Borj Cédria, Tunisie",
    mapsUrl: "https://www.google.com/maps/search/ISTIC+Borj+Cedria+Tunisia",
  },
  {
    degree: "Baccalauréat en Informatique",
    school: "Lycée Chebbi Mornag",
    year: "2018",
    location: "Mornag, Tunisie",
    mapsUrl: "https://www.google.com/maps/search/Lycée+Chebbi+Mornag+Tunisia",
  },
];

export const heroTitle = "Software Engineer, Cloud & DevOps";
export const heroSubtitle = "Tekup Graduate · Highest Honors";
export const heroDescription =
  "Passionate about Cloud, DevOps, and full-stack development, I design, build, and deploy robust, automated, production-ready solutions.";
