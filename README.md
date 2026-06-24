# Mathis Marichy — Portfolio

[![Site](https://img.shields.io/badge/site-mathis--marichy.fr-7c3aed?style=flat-square)](https://mathis-marichy.fr)
[![Next.js](https://img.shields.io/badge/Next.js-15-000?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

Portfolio personnel de **Mathis Marichy**, lead developer web spécialisé en **Next.js**, **TypeScript** et **PostgreSQL**.

> Je conçois et développe des applications web performantes, de l'architecture base de données jusqu'à l'interface utilisateur.

---

## À propos

| | |
|---|---|
| **Rôle** | Lead Developer Web |
| **Disponibilité** | Alternance dès septembre 2026 |
| **Langues** | Français / Anglais |
| **Localisation** | France · Remote possible |

Passionné par la création d'applications web robustes et performantes, je pilote aujourd'hui le développement d'un portail B2B from scratch en alternance chez **Fluidexpert** (Next.js, TypeScript, PostgreSQL, intégration ERP).

### Parcours

- **Sep. 2025 — Sep. 2026** — Apprenti Lead Developer · Fluidexpert
- **Jan. 2025 — Août 2025** — Chauffeur livreur VL · Drive to Home
- **Nov. 2024 — Déc. 2024** — Vendeur (renfort fin d'année) · Boulanger
- **2023 — 2024** — Titre professionnel Développeur intégrateur web · OpenClassrooms

### Projets mis en avant

| Projet | Description | Stack | Liens |
|--------|-------------|-------|-------|
| **Portail FluidExpert** | Portail B2B de centralisation des données (admin, suivi, espace client, mode hors ligne) | Next.js, TypeScript, PostgreSQL, Vercel | [Démo](https://portal.fluidexpert.com/) |
| **Kasa** | Site de location d'appartements avec galerie et routing par annonce | React, SASS, React Router | [Démo](https://mmarichy.github.io/kasa/) · [GitHub](https://github.com/mmarichy/kasa) |
| **Argent Bank** | Frontend bancaire : auth, profil, tableau de bord, API REST | React, Redux, REST API | [GitHub](https://github.com/mmarichy/ArgentBank) |

### Stack technique

**Frontend** — Next.js, React, TypeScript, Tailwind CSS, HTML, CSS, JavaScript

**Backend** — Node.js, REST API, Next.js (API Routes)

**Base de données** — PostgreSQL, Prisma ORM

**DevOps & outils** — Docker, GitHub Actions, Vercel, Linux, Git

**Outils du quotidien** — VS Code, Figma, Notion, GitHub

### Contact

- **Email** — [marichy.pro@gmail.com](mailto:marichy.pro@gmail.com)
- **GitHub** — [@mmarichy](https://github.com/mmarichy)
- **LinkedIn** — [mathis-marichy](https://www.linkedin.com/in/mathis-marichy/)

---

## Le projet

Site portfolio moderne, sombre et animé, construit avec **Next.js 15** (App Router) et **React 19**. Il présente mon profil, mes projets et un formulaire de contact fonctionnel.

### Fonctionnalités

- **Page d'accueil** — Hero animé, badge de disponibilité, sélection de projets récents
- **Page projets** — Catalogue complet avec captures, stack et liens démo / GitHub
- **Page à propos** — Bio, parcours, grille de compétences et stack détaillée
- **Page contact** — Formulaire avec envoi d'email via [Resend](https://resend.com)
- **SEO** — Métadonnées Open Graph, Twitter Cards, sitemap, robots.txt, données structurées JSON-LD
- **UX** — Curseur personnalisé, animations au scroll (Motion), menu contextuel, design responsive

### Architecture

```
portfolio/
├── app/                    # Routes Next.js (App Router)
│   ├── api/contact/        # Endpoint POST du formulaire de contact
│   ├── a-propos/           # Page À propos
│   ├── contact/            # Page Contact
│   ├── projets/            # Page Projets
│   ├── layout.tsx          # Layout racine (navbar, footer, fonts)
│   ├── page.tsx            # Page d'accueil
│   ├── sitemap.ts          # Génération du sitemap
│   └── robots.ts           # Configuration robots.txt
├── components/             # Composants React réutilisables
├── lib/                    # Données, métadonnées, emails, types
│   ├── data.ts             # Expérience, stack, navigation
│   ├── projects.ts         # Catalogue des projets
│   └── site.ts             # Constantes globales du site
└── public/                 # Assets statiques (favicon, images projets)
```

Les contenus éditoriaux (projets, expérience, liens sociaux) sont centralisés dans `lib/` pour faciliter les mises à jour sans toucher aux composants.

---

## Démarrage rapide

### Prérequis

- [Node.js](https://nodejs.org) 20+
- npm (ou pnpm / yarn)

### Installation

```bash
git clone https://github.com/mmarichy/portfolio.git
cd portfolio
npm install
```

### Variables d'environnement

Copiez le fichier d'exemple et renseignez vos valeurs :

```bash
cp .env.example .env
```

| Variable | Description | Obligatoire |
|----------|-------------|-------------|
| `NEXT_PUBLIC_SITE_URL` | URL canonique du site (SEO, sitemap, Open Graph) | Recommandé |
| `RESEND_API_KEY` | Clé API Resend pour le formulaire de contact | Oui (contact) |
| `CONTACT_TO_EMAIL` | Adresse qui reçoit les messages | Oui (contact) |
| `RESEND_FROM_EMAIL` | Expéditeur des emails (domaine vérifié sur Resend) | Oui (contact) |
| `GOOGLE_SITE_VERIFICATION` | Token Google Search Console | Non |

Sans `RESEND_API_KEY`, le site fonctionne mais le formulaire de contact renverra une erreur serveur.

### Lancer en développement

```bash
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

### Scripts disponibles

| Commande | Action |
|----------|--------|
| `npm run dev` | Serveur de développement (Turbopack) |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | Vérification ESLint |

### Déploiement

Le projet est conçu pour être déployé sur [Vercel](https://vercel.com). Configurez les variables d'environnement dans le dashboard Vercel et définissez `NEXT_PUBLIC_SITE_URL` sur votre domaine final (ex. `https://mathis-marichy.fr`).

---

## Licence

Projet privé — © Mathis Marichy. Tous droits réservés.
