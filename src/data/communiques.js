// Communiqués de course — données structurées par slug, traduites FR / EN.
// Ajouter un nouveau communiqué : pousser un nouvel objet en tête de la liste
// (ordre antéchronologique).

export const COMMUNIQUES = [
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
      { src: '/Ventoux1.jpeg', alt: 'En course · GRV by UTMB' },
      { src: '/Ventous2026.jpeg', alt: 'En course · GRV by UTMB 2026' },
      {
        src: '/VentouxPodium.jpeg',
        alt: 'Podium catégorie · Mathilde Baudelocq',
      },
    ],
    video:
      'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto/f_auto/v1777299247/D696A555-9A4B-49A1-9954-3B65EC3ACB5B_xaeuo6.mp4',
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
      videoHeading2: 'caméra embarquée à mi parcours',
      videoTagline:
        'Suivi vidéo à mi parcours, arrivée au point culminant pour basculer sur la 2ème partie de course en descente.',
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
      videoHeading2: 'on-board camera at mid-course',
      videoTagline:
        'Video coverage from mid-course, reaching the highest point before switching to the second half — the descent.',
    },
  },
];
