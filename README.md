# Portfolio — Amel Ben Hazem

Portfolio personnel en **Next.js 14** (App Router) + **TypeScript** + **Tailwind CSS** + **Framer Motion**, prêt à déployer sur Vercel.

## Stack

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS
- Framer Motion
- Lucide React (icônes)

## Démarrage local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Déploiement Vercel

1. Pousser le repo sur GitHub
2. Importer le projet sur [vercel.com](https://vercel.com)
3. Déployer — aucune configuration supplémentaire requise

## Structure du projet

```
portfolio/
├── app/
│   ├── layout.tsx       # Layout racine, fonts, SEO metadata
│   ├── page.tsx         # Page d'accueil (assemblage des sections)
│   └── globals.css      # Styles globaux Tailwind
├── components/
│   ├── Navbar.tsx       # Navigation sticky + menu mobile
│   ├── Hero.tsx         # Section hero avec animations
│   ├── About.tsx        # À propos + stats animées
│   ├── Skills.tsx       # Grille de compétences
│   ├── SkillCard.tsx    # Carte compétence individuelle
│   ├── Projects.tsx     # Grille de projets
│   ├── ProjectCard.tsx  # Carte projet individuelle
│   ├── Contact.tsx      # Section contact
│   ├── ContactForm.tsx  # Formulaire contrôlé (EmailJS/Resend ready)
│   ├── Footer.tsx       # Pied de page
│   ├── SocialIcons.tsx  # Icônes sociales réutilisables
│   ├── SectionHeading.tsx
│   └── AnimatedSection.tsx
├── lib/
│   └── data.ts          # Données centralisées (projets, skills, contact)
└── public/
    ├── images/          # Illustrations SVG + mockups projets
    └── cv.pdf           # Votre CV (à ajouter)
```

## Personnalisation

- **Données** : modifier `lib/data.ts`
- **CV** : placer votre fichier PDF dans `public/cv.pdf`
- **Formulaire** : intégrer EmailJS ou Resend (instructions dans `ContactForm.tsx`)
- **Couleurs** : palette dans `tailwind.config.ts`

## Contact

- Email : amelbenhazem@gmail.com
- LinkedIn : [linkedin.com/in/amal-ben-hazem](https://linkedin.com/in/amal-ben-hazem)
- GitHub : [github.com/amelbenhazem](https://github.com/amelbenhazem)
