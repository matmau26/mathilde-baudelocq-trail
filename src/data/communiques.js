// Communiqués de course — données structurées par slug, traduites FR / EN.
// Ajouter un nouveau communiqué : pousser un nouvel objet en tête de la liste
// (ordre antéchronologique).

export const COMMUNIQUES = [
  {
    slug: 'utv-2026',
    date: '2026-09-12',
    cover: '/2026UTV/IMG_0364.jpg',
    coverAlt: 'Ultra Trail du Vercors 2026 · Villard-de-Lans',
    location: 'Villard-de-Lans · Isère',
    distance: '85 km',
    elevation: '4 300 m D+',
    startTime: '05:00',
    photos: [
      { src: '/2026UTV/IMG_0353.jpg' },
      { src: '/2026UTV/IMG_0367.jpg' },
      { src: '/2026UTV/IMG_2025.jpg' },
    ],
    videos: [
      'https://res.cloudinary.com/dnh2k1blz/video/upload/v1789376651/copy_11E6C4EC-983A-4C2F-91FD-F00B8926C325_abji6j.mov',
    ],
    fr: {
      title: 'Ultra Trail du Vercors — Villard-de-Lans',
      subtitle: "L'Ultra Solo — 85 km",
      meta: '85 km · 4 300 m D+ · Samedi 5 h',
      excerpt:
        "Malade 48 h avant le départ, Mathilde arrache un deuxième ultra bouclé et reprend quatorze places au scratch dans les vingt-sept derniers kilomètres. La preuve mentale du chantier.",
      paragraphs: [
        "Onze semaines de préparation déroulées sans accroc — pas une séance manquée, pas une blessure, pas un pépin. L'objectif était précis : mesurer son plafond sur un deuxième ultra. Puis jeudi, à quarante-huit heures du départ, le nez qui coule. Vendredi matin, la fièvre et des jambes qui refusent de sortir du lit. Elle arrive dans le Vercors le vendredi soir, déjà malade. Samedi 5 heures, dossard 13 sur la poitrine, elle est sur la ligne.",
        "Le départ de l'Ultra Trail du Vercors est de ceux qu'on n'oublie pas. Nuit noire, frontales, un thermomètre proche de zéro. La montée se fait au flambeau, une file de lumières qui s'étire sur la colline. Puis le jour se lève sur les sommets, et les couleurs prennent les crêtes une à une.",
        "Sur le papier, la première partie est parfaite. Elle bascule au Pic Saint-Michel, 1 916 mètres, au bout de 12 kilomètres : 15ᵉ féminine. Elle pointe à Autrans à la mi-course, 20ᵉ féminine, dans les temps prévus. De l'intérieur, c'est autre chose : la trachée chauffe, chaque respiration se fait plus courte.",
        "C'est après Autrans que la course bascule. Le pacing tient, la nutrition tient — pas un seul trouble digestif sur quatorze heures et demie. Mais l'énergie s'en va, et respirer devient douloureux. Le tout tombe pile sur la portion la plus technique du parcours, les crêtes, où quatre kilomètres prennent une heure et demie. Un décor magnifique qu'elle ne regarde pas.",
        "Au Pas de Pertuson, kilomètre 58, elle cède cinq places au féminin. La vraie question se pose : continuer ou pas. Elle choisit de continuer, en acceptant que ce ne sera pas la course qu'elle est venue chercher. Rallier Rencurel. Puis finir, coûte que coûte.",
        "Entre le Pas de Pertuson et l'arrivée, elle ne perd plus une seule place au féminin et en reprend quatorze au scratch. Il lui reste 1 450 mètres de dénivelé positif après Rencurel, dont un mur de 460 mètres à 15 %. Elle les monte en marchant, en mangeant, sans s'arrêter.",
        "Elle franchit la ligne à Villard-de-Lans en 14 h 30'03\", après 84,9 kilomètres et près de 4 900 mètres de dénivelé positif réellement mesurés sur la trace — au-delà des 4 300 annoncés. 25ᵉ femme sur 55 arrivées, 125ᵉ sur 247 classés. La médiane du plateau féminin, ce jour-là, était à 15 h 06. Malade, elle la bat de trente-six minutes. Ce devait être une finalité ; c'est devenu une course de préparation.",
      ],
      resultsTitle: 'Résultats — Mathilde Baudelocq',
      results: [
        { label: 'Temps', value: "14 h 30'03\"" },
        { label: 'Classement scratch', value: '125ᵉ / 247' },
        { label: 'Classement femmes', value: '25ᵉ / 55' },
        { label: 'Catégorie', value: '6ᵉ M0 F / 15' },
        { label: 'Dossard', value: '13' },
      ],
      photosTitle: 'Reportage photo',
      videoTitle: 'Vidéo de course',
      videoHeading1: 'Un ultra,',
      videoHeading2: 'sous la fièvre',
      videoTagline:
        "De la nuit du départ au lever de soleil sur les crêtes, un aperçu vidéo de la journée.",
      photoAlts: [
        'Sur les crêtes du Vercors · UTV 2026',
        'En course · Ultra Trail du Vercors',
        'Arrivée à Villard-de-Lans',
      ],
    },
    en: {
      title: 'Ultra Trail du Vercors — Villard-de-Lans',
      subtitle: 'The Ultra Solo — 85 km',
      meta: '85 km · 4,300 m D+ · Saturday 5:00 AM',
      excerpt:
        "Struck by a virus 48 hours before the gun, Mathilde grinds out her second ultra and takes back fourteen places overall in the final twenty-seven kilometres. The mental proof of the buildup.",
      paragraphs: [
        "Eleven weeks of preparation without a hitch — no missed session, no injury, no trouble. The goal was clear: measure her ceiling on a second ultra. Then Thursday, forty-eight hours before the start, a runny nose. Friday morning, fever and legs that refuse to leave the bed. She arrives in the Vercors on Friday evening, already sick. Saturday 5 AM, bib 13 pinned on, she is on the line.",
        "The Ultra Trail du Vercors start is one you don't forget. Pitch dark, headlamps, a thermometer near zero. The climb is done by torchlight — a line of lights stretching up the hill. Then the sun rises on the peaks, and colour takes the ridges one by one.",
        "On paper, the first half is perfect. She tops Pic Saint-Michel, 1,916 metres, after 12 kilometres: 15th woman. She checks in at Autrans at halfway, 20th woman, on schedule. Inside, it's another story: the trachea burns, each breath a little shorter.",
        "It's after Autrans that the race shifts. Pacing holds, nutrition holds — not a single digestive issue in fourteen and a half hours. But the energy drains, and breathing becomes painful. All of it lands exactly on the most technical part of the course, the ridges, where four kilometres take an hour and a half. A stunning setting she doesn't look at.",
        "At Pas de Pertuson, kilometre 58, she cedes five places to the women. The real question surfaces: continue or not. She chooses to continue, accepting that this would not be the race she came for. Reach Rencurel. Then finish, whatever it takes.",
        "Between Pas de Pertuson and the finish, she doesn't lose a single place to the women and takes fourteen back overall. She has 1,450 metres of positive climbing left after Rencurel, including a 460-metre wall at 15%. She hikes them up, eating, without stopping.",
        "She crosses the line in Villard-de-Lans in 14:30:03, after 84.9 kilometres and nearly 4,900 metres of positive elevation actually measured on the GPS trace — beyond the 4,300 announced. 25th woman out of 55 finishers, 125th out of 247 ranked. The women's field median that day was 15:06. Sick, she beats it by thirty-six minutes. It was meant to be a finale; it became a training race.",
      ],
      resultsTitle: 'Results — Mathilde Baudelocq',
      results: [
        { label: 'Time', value: '14:30:03' },
        { label: 'Overall rank', value: '125th / 247' },
        { label: 'Female rank', value: '25th / 55' },
        { label: 'Category', value: '6th M0 F / 15' },
        { label: 'Bib', value: '13' },
      ],
      photosTitle: 'Photo report',
      videoTitle: 'Race video',
      videoHeading1: 'An ultra,',
      videoHeading2: 'through the fever',
      videoTagline:
        'From the pre-dawn torchlit climb to sunrise on the ridges, a glimpse of the day.',
      photoAlts: [
        'On the Vercors ridges · UTV 2026',
        'Racing · Ultra Trail du Vercors',
        'Finish at Villard-de-Lans',
      ],
    },
  },
  {
    slug: 'grv-2026',
    date: '2026-04-25',
    cover: '/Ventoux26/grv25.avif',
    coverAlt: 'Affiche officielle Grand Raid du Ventoux by UTMB 2026',
    location: 'Malaucène · Vaucluse',
    distance: '26 km',
    elevation: '1 100 m D+',
    startTime: '08:30',
    photos: [
      { src: '/Ventoux1.jpeg' },
      { src: '/Ventous2026.jpeg' },
      { src: '/VentouxPodium.jpeg' },
    ],
    videos: [
      'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto/f_auto/v1777299247/D696A555-9A4B-49A1-9954-3B65EC3ACB5B_xaeuo6.mp4',
      'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto/f_auto/v1777988768/2026_GRV_Mathilde_sml50y.mov',
    ],
    fr: {
      title: 'Grand Raid du Ventoux by UTMB — Malaucène',
      subtitle: 'Trail des Coteaux — 20K',
      meta: '26 km · 1 100 m D+ · Samedi 8 h 30',
      excerpt:
        'Top 3 % féminin et 1ʳᵉ de catégorie sur le tracé technique des contreforts du Ventoux : une percée nette qui valide la trajectoire vers le statut Élite.',
      paragraphs: [
        "Mathilde BAUDELOCQ s'est élancée samedi matin sous un soleil déjà haut, dans la tension électrique du sas de départ. Face à elle : un plateau féminin dense, un tracé exigeant entre vignes, sentiers caillouteux et passages techniques sur les contreforts du Ventoux.",
        "Dès les premiers kilomètres, Mathilde affiche la couleur. Pas de fébrilité, pas de gestion frileuse : elle prend sa place au contact du groupe de tête féminin et n'en bougera plus.",
        "À mi-course, au point culminant, elle est déjà dans le top 10 féminin. Et au lieu de subir la fin de course — comme c'est si souvent le cas sur ce format court et nerveux — elle accélère. Les derniers kilomètres sont avalés avec la même intensité que les premiers, dans un effort maîtrisé de bout en bout.",
        "Franchir la ligne en 2 h 37, c'est plus qu'un chrono : c'est la confirmation d'un niveau qui ne cesse de monter. Mathilde s'offre une 1ʳᵉ place de catégorie, signe une 9ᵉ place sur 381 femmes et termine 124ᵉ au scratch sur 1 178 coureurs. Une performance qui force le respect, portée par une lucidité tactique remarquable et un mental d'acier.",
      ],
      resultsTitle: 'Résultats — Mathilde Baudelocq',
      results: [
        { label: 'Temps', value: '2 h 37' },
        { label: 'Classement scratch', value: '124ᵉ / 1 178' },
        { label: 'Classement femmes', value: '9ᵉ / 381' },
        { label: 'Catégorie', value: '1ʳᵉ 🥇' },
        { label: 'UTMB Index course', value: '585' },
      ],
      photosTitle: 'Reportage photo',
      videoTitle: 'Vidéo de course',
      videoHeading1: 'Vivre la course,',
      videoHeading2: 'caméra embarquée',
      videoTagline:
        'Suivi vidéo à mi parcours, arrivée au point culminant pour basculer sur la 2ème partie de course en descente.',
      photoAlts: [
        'En course · GRV by UTMB',
        'En course · GRV by UTMB 2026',
        'Podium catégorie · Mathilde Baudelocq',
      ],
    },
    en: {
      title: 'Grand Raid du Ventoux by UTMB — Malaucène',
      subtitle: 'Trail des Coteaux — 20K',
      meta: '26 km · 1,100 m D+ · Saturday 8:30 AM',
      excerpt:
        'Top 3% female and 1st in category on the technical Ventoux foothills course: a clear breakthrough validating the path toward Elite status.',
      paragraphs: [
        'Mathilde BAUDELOCQ took off on Saturday morning under an already high sun, in the electric tension of the start corral. Ahead of her: a dense female field and a demanding course winding through vineyards, rocky trails and technical passages on the Ventoux foothills.',
        "From the very first kilometers, Mathilde set the tone. No nerves, no cautious pacing: she took her place with the leading women's group and never let go.",
        'By the halfway point, at the highest peak of the course, she was already in the female top 10. And instead of fading at the back end — as often happens on this short, intense format — she accelerated. The last kilometers were dispatched with the same intensity as the first, in a controlled effort from start to finish.',
        'Crossing the line in 2:37 is more than just a time: it is the confirmation of a level that keeps rising. Mathilde claims 1st place in her category, posts a 9th place out of 381 women and finishes 124th overall out of 1,178 runners. A performance that commands respect, carried by remarkable tactical clarity and a steel mindset.',
      ],
      resultsTitle: 'Results — Mathilde Baudelocq',
      results: [
        { label: 'Time', value: '2:37' },
        { label: 'Overall rank', value: '124th / 1,178' },
        { label: 'Female rank', value: '9th / 381' },
        { label: 'Category', value: '1st 🥇' },
        { label: 'UTMB Index race', value: '585' },
      ],
      photosTitle: 'Photo report',
      videoTitle: 'Race video',
      videoHeading1: 'Live the race,',
      videoHeading2: 'on-board camera',
      videoTagline:
        'Video coverage from mid-course, reaching the highest point before switching to the second half — the descent.',
      photoAlts: [
        'Racing · GRV by UTMB',
        'Racing · GRV by UTMB 2026',
        'Category podium · Mathilde Baudelocq',
      ],
    },
  },
];
