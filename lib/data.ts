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
  instagram: "https://instagram.com",
  profileImage: "/images/profile.jpg",
  aboutImage: "/images/aboutme.jpg",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
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
    title: "Langages de Programmation",
    items: ["Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & Bibliothèques",
    items: [
      "Spring Boot",
      "Symfony",
      "Django",
      "NestJS",
      "Express.js",
      "React",
      "Angular",
      "Next.js",
      "Nuxt.js",
      "Ionic",
      "Bootstrap",
      "Tailwind CSS",
      "Swagger",
      "Node.js",
      ".NET",
      "PHP",
    ],
  },
  {
    title: "DevOps, Cloud & Systèmes",
    items: [
      "Linux",
      "Git",
      "GitHub",
      "GitLab CI/CD",
      "Docker",
      "Kubernetes",
      "Helm",
      "Nginx",
      "Prometheus",
      "Grafana",
      "Terraform",
      "Ansible",
      "CI/CD Automation",
      "Monitoring",
      "Cloud (AWS, DigitalOcean)",
      "Virtualisation",
      "Réseaux IP",
      "Load Balancing",
    ],
  },
  {
    title: "Tests & Qualité Logicielle",
    items: [
      "JUnit",
      "PyTest",
      "Jest",
      "Selenium",
      "Automatisation des Tests",
      "Qualité Logicielle",
      "API REST",
    ],
  },
  {
    title: "Big Data & Intelligence Artificielle",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Apprentissage Automatique",
      "Fouille de Données",
      "Traitement d'Image",
      "Recherche Intelligente",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    title: "Bases de Données",
    items: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "SQLite",
      "Oracle",
      "MongoDB",
      "Redis",
      "Supabase",
    ],
  },
  {
    title: "Architecture & Design",
    items: ["MVC", "MVP", "MVVM", "Design Patterns", "Clean Architecture"],
  },
  {
    title: "Web & Marketing Digital",
    items: [
      "SEO",
      "Analyse du Trafic Web",
      "Optimisation de Contenu",
      "Google Analytics",
      "Social Media Analytics",
    ],
  },
];

export const projects = [
  {
    id: "ticketmanager",
    title: "TicketManager",
    description:
      "Plateforme full-stack de gestion d'incidents IT (helpdesk), interfaces multi-rôles, déployée sur Azure Stack Hub avec approche DevOps complète.",
    tags: ["Next.js", "NestJS", "MongoDB", "Kubernetes", "Terraform", "Azure DevOps"],
    codeUrl: "https://github.com/amelbenhazem",
    demoUrl: "#",
    image: "/images/projects/ticketmanager.svg",
    featured: true,
  },
  {
    id: "autoremise",
    title: "AutoRemise",
    description:
      "PWA automatisant la génération de PDF de remise bancaire pour plusieurs banques tunisiennes.",
    tags: ["Next.js", "React", "Tailwind CSS", "PDF-lib", "TypeScript"],
    codeUrl: "https://github.com/amelbenhazem",
    demoUrl: "#",
    image: "/images/projects/autoremise.svg",
  },
  {
    id: "devops-monitoring",
    title: "DevOps Monitoring Stack",
    description:
      "Déploiement Next.js conteneurisé sur k3s avec CI/CD GitHub Actions, monitoring Prometheus/Grafana.",
    tags: ["Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana"],
    codeUrl: "https://github.com/amelbenhazem",
    demoUrl: "#",
    image: "/images/projects/devops.svg",
  },
  {
    id: "chat-mern",
    title: "Chat App MERN",
    description:
      "Application de chat temps réel conteneurisée avec pipeline CI/CD GitLab vers EC2.",
    tags: ["MERN Stack", "Docker", "GitLab CI/CD", "EC2"],
    codeUrl: "https://github.com/amelbenhazem",
    demoUrl: "#",
    image: "/images/projects/chat.svg",
  },
  {
    id: "e-care",
    title: "e-Care",
    description:
      "Plateforme médicale web : dossiers, messagerie sécurisée, prise de rendez-vous.",
    tags: ["NestJS", "Nuxt.js", "PostgreSQL"],
    codeUrl: "https://github.com/amelbenhazem",
    demoUrl: "#",
    image: "/images/projects/ecare.svg",
  },
  {
    id: "immoconnect",
    title: "ImmoConnect",
    description:
      "Plateforme immobilière avec recherche avancée et dashboard agents.",
    tags: ["ASP.NET Core", "MySQL"],
    codeUrl: "https://github.com/amelbenhazem",
    demoUrl: "#",
    image: "/images/projects/immo.svg",
  },
];

export const aboutBio = [
  "Software Engineer graduated from Tekup with Highest Honors, specializing in Software Engineering and Information Systems.",
  "Focused on Cloud & DevOps, I design robust, automated software solutions.",
  "I'm skilled in full-stack development, containerization, CI/CD, and Infrastructure as Code.",
  "Curious and detail-oriented, I turn ideas into reliable, production-ready systems.",
  "I'm now looking to join a team where I can keep learning and growing.",
];

export const heroTitle = "Software Engineer, Cloud & DevOps";
export const heroSubtitle = "Tekup Graduate · Highest Honors";
export const heroDescription =
  "Passionate about Cloud, DevOps, and full-stack development, I build robust, automated, production-ready solutions.";
