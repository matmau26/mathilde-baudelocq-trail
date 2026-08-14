// Communiqués de course — données structurées par slug, traduites FR / EN.
// Ajouter un nouveau communiqué : pousser un nouvel objet en tête de la liste
// (ordre antéchronologique).

export const COMMUNIQUES = [
  {
    slug: 'marathon-mont-blanc-2026',
    number: '02',
    date: '2026-06-28',
    // `cover` sert de bannière à la page détaillée, `thumb` de vignette sur la
    // liste — ici deux photos différentes.
    cover: '/MarathonMB-arche.jpeg',
    coverAlt:
      'Mathilde Baudelocq sous l’arche du Marathon du Mont-Blanc, dossard 442',
    thumb: '/MarathonMB-course.jpeg',
    thumbAlt: 'Mathilde Baudelocq en course au Marathon du Mont-Blanc',
    location: 'Chamonix · Haute-Savoie',
    distance: '44 km',
    elevation: '2 500 m D+',
    startTime: '07:15',
    photos: [
      { src: '/MarathonMB-course.jpeg' },
      { src: '/MMB-montagne.jpeg' },
      { src: '/MMB-finish.jpeg' },
    ],
    videos: [
      'https://res.cloudinary.com/dnh2k1blz/video/upload/copy_5E427A80-ECCC-4DF5-9DD7-C0366539F52E_vm74tz.mov',
    ],
    fr: {
      title: 'Marathon du Mont-Blanc — Chamonix',
      subtitle: '42 km du Mont-Blanc',
      meta: '44 km · 2 500 m D+ · Dimanche 7 h 15',
      excerpt:
        'Top 8 % féminin sur 606 engagées et 325ᵉ sur 2 582 partants, un jour à plus de 30 °C sur la vallée. Pointée 472ᵉ à Vallorcine, Mathilde Baudelocq franchit la ligne 325ᵉ : 147 places reprises sur la seconde moitié de course, sur l’un des tracés les plus réputés du circuit international.',
      paragraphs: [
        "Mathilde BAUDELOCQ avait ce dossard en tête depuis longtemps. Le 42 km du Mont-Blanc, ce n’est pas une course de plus sur un calendrier : c’est le format historique, celui qu’on regarde de loin en se disant qu’un jour, peut-être. Dimanche 28 juin, à 7 h 15, elle était sur la ligne, dossard 442, au cœur de la ferveur de Chamonix, face à 2 582 partants dont 606 femmes.",
        "Et une donnée qui allait tout dicter : la chaleur. Plus de 30 °C annoncés sur la vallée dans la journée. Le départ à 7 h 15 plaçait les premières heures dans le frais et, mécaniquement, la seconde moitié de course dans la montée du thermomètre. Or le tracé concentre ses passages les plus exposés exactement là : l’Aiguillette des Posettes plein cagnard vers le 18ᵉ kilomètre, puis les singles cassants du col des Montets et la piste de ski de la Flégère en toute fin de parcours.",
        "Le plan était clair, presque contre-intuitif : brider la première partie. Rouler juste, sans jamais forcer, jusqu’à Vallorcine — puis ne pas subir la seconde moitié. Mieux : y accélérer. Sur le faux plat montant qui remonte la vallée vers Argentière, elle tient sa ligne, 9,6 km en 55’40”, aucun signal d’alerte. Puis vient l’Aiguillette des Posettes, 721 mètres de dénivelé en 5,2 km sans un mètre d’ombre. Elle la monte à sa main, en laissant filer ceux qui s’y brûlent.",
        "À Vallorcine, au 23,6ᵉ kilomètre, elle pointe 472ᵉ au scratch et 57ᵉ féminine. C’est son point le plus bas au classement. C’est aussi exactement là que la course commence.",
        "À partir de Vallorcine, la chaleur n’est plus une toile de fond, c’est un adversaire. Mathilde bascule sur son plan nutrition dédié aux fortes températures : gels et solides réduits au minimum, tout passe par le liquide et les minéraux. Un choix travaillé à l’entraînement, appliqué sans hésiter le jour J, alors que les troubles gastriques restent la première cause d’abandon en trail.",
        "Le résultat est immédiat. Sur les singles qui mènent au col des Montets, puis dans la longue remontée du balcon, elle ne perd plus une seconde : elle en gagne. 397ᵉ au Bois Plagnolet, 374ᵉ à la Flégère, 350ᵉ à Charlanon. La montée de la Flégère est pourtant la signature cruelle de cette course — une piste de ski entièrement à découvert, 496 mètres de dénivelé en 3,8 km, quand les jambes ont déjà quatre heures et demie de montagne dans les fibres. Elle la déroule sans céder de terrain.",
        "Reste la descente finale sur Chamonix, 6,1 km sur ce qu’il reste de quadriceps. Elle passe la ligne place du Triangle de l’Amitié en 6 h 21’09” : 50ᵉ femme sur 606 engagées, 325ᵉ au scratch sur 2 582 partants. Soit le top 8 % féminin sur l’un des plateaux les plus denses du trail international, un jour de canicule.",
        "Mais le vrai marqueur est ailleurs, dans la courbe : 147 places reprises au scratch entre Vallorcine et l’arrivée, sept au féminin. Aucun coup de chaud, aucune improvisation, aucun mètre concédé sur la seconde moitié. Le plan de course a été exécuté à la lettre, du premier kilomètre au dernier. Ce n’est pas un jour de grâce : c’est une progression qui se construit séance après séance, et qui se lit désormais dans les classements.",
      ],
      resultsTitle: 'Résultats — Mathilde Baudelocq',
      results: [
        { label: 'Temps', value: '6:21:09' },
        { label: 'Classement scratch', value: '325ᵉ / 2 582' },
        { label: 'Classement femmes', value: '50ᵉ / 606' },
      ],
      quote: {
        label: 'Le mot de Mathilde',
        paragraphs: [
          'Depuis le temps que je rêvais d’une course chamoniarde… Courir dans ce décor, dans cette ferveur, face au Mont-Blanc : quel spectacle.',
          'Un chrono d’un peu plus de 6 h un peu décevant, mais face à la chaleur écrasante et à un choc émotionnel à 48 h du départ, la priorité était de se préserver et d’assurer. Au final, une belle 50ᵉ place féminine au milieu de ce plateau de folie : je n’en espérais pas tant.',
          'Merci au Marathon du Mont-Blanc. Et j’espère de tout cœur à l’année prochaine.',
        ],
        attribution: 'Mathilde Baudelocq',
      },
      splitsTitle: 'La course en chiffres',
      splitsHeading1: 'Le déroulé',
      splitsHeading2: 'du négatif split.',
      splitsHeaders: {
        point: 'Point de passage',
        km: 'km',
        time: 'Temps',
        scratch: 'Scratch',
        women: 'Femmes',
        elevation: 'D+ cumulé',
      },
      splits: [
        { point: 'Place du Triangle de l’Amitié (départ)', km: '0', time: '0:00:00', scratch: '—', women: '—', elevation: '0 m' },
        { point: 'Argentière', km: '9,6', time: '0:55:40', scratch: '467ᵉ', women: '53ᵉ', elevation: '375 m' },
        { point: 'Le Tour', km: '13,7', time: '1:26:01', scratch: '455ᵉ', delta: '+12', women: '52ᵉ', elevation: '652 m' },
        { point: 'Aiguillette des Posettes', km: '18,9', time: '2:37:30', scratch: '460ᵉ', delta: '−5', women: '54ᵉ', elevation: '1 373 m' },
        { point: 'Vallorcine', km: '23,6', time: '3:07:58', scratch: '472ᵉ', delta: '−12', women: '57ᵉ', elevation: '1 373 m' },
        { point: 'Bois Plagnolet', km: '31,8', time: '4:30:39', scratch: '397ᵉ', delta: '+75', women: '51ᵉ', elevation: '1 908 m' },
        { point: 'La Flégère (ravito)', km: '35,6', time: '5:20:01', scratch: '374ᵉ', delta: '+23', women: '51ᵉ', elevation: '2 404 m' },
        { point: 'Charlanon', km: '38,2', time: '5:41:25', scratch: '350ᵉ', delta: '+24', women: '50ᵉ', elevation: '2 454 m' },
        { point: 'Arrivée · Place du Triangle de l’Amitié', km: '44,3', time: '6:21:09', scratch: '325ᵉ', delta: '+25', women: '50ᵉ', elevation: '2 512 m' },
      ],
      splitsFootnote:
        'Distances et dénivelés cumulés relevés par le suivi officiel du chronométrage · Données de parcours annoncées par l’organisation : 44 km · 2 500 m D+',
      photosTitle: 'Reportage photo',
      videoTitle: 'Vidéo de course',
      videoHeading1: 'La seconde moitié,',
      videoHeading2: 'jusqu’à Chamonix.',
      videoTagline:
        'Deux séquences après Vallorcine, dans la remontée du balcon — puis l’entrée dans Chamonix, à quelques centaines de mètres de la ligne.',
      photoAlts: [
        'En course · face au massif du Mont-Blanc',
        'Le balcon · la vallée de Chamonix',
        'Arrivée · place du Triangle de l’Amitié',
      ],
    },
    en: {
      title: 'Mont-Blanc Marathon — Chamonix',
      subtitle: '42 km du Mont-Blanc',
      meta: '44 km · 2,500 m D+ · Sunday 7:15 AM',
      excerpt:
        'Top 8% female out of 606 entrants and 325th of 2,582 starters, on a day above 30 °C in the valley. Lying 472nd at Vallorcine, Mathilde Baudelocq crossed the line 325th: 147 places regained over the second half of the race, on one of the most storied courses of the international circuit.',
      paragraphs: [
        'Mathilde BAUDELOCQ had had this bib in mind for a long time. The 42 km du Mont-Blanc is not just another race on a calendar: it is the historic format, the one you look at from afar thinking that one day, maybe. On Sunday 28 June, at 7:15 AM, she was on the line, bib 442, in the thick of Chamonix’s fervour, among 2,582 starters including 606 women.',
        'And one factor was going to dictate everything: the heat. Over 30 °C forecast in the valley during the day. A 7:15 AM start placed the early hours in the cool and, mechanically, the second half of the race in the rising temperature. Yet the course concentrates its most exposed sections exactly there: the Aiguillette des Posettes in full sun around kilometre 18, then the broken singletrack of the Col des Montets and the Flégère ski slope in the closing stages.',
        'The plan was clear, almost counter-intuitive: rein in the first half. Run within herself, never forcing, all the way to Vallorcine — then refuse to fade in the second half. Better still: accelerate. On the false flat climbing the valley toward Argentière she held her line, 9.6 km in 55’40”, no warning signs. Then came the Aiguillette des Posettes, 721 metres of climbing in 5.2 km without a metre of shade. She took it at her own pace, letting those who burned themselves on it go.',
        'At Vallorcine, kilometre 23.6, she sat 472nd overall and 57th woman. That was her lowest point in the standings. It was also exactly where her race began.',
        'From Vallorcine on, the heat was no longer a backdrop but an opponent. Mathilde switched to her hot-weather nutrition plan: gels and solids cut to a minimum, everything through fluids and minerals. A choice rehearsed in training and applied without hesitation on the day, at a time when stomach trouble remains the leading cause of withdrawal in trail running.',
        'The effect was immediate. On the singletrack leading to the Col des Montets, then on the long climb back onto the balcony trail, she stopped losing seconds and started taking them. 397th at Bois Plagnolet, 374th at La Flégère, 350th at Charlanon. Yet the Flégère climb is this race’s cruel signature — a fully exposed ski slope, 496 metres of climbing in 3.8 km, with four and a half hours of mountain already in the legs. She held it without conceding ground.',
        'That left the final descent into Chamonix, 6.1 km on whatever the quadriceps had left. She crossed the line on Place du Triangle de l’Amitié in 6:21’09”: 50th woman of 606 entrants, 325th overall of 2,582 starters. Top 8% female on one of the deepest fields in international trail running, on a scorching day.',
        'But the real marker lies elsewhere, in the curve: 147 places regained overall between Vallorcine and the finish, seven among the women. No blow-up, no improvisation, not a metre conceded over the second half. The race plan was executed to the letter, from the first kilometre to the last. This is not a day of grace: it is a progression built session after session, and it now reads in the standings.',
      ],
      resultsTitle: 'Results — Mathilde Baudelocq',
      results: [
        { label: 'Time', value: '6:21:09' },
        { label: 'Overall rank', value: '325th / 2,582' },
        { label: 'Female rank', value: '50th / 606' },
      ],
      quote: {
        label: 'In Mathilde’s words',
        paragraphs: [
          'After dreaming of a Chamonix race for so long… Running in that setting, in that fervour, facing Mont-Blanc: what a spectacle.',
          'A time a little over 6 hours is somewhat disappointing, but with the crushing heat and an emotional blow 48 hours before the start, the priority was to protect myself and get it done. In the end, a fine 50th place among the women in that incredible field: I did not dare hope for that much.',
          'Thank you to the Mont-Blanc Marathon. And I truly hope to be back next year.',
        ],
        attribution: 'Mathilde Baudelocq',
      },
      splitsTitle: 'The race in numbers',
      splitsHeading1: 'How the negative',
      splitsHeading2: 'split unfolded.',
      splitsHeaders: {
        point: 'Checkpoint',
        km: 'km',
        time: 'Time',
        scratch: 'Overall',
        women: 'Women',
        elevation: 'Cumul. D+',
      },
      splits: [
        { point: 'Place du Triangle de l’Amitié (start)', km: '0', time: '0:00:00', scratch: '—', women: '—', elevation: '0 m' },
        { point: 'Argentière', km: '9.6', time: '0:55:40', scratch: '467th', women: '53rd', elevation: '375 m' },
        { point: 'Le Tour', km: '13.7', time: '1:26:01', scratch: '455th', delta: '+12', women: '52nd', elevation: '652 m' },
        { point: 'Aiguillette des Posettes', km: '18.9', time: '2:37:30', scratch: '460th', delta: '−5', women: '54th', elevation: '1,373 m' },
        { point: 'Vallorcine', km: '23.6', time: '3:07:58', scratch: '472nd', delta: '−12', women: '57th', elevation: '1,373 m' },
        { point: 'Bois Plagnolet', km: '31.8', time: '4:30:39', scratch: '397th', delta: '+75', women: '51st', elevation: '1,908 m' },
        { point: 'La Flégère (aid station)', km: '35.6', time: '5:20:01', scratch: '374th', delta: '+23', women: '51st', elevation: '2,404 m' },
        { point: 'Charlanon', km: '38.2', time: '5:41:25', scratch: '350th', delta: '+24', women: '50th', elevation: '2,454 m' },
        { point: 'Finish · Place du Triangle de l’Amitié', km: '44.3', time: '6:21:09', scratch: '325th', delta: '+25', women: '50th', elevation: '2,512 m' },
      ],
      splitsFootnote:
        'Distances and cumulative elevation recorded by the official timing system · Course data announced by the organisers: 44 km · 2,500 m D+',
      photosTitle: 'Photo report',
      videoTitle: 'Race video',
      videoHeading1: 'The second half,',
      videoHeading2: 'all the way to Chamonix.',
      videoTagline:
        'Two sequences past Vallorcine, on the climb back onto the balcony trail — then the entry into Chamonix, a few hundred metres from the line.',
      photoAlts: [
        'Racing · facing the Mont-Blanc massif',
        'The balcony trail · the Chamonix valley',
        'Finish · Place du Triangle de l’Amitié',
      ],
    },
  },
  {
    slug: 'grv-2026',
    number: '01',
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
