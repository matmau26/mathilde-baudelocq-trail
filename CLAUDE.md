# Media Kit — Mathilde Baudelocq

Site vitrine / media kit d'une athlète de trail running, destiné au démarchage
d'équipementiers. Bilingue FR/EN, entièrement statique, pas de back-end.

## Commandes

```bash
npm install
npm run dev      # serveur de dev Vite
npm run build    # build de production dans dist/
npm run preview  # sert le build local
```

Pas de tests, pas de linter, pas de CI. Le seul contrôle avant de pousser est
que `npm run build` passe.

## Stack

React 18 · Vite 6 · Tailwind 3 · React Router 6 · framer-motion · lucide-react ·
EmailJS (formulaire de contact) · Vercel Analytics · Cloudinary (vidéos).
JavaScript uniquement — pas de TypeScript.

## Architecture

```
src/
  App.jsx              4 routes ; Home + Header dans le bundle initial,
                       Contact / Communiques / CommuniqueDetail en lazy()
  main.jsx             montage + fallback SPA (voir « Déploiement »)
  index.css            Tailwind + utilitaires .bg-mesh-* et .content-visibility-auto
  pages/               Home, Contact, Communiques, CommuniqueDetail
  components/          Hero, Athlete, Palmares, Gallery, RaceResults,
                       Calendar, Partnership, Header, LanguageSwitch, Picture
  i18n/                translations.js (tout le texte), LanguageContext, useT
  data/communiques.js  communiqués de presse
public/                images (JPEG/PNG + variantes AVIF), favicons, manifest
```

`pages/Home.jsx` empile les 6 sections de la page d'accueil, chacune enveloppée
dans un `div.content-visibility-auto` avec un `containIntrinsicSize` estimé.

## Où modifier le contenu

Le contenu est réparti sur quatre fichiers — il n'y a pas de CMS.

| Quoi | Où |
| --- | --- |
| Tout le texte visible (titres, KPI ITRA/UTMB, objectifs du calendrier, piliers partenariat, libellés) | `src/i18n/translations.js` |
| Tableau des résultats de courses | constante `RACES` dans `src/components/RaceResults.jsx` |
| Communiqués de presse | `src/data/communiques.js` (nouvel objet en tête, ordre antéchronologique) |
| Galerie photos/vidéos | constante `MEDIA` dans `src/components/Gallery.jsx` |

### Règle i18n

`translations.js` contient deux sous-objets miroirs, `fr` et `en`, de structure
strictement identique. **Toute chaîne ajoutée ou modifiée doit l'être des deux
côtés.** Il n'y a aucun mécanisme de fallback par clé : `useT('section')` renvoie
la sous-section complète de la langue active, donc une clé absente en `en` sort
`undefined` à l'écran.

Les composants ne contiennent aucun texte en dur — s'il faut en ajouter, il passe
par `translations.js`.

## Images — à lire avant d'en ajouter une

`src/components/Picture.jsx` sert des AVIF responsives via `<picture>`, mais
**uniquement pour les fichiers listés en dur** dans les sets `HOT_FILES` (photos)
et `HOT_LOGOS` (logos). Les variantes `-640w.avif` / `-1024w.avif` (et
`-480w` / `-720w` pour les logos) ont été générées manuellement : **aucun script
de génération n'existe dans le dépôt**.

Ajouter une photo optimisée demande donc trois gestes :

1. déposer le `.jpg`/`.png` dans `public/` ;
2. générer à côté `nom.avif`, `nom-640w.avif`, `nom-1024w.avif` ;
3. ajouter `/nom` (sans extension) au set `HOT_FILES` de `Picture.jsx`.

Sans l'étape 3, l'image est servie en pleine résolution sur mobile. Un `src`
déjà en `.avif` (comme la couverture de communiqué) traverse `Picture` sans
transformation — c'est attendu.

## Contraintes de performance à ne pas casser

Une campagne d'optimisation mobile (Safari iOS) explique plusieurs choix qui
peuvent sembler arbitraires. Ils sont volontaires et commentés dans le code :

- blobs flous décoratifs masqués sous `md:` — leur `blur-[100px]` sature le GPU
  sur iOS ;
- `backdrop-blur` réservé à `md:` et au-delà (header, notamment) ;
- gradients de fond sans `background-attachment: fixed` (forçait une
  rasterisation à chaque frame de scroll) ;
- `content-visibility: auto` sur les sections sous la ligne de flottaison ;
- code splitting par route dans `App.jsx` ;
- préchargement LCP (`<link rel="preload">` avec `imagesrcset`) dans `index.html`
  — à mettre à jour si la photo du Hero change ;
- vidéos Cloudinary montées à l'approche du viewport via `IntersectionObserver`,
  avec garde-fou `saveData` / `effectiveType` pour les réseaux lents.

## Branches et déploiement

La branche de référence, qui porte l'intégralité du site, est
**`claude/new-project-setup-qh1WF`**. C'est elle qu'il faut prendre comme base de
toute nouvelle branche.

Une branche `main` divergente subsiste peut-être : abandonnée dès le premier
commit, elle ne contient qu'une maquette initiale et des uploads d'images faits
via l'interface GitHub. **Ne jamais s'en servir comme base.** Ses seuls fichiers
propres sont `Mathilde.jpeg` (original pleine résolution, 1,7 Mo, à la racine),
`public/Ventoux26/Communiqué` (texte source déjà intégré dans
`data/communiques.js`) et `src/components/Profile.jsx` (remplacé par
`Athlete.jsx`).

Déploiement par l'intégration Git de Vercel (pas de workflow GitHub Actions, pas
de `vercel.json`).

**Point de vigilance :** `public/404.html` et la reprise de `sessionStorage
.spa-redirect` dans `main.jsx` sont un fallback SPA conçu pour **GitHub Pages**.
Sur Vercel il ne s'applique pas — l'accès direct à une route profonde
(`/communiques/grv-2026` tapé dans la barre d'adresse) a besoin d'une rewrite
`vercel.json` vers `/index.html`. À vérifier en production.

## Valeurs codées en dur

- `src/pages/Contact.jsx` : identifiants EmailJS (service, template, clé publique
  — exposables côté client par conception) et l'adresse de destination.
- Comptes Cloudinary : URLs `res.cloudinary.com/dnh2k1blz/...` dans `Gallery.jsx`,
  `Palmares.jsx`, `Contact.jsx` et `data/communiques.js`.

## Conventions

- Commentaires et noms de constantes métier en français ; le code reste en
  anglais (props, fonctions).
- Palette Tailwind personnalisée : `mountain` (bleu ardoise), `flame` (orange,
  couleur d'accent principale), `electric` (bleu), `solar` (jaune), `cream`.
- Polices : `font-display` = Oswald (titres), `font-sans` = Inter,
  `font-editorial` = Playfair Display (uniquement les sous-titres de communiqué).
- Motif récurrent : titres de section en deux morceaux (`title1` / `title2`), le
  second en dégradé `bg-clip-text text-transparent`.
