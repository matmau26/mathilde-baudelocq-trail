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
        {
          heading: 'Zéro degré et une montée au flambeau',
          body: "Le départ de l'Ultra Trail du Vercors est de ceux qu'on n'oublie pas. Nuit noire, frontales, un thermomètre proche de zéro. La montée se fait au flambeau, une file de lumières qui s'étire sur la colline. Puis le jour se lève sur les sommets, et les couleurs prennent les crêtes une à une.",
        },
        {
          heading: "Les premières heures : tout est en ordre, sauf à l'intérieur",
          body: "Sur le papier, la première partie est parfaite. Elle bascule au Pic Saint-Michel, 1 916 mètres, au bout de 12 kilomètres : 15ᵉ féminine. Elle pointe à Autrans à la mi-course, 20ᵉ féminine, dans les temps prévus. De l'intérieur, c'est autre chose : la trachée chauffe, chaque respiration se fait plus courte.",
        },
        {
          heading: 'Autrans : le moment où tout déraille',
          body: "C'est après Autrans que la course bascule. Le pacing tient, la nutrition tient — pas un seul trouble digestif sur quatorze heures et demie. Mais l'énergie s'en va, et respirer devient douloureux. Le tout tombe pile sur la portion la plus technique du parcours, les crêtes, où quatre kilomètres prennent une heure et demie. Un décor magnifique qu'elle ne regarde pas.",
        },
        {
          heading: 'La question du 58ᵉ kilomètre',
          body: "Au Pas de Pertuson, kilomètre 58, elle cède cinq places au féminin. La vraie question se pose : continuer ou pas. Elle choisit de continuer, en acceptant que ce ne sera pas la course qu'elle est venue chercher. Rallier Rencurel. Puis finir, coûte que coûte.",
        },
        {
          heading: 'Ce que dit le chrono',
          body: "Entre le Pas de Pertuson et l'arrivée, elle ne perd plus une seule place au féminin et en reprend quatorze au scratch. Il lui reste 1 450 mètres de dénivelé positif après Rencurel, dont un mur de 460 mètres à 15 %. Elle les monte en marchant, en mangeant, sans s'arrêter.",
        },
        "Elle franchit la ligne à Villard-de-Lans en 14 h 30'03\", après 84,9 kilomètres et près de 4 900 mètres de dénivelé positif réellement mesurés sur la trace — au-delà des 4 300 annoncés. 25ᵉ femme sur 55 arrivées, 125ᵉ sur 247 classés. La médiane du plateau féminin, ce jour-là, était à 15 h 06. Malade, elle la bat de trente-six minutes.",
        "Ce devait être une finalité. C'est devenu une course de préparation — celle qui muscle le mental et apprend l'acceptation. Et un deuxième ultra bouclé, sur un format que très peu de coureurs mènent au bout, un jour où rien n'était réuni pour y arriver.",
      ],
      quote: {
        label: 'Le mot de Mathilde',
        paragraphs: [
          "J'avais fait la meilleure préparation de ma vie, et je tombe malade quarante-huit heures avant le départ. Je suis arrivée dans le Vercors le vendredi soir déjà malade, avec de la fièvre le matin même. Sur la ligne à 5 heures, je n'avais aucune idée de ce qui allait se passer, ni même si j'irais au bout.",
          "Le départ au flambeau et le lever de soleil sur les crêtes, ça je le garde. Mais après Autrans, respirer est devenu une douleur, et j'ai eu envie d'arrêter. J'ai fini par accepter que ce ne serait pas la course que j'étais venue chercher — et que ça ne l'annulait pas pour autant.",
          "« Il n'y a pas de D+ sans D− », dit Clem qui court. Cette fois, tout n'était pas réuni — et avec le dossard 13, disons qu'il ne m'aura pas beaucoup aidée. Alors j'ai pris ce que la journée avait à donner : de l'expérience, et la preuve que je peux aller au bout de 84 kilomètres même quand tout est contre moi.",
          "Merci à l'Ultra Trail du Vercors et aux bénévoles pour cette belle organisation, et à ceux qui étaient sur le bord.",
        ],
        attribution: 'Mathilde Baudelocq',
      },
      resultsTitle: 'Résultats — Mathilde Baudelocq',
      results: [
        { label: 'Temps', value: "14 h 30'03\"" },
        { label: 'Classement scratch', value: '125ᵉ / 247', sub: '340 partants' },
        { label: 'Classement femmes', value: '25ᵉ / 55', sub: '73 partantes' },
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
        {
          heading: 'Freezing dark and a torchlit climb',
          body: "The Ultra Trail du Vercors start is one you don't forget. Pitch dark, headlamps, a thermometer near zero. The climb is done by torchlight — a line of lights stretching up the hill. Then the sun rises on the peaks, and colour takes the ridges one by one.",
        },
        {
          heading: 'The first hours: order outside, chaos inside',
          body: "On paper, the first half is perfect. She tops Pic Saint-Michel, 1,916 metres, after 12 kilometres: 15th woman. She checks in at Autrans at halfway, 20th woman, on schedule. Inside, it's another story: the trachea burns, each breath a little shorter.",
        },
        {
          heading: 'Autrans: the moment it all shifts',
          body: "It's after Autrans that the race shifts. Pacing holds, nutrition holds — not a single digestive issue in fourteen and a half hours. But the energy drains, and breathing becomes painful. All of it lands exactly on the most technical part of the course, the ridges, where four kilometres take an hour and a half. A stunning setting she doesn't look at.",
        },
        {
          heading: 'The question at kilometre 58',
          body: "At Pas de Pertuson, kilometre 58, she cedes five places to the women. The real question surfaces: continue or not. She chooses to continue, accepting that this would not be the race she came for. Reach Rencurel. Then finish, whatever it takes.",
        },
        {
          heading: 'What the clock says',
          body: "Between Pas de Pertuson and the finish, she doesn't lose a single place to the women and takes fourteen back overall. She has 1,450 metres of positive climbing left after Rencurel, including a 460-metre wall at 15%. She hikes them up, eating, without stopping.",
        },
        "She crosses the line in Villard-de-Lans in 14:30:03, after 84.9 kilometres and nearly 4,900 metres of positive elevation actually measured on the GPS trace — beyond the 4,300 announced. 25th woman out of 55 finishers, 125th out of 247 ranked. The women's field median that day was 15:06. Sick, she beats it by thirty-six minutes.",
        "It was meant to be a finale. It became a training race — the kind that builds mental strength and teaches acceptance. And a second ultra brought to the finish line, on a format very few runners see through, on a day when nothing was there to help.",
      ],
      quote: {
        label: 'A word from Mathilde',
        paragraphs: [
          "I had done the best preparation of my life, and I fell sick forty-eight hours before the start. I arrived in the Vercors on Friday evening already sick, with fever that same morning. On the line at 5 AM, I had no idea what was going to happen, not even whether I'd make it to the finish.",
          "The torchlit start and sunrise on the ridges — that I get to keep. But after Autrans, breathing became painful, and I wanted to stop. I ended up accepting that this wouldn't be the race I had come for — and that it didn't cancel it out either.",
          "\"There's no ascent without descent,\" says Clem qui court. This time, not everything was there — and with bib 13, let's say it didn't help me much. So I took what the day had to give: experience, and the proof that I can go 84 kilometres to the finish even when everything is against me.",
          "Thank you to the Ultra Trail du Vercors and the volunteers for a beautiful event, and to those on the sides.",
        ],
        attribution: 'Mathilde Baudelocq',
      },
      resultsTitle: 'Results — Mathilde Baudelocq',
      results: [
        { label: 'Time', value: '14:30:03' },
        { label: 'Overall rank', value: '125th / 247', sub: '340 starters' },
        { label: 'Female rank', value: '25th / 55', sub: '73 female starters' },
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
    slug: 'marathon-mont-blanc-2026',
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
        "Et une donnée qui allait tout dicter : la chaleur. Plus de 30 °C annoncés sur la vallée dans la journée. Le départ à 7 h 15 plaçait les premières heures dans le frais et, mécaniquement, la seconde moitié de course dans la montée du thermomètre.",
        "Or le tracé concentre ses passages les plus exposés exactement là : l’Aiguillette des Posettes en plein soleil vers le 18ᵉ kilomètre, puis les singles cassants du col des Montets et la piste de ski de la Flégère en toute fin de parcours.",
        "Le plan était clair, presque contre-intuitif : brider la première partie. Rouler juste, sans jamais forcer, jusqu’à Vallorcine — puis ne pas subir la seconde moitié. Mieux : y accélérer.",
        "Sur le faux plat montant qui remonte la vallée vers Argentière, elle tient sa ligne, 9,6 km en 55’40”, aucun signal d’alerte. Puis vient l’Aiguillette des Posettes, 721 mètres de dénivelé en 5,2 km sans un mètre d’ombre. Elle la monte à sa main, en laissant filer ceux qui s’y brûlent.",
        "À Vallorcine, au 23,6ᵉ kilomètre, elle pointe 472ᵉ au scratch et 57ᵉ féminine. C’est son point le plus bas au classement. C’est aussi exactement là que la course commence.",
        "À partir de Vallorcine, la chaleur n’est plus une toile de fond, c’est un adversaire. Mathilde bascule sur son plan nutrition dédié aux fortes températures : gels et solides réduits au minimum, tout passe par le liquide et les minéraux. Un choix travaillé à l’entraînement, appliqué sans hésiter le jour J, alors que les troubles gastriques restent la première cause d’abandon en trail.",
        "Le résultat est immédiat. Sur les singles qui mènent au col des Montets, puis dans la longue remontée du balcon, elle ne perd plus une seconde : elle en gagne. 397ᵉ au Bois Plagnolet, 374ᵉ à la Flégère, 350ᵉ à Charlanon.",
        "La montée de la Flégère est pourtant la signature cruelle de cette course — une piste de ski entièrement à découvert, 496 mètres de dénivelé en 3,8 km, quand les jambes ont déjà quatre heures et demie de montagne dans les fibres. Elle la déroule sans céder de terrain.",
        "Reste la descente finale sur Chamonix, 6,1 km sur ce qu’il reste de quadriceps. Elle passe la ligne place du Triangle de l’Amitié en 6 h 21’09” : 49ᵉ femme sur 606 engagées, 325ᵉ au scratch sur 2 582 partants. Soit le top 8 % féminin sur l’un des plateaux les plus denses du trail international, un jour de canicule.",
        "Mais le vrai marqueur est ailleurs, dans la courbe : 147 places reprises au scratch entre Vallorcine et l’arrivée, huit au féminin. Aucun coup de chaud, aucune improvisation, aucun mètre concédé sur la seconde moitié. Le plan de course a été exécuté à la lettre, du premier kilomètre au dernier. Ce n’est pas un jour de grâce : c’est une progression qui se construit séance après séance, et qui se lit désormais dans les classements.",
      ],
      resultsTitle: 'Résultats — Mathilde Baudelocq',
      results: [
        { label: 'Temps', value: '6:21:09' },
        { label: 'Classement scratch', value: '325ᵉ / 2 582' },
        { label: 'Classement femmes', value: '49ᵉ / 606' },
      ],
      quote: {
        label: 'Le mot de Mathilde',
        paragraphs: [
          'Depuis le temps que je rêvais d’une course chamoniarde… Courir dans ce décor, dans cette ferveur, face au Mont-Blanc : quel spectacle.',
          'Un chrono d’un peu plus de 6 h un peu décevant, mais face à la chaleur écrasante et à un choc émotionnel à 48 h du départ, la priorité était de se préserver et d’assurer. Au final, une belle 49ᵉ place féminine au milieu de ce plateau de folie : je n’en espérais pas tant.',
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
        { point: 'Arrivée · Place du Triangle de l’Amitié', km: '44,3', time: '6:21:09', scratch: '325ᵉ', delta: '+25', women: '49ᵉ', elevation: '2 512 m' },
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
        'And one factor was going to dictate everything: the heat. Over 30 °C forecast in the valley during the day. A 7:15 AM start placed the early hours in the cool and, mechanically, the second half of the race in the rising temperature.',
        'Yet the course concentrates its most exposed sections exactly there: the Aiguillette des Posettes in full sun around kilometre 18, then the broken singletrack of the Col des Montets and the Flégère ski slope in the closing stages.',
        'The plan was clear, almost counter-intuitive: rein in the first half. Run within herself, never forcing, all the way to Vallorcine — then refuse to fade in the second half. Better still: accelerate.',
        'On the false flat climbing the valley toward Argentière she held her line, 9.6 km in 55’40”, no warning signs. Then came the Aiguillette des Posettes, 721 metres of climbing in 5.2 km without a metre of shade. She took it at her own pace, letting those who burned themselves on it go.',
        'At Vallorcine, kilometre 23.6, she sat 472nd overall and 57th woman. That was her lowest point in the standings. It was also exactly where her race began.',
        'From Vallorcine on, the heat was no longer a backdrop but an opponent. Mathilde switched to her hot-weather nutrition plan: gels and solids cut to a minimum, everything through fluids and minerals. A choice rehearsed in training and applied without hesitation on the day, at a time when stomach trouble remains the leading cause of withdrawal in trail running.',
        'The effect was immediate. On the singletrack leading to the Col des Montets, then on the long climb back onto the balcony trail, she stopped losing seconds and started taking them. 397th at Bois Plagnolet, 374th at La Flégère, 350th at Charlanon.',
        'Yet the Flégère climb is this race’s cruel signature — a fully exposed ski slope, 496 metres of climbing in 3.8 km, with four and a half hours of mountain already in the legs. She held it without conceding ground.',
        'That left the final descent into Chamonix, 6.1 km on whatever the quadriceps had left. She crossed the line on Place du Triangle de l’Amitié in 6:21’09”: 49th woman of 606 entrants, 325th overall of 2,582 starters. Top 8% female on one of the deepest fields in international trail running, on a scorching day.',
        'But the real marker lies elsewhere, in the curve: 147 places regained overall between Vallorcine and the finish, eight among the women. No blow-up, no improvisation, not a metre conceded over the second half. The race plan was executed to the letter, from the first kilometre to the last. This is not a day of grace: it is a progression built session after session, and it now reads in the standings.',
      ],
      resultsTitle: 'Results — Mathilde Baudelocq',
      results: [
        { label: 'Time', value: '6:21:09' },
        { label: 'Overall rank', value: '325th / 2,582' },
        { label: 'Female rank', value: '49th / 606' },
      ],
      quote: {
        label: 'In Mathilde’s words',
        paragraphs: [
          'After dreaming of a Chamonix race for so long… Running in that setting, in that fervour, facing Mont-Blanc: what a spectacle.',
          'A time a little over 6 hours is somewhat disappointing, but with the crushing heat and an emotional blow 48 hours before the start, the priority was to protect myself and get it done. In the end, a fine 49th place among the women in that incredible field: I did not dare hope for that much.',
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
        { point: 'Finish · Place du Triangle de l’Amitié', km: '44.3', time: '6:21:09', scratch: '325th', delta: '+25', women: '49th', elevation: '2,512 m' },
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
