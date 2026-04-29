// Toutes les chaînes du site, structurées par section. Ajouter une nouvelle
// langue revient à dupliquer un sous-objet.

export const translations = {
  fr: {
    common: {
      langFr: 'FR',
      langEn: 'EN',
      switchLabel: 'Changer la langue',
    },

    header: {
      logoSubtitle: 'M. Baudelocq',
      nav: [
        { href: '#athlete', label: 'Athlète' },
        { href: '#palmares', label: 'TopPerf' },
        { href: '#medias', label: 'Médias' },
        { href: '#resultats', label: 'Résultats' },
        { href: '#calendrier', label: 'Objectifs' },
        { href: '#partenariat', label: 'Partenariat' },
        { href: '/communiques', label: 'Communiqués', external: true },
      ],
      cta: 'Prendre contact',
      menuOpen: 'Ouvrir le menu',
    },

    hero: {
      eyebrow: 'Media Kit · Saison 2026',
      titleFirst: 'Mathilde',
      titleLast: 'Baudelocq',
      subtitleSport: 'Athlète Trail Running',
      subtitleProject: 'Trajectoire Élite',
      ctaPrimary: 'Proposition de collaboration',
      ctaSecondary: 'Voir les performances',
      tagCity: '26 — Montélimar',
      tagProject: 'Projet 2026 · Statut Élite',
      snapshot: 'Snapshot',
      snapshotPeriod: '2025–26',
      grvBadge: 'Top 3%',
      photoAlt: 'Mathilde Baudelocq, athlète trail running, en course',
    },

    athlete: {
      eyebrow: '01 — Athlète',
      kicker:
        "Profil, faits clés et indicateurs de performance — la trajectoire Élite condensée en un seul coup d’œil.",
      photoAlt: 'Mathilde Baudelocq, portrait civil',
      overlayLine1: "L'athlète,",
      overlayLine2: 'en bref.',
      captionPortrait: 'Portrait',
      captionName: 'Mathilde Baudelocq',
      captionRegion: 'Drôme',
      description: {
        intro: 'Exigence compétitive et ancrage territorial. En pleine ascension vers le niveau Élite, sa progression s’appuie sur une éthique de travail stricte :',
        valueSimplicite: 'simplicité',
        valueIntegrite: 'intégrité',
        valueAnd: 'et',
        valueLoyaute: 'loyauté',
        outro: ". Professionnelle de l’éducation basée dans la Drôme, elle incarne factuellement le cœur de cible outdoor. Un profil structuré pour la performance, calibré pour représenter un équipementier local et s’investir dans sa R&D technique.",
      },
      values: ['Simplicité', 'Intégrité', 'Loyauté'],
      facts: [
        { label: 'Âge', value: '34 ans' },
        { label: 'Ville', value: 'Montélimar (26)' },
        { label: 'Expérience', value: '5 ans de pratique du trail' },
        { label: 'Niveau', value: 'De local à Top féminine' },
      ],
      factTag: 'Fact',
      dashboardLabel: 'Performance Dashboard',
      season: 'Saison 2025–26',
      liveData: 'Live Data',
      sectionTitle1: 'Trajectoire',
      sectionTitle2: 'Élite.',
      kpis: [
        {
          eyebrow: 'Performance de référence',
          metric: 'TOP',
          value: '3',
          suffix: '%',
          context: '26 km · Grand Raid du Ventoux 2026',
          tag: '9ᵉ femme · 124ᵉ scratch',
        },
        {
          eyebrow: 'Cote ITRA',
          metric: '',
          value: '565',
          suffix: 'pts',
          context: 'International Trail Running Association',
          tag: 'Indice global de performance',
        },
        {
          eyebrow: 'UTMB Index',
          metric: '',
          value: '568',
          suffix: 'pts',
          context: 'UTMB World Series · Trail',
          tag: 'Indice de référence trail',
        },
      ],
      ticker: [
        { label: 'Discipline', value: 'Trail Running' },
        { label: 'Distance phare', value: '20–80 km' },
        { label: 'Niveau actuel', value: 'National' },
        { label: 'Objectif 2026', value: 'Statut Élite' },
      ],
    },

    palmares: {
      eyebrow: '02 — Palmarès récent',
      title1: 'Référence',
      title2: 'Saison 2026.',
      kicker:
        "Une performance phare cristallise la trajectoire : une percée au contact du peloton Élite sur l’un des trails les plus relevés du Sud-Est.",
      highlightPill: 'Highlight',
      seasonPill: 'Saison 2026',
      datePill: '25 / 04 / 2026',
      raceTitle1: 'Grand Raid',
      raceTitle2: 'du Ventoux',
      raceSub: '26 km · 1 100 m+ · Massif du Ventoux',
      bigStat: '9ᵉ femme / 381',
      bigStatExplain:
        " — soit le Top 3 % féminin, et une Victoire de catégorie. Une référence qui valide la trajectoire vers le statut Élite.",
      stats: [
        { label: 'Rang Femmes', value: '9 / 381' },
        { label: 'Temps', value: '02:37:09' },
        { label: 'Scratch', value: '124 / 1178' },
      ],
      photoAlt: 'Mathilde Baudelocq en course au Grand Raid du Ventoux 2026',
      photoEyebrow: 'En course · GRV 2026',
      photoCaption: 'Massif du Ventoux',
      progressionLabel: 'Progression · 6 ans',
      progressionTitle1: 'Progression constante',
      progressionTitle2: 'vers le statut Élite.',
      progressionAriaLabel: 'Courbe de progression sur 6 ans, ascendante',
      progressionStart: 'Départ : Régional',
      progressionEnd: 'Aujourd’hui : Top Féminine',
      progressionYears: ['2021', '2022', '2023', '2024', '2025', '2026'],
      podiumAlt: 'Mathilde Baudelocq sur le podium du Grand Raid du Ventoux 2026',
      podiumPill: 'Podium catégorie',
      podiumEyebrow: 'Cérémonie · GRV 2026',
      podiumCaption: 'Top 3 % Féminin',
    },

    gallery: {
      eyebrow: '03 — Médias',
      title1: 'Sur le',
      title2: 'terrain.',
      kicker:
        'Bibliothèque vivante — photos et vidéos de course, sorties et entraînements. Visuels haute définition libres de droits sur demande.',
      countPhotos: 'Photos',
      countVideos: 'Vidéos',
      hdTag: 'HD · Sur demande',
      footnote:
        'Crédits photographes mentionnés sur demande · Vidéos hébergées via Cloudinary',
      playLabel: 'Lire la vidéo',
    },

    races: {
      eyebrow: '04 — Résultats détaillés',
      title1: 'Historique',
      title2: 'des courses.',
      kicker:
        'Données de course brutes — temps officiels, classement femmes et scratch général. Le rang femmes est l’indicateur de référence.',
      headers: {
        date: 'Date',
        race: 'Course',
        distance: 'Distance / D+',
        time: 'Temps',
        women: 'Rang Femmes',
        general: 'Rang Général',
      },
      mobileLabels: {
        time: 'Temps',
        women: 'Rang F',
        general: 'Rang G',
      },
      footnote:
        'Source : résultats officiels des organisateurs · Mise à jour saison 2025–26',
      badges: {
        Podium: 'Podium',
        'Top perf': 'Top perf',
        Ultra: 'Ultra',
      },
      highlightBadge: 'Performance de Référence · Top 3% Féminin',
    },

    calendar: {
      eyebrow: '05 — Objectifs 2026',
      title1: 'Cibles de',
      title2: 'Performance Majeures.',
      kicker:
        'Deux courses structurent la saison. Préparation ciblée, pic de forme aligné, validation du passage au statut Élite.',
      objectiveALabel: 'Objectif A',
      objectiveBLabel: 'Objectif B',
      formatLabel: 'Format court · Vitesse',
      objectives: [
        {
          code: 'A.01',
          title: 'Marathon du Mont-Blanc',
          distance: '42 km',
          location: 'Chamonix · Haute-Savoie',
          period: '28 juin 2026',
          note: 'Vitrine internationale · format marathon montagne',
        },
        {
          code: 'A.02',
          title: 'UltraTrail du Vercors',
          distance: '84 km',
          location: 'Massif du Vercors · Drôme / Isère',
          period: '12 septembre 2026',
          note: '2ᵉ ultra · terrain de jeu local',
        },
      ],
      objectiveLieu: 'Lieu',
      objectivePeriode: 'Période',
      secondary: {
        code: 'B.01',
        category: 'Objectif Visibilité & Vitesse',
        title: 'La SainteSprint',
        distance: '25 km',
        location: 'Lyon · Rhône',
        period: '28 novembre 2026',
        badge: 'Événement de clôture de saison',
        context:
          '5ᵉ participation consécutive à l’événement — progression constante du classement féminin sur les formats courts à longs.',
      },
      secondaryLabels: {
        period: 'Période',
        location: 'Lieu',
        recurrence: 'Récurrence',
        recurrenceValue: '5ᵉ participation',
      },
    },

    partnership: {
      eyebrow: '06 — Partenariat',
      title1: 'Vision de',
      title2: 'collaboration.',
      kickerIntro: 'Une collaboration articulée autour de la',
      kickerMutual: 'performance mutuelle',
      kickerComma: ', de l’',
      kickerLocal: 'ancrage territorial',
      kickerAnd: 'et de l’',
      kickerBrand: 'intégration au projet de marque',
      kickerEnd: '.',
      photoPill: 'GR Ventoux',
      photoEyebrow: 'En course · 2025',
      photoCaption: 'Trail technique',
      photoAlt: 'Mathilde Baudelocq en course au Grand Raid du Ventoux',
      pillars: [
        {
          code: '01',
          subtitle: 'R&D',
          title: 'Performance & Co-développement',
          body:
            "Une synergie technique : faire progresser l'athlète vers le statut Élite tout en éprouvant les technologies de pointe. Mise à l'épreuve des prototypes de pointe sur une grande diversité de terrains techniques.",
          tags: ['Valorisation R&D', 'Tests prototypes', 'Feedback analytique'],
        },
        {
          code: '02',
          subtitle: 'Image de marque',
          title: 'Rayonnement & Ambition Élite',
          body:
            "Incarner l'image de la marque sur le circuit national et international. Une présence authentique et performante sur les événements phares (Mont-Blanc, Vercors, SaintéLyon).",
          tags: ['Représentation', 'Visibilité événementielle', 'Valeurs sportives'],
        },
        {
          code: '03',
          subtitle: 'Partenariat stratégique',
          title: 'Engagement & Projet commun',
          body:
            "Dépasser la logique transactionnelle du sponsoring. S'engager dans une collaboration pérenne fondée sur l'intégrité, la loyauté et une éthique de travail stricte. L'objectif est de s'assimiler à l'ADN de la marque pour soutenir un développement mutuel sur le long terme.",
          tags: ['Vision long terme', 'ADN de marque', 'Valeurs communes'],
        },
      ],
      footerEyebrow: 'Modalités',
      footerTitle: 'Deux leviers de collaboration envisageables',
      levers: [
        {
          code: 'Levier A',
          title: 'Soutien matériel & technique personnalisé',
          description:
            'Dotation produit ciblée, accès prototypes, suivi technique adapté à la saison.',
        },
        {
          code: 'Levier B',
          title: 'Intégration officielle au Team Athlètes Élite',
          description:
            "Appartenance pleine au projet de marque : représentation, événements, communication, R&D.",
        },
      ],
      footerCta: 'Prendre contact',
      footerTagline:
        'Discutons du modèle qui correspond à votre projet de marque.',
    },

    communiques: {
      eyebrow: 'Communiqués',
      title1: 'Communiqués',
      title2: 'de course.',
      kicker:
        "Récits de courses, retours analytiques et photos officielles : la trace écrite de chaque temps fort de la saison.",
      back: 'Retour au Media Kit',
      backToList: 'Retour aux communiqués',
      readMore: 'Lire le communiqué',
      published: 'Publié',
      labels: {
        location: 'Lieu',
        distance: 'Distance',
        elevation: 'Dénivelé',
        start: 'Départ',
      },
      empty: 'Aucun communiqué pour le moment.',
    },

    contact: {
      back: 'Retour au Media Kit',
      eyebrow: 'Contact',
      title1: 'Construisons',
      title2: 'ensemble.',
      labels: {
        prenom: 'Prénom',
        nom: 'Nom',
        email: 'Email',
        telephone: 'Téléphone',
        societe: 'Société',
        sujet: 'Sujet',
        message: 'Message',
      },
      messagePlaceholder: 'Présentez brièvement votre projet, contexte, échéances…',
      submit: 'Envoyer le message',
      submitting: 'Envoi en cours...',
      success:
        'Message envoyé avec succès. Nous vous recontacterons rapidement.',
      error:
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      directLabel: 'Ou par mail direct :',
      videoCaption: 'Vidéo de présentation',
      subjects: [
        'Sponsoring / Représentation',
        'Intégration team',
        'Demande presse',
        'Autre',
      ],
    },
  },

  // ====================================================================

  en: {
    common: {
      langFr: 'FR',
      langEn: 'EN',
      switchLabel: 'Change language',
    },

    header: {
      logoSubtitle: 'M. Baudelocq',
      nav: [
        { href: '#athlete', label: 'Athlete' },
        { href: '#palmares', label: 'TopPerf' },
        { href: '#medias', label: 'Media' },
        { href: '#resultats', label: 'Results' },
        { href: '#calendrier', label: 'Goals' },
        { href: '#partenariat', label: 'Partnership' },
        { href: '/communiques', label: 'Press', external: true },
      ],
      cta: 'Get in touch',
      menuOpen: 'Open menu',
    },

    hero: {
      eyebrow: 'Media Kit · 2026 Season',
      titleFirst: 'Mathilde',
      titleLast: 'Baudelocq',
      subtitleSport: 'Trail Running Athlete',
      subtitleProject: 'Elite Trajectory',
      ctaPrimary: 'See partnership proposal',
      ctaSecondary: 'View performances',
      tagCity: 'Montélimar (26) · France',
      tagProject: '2026 Project · Elite Status',
      snapshot: 'Snapshot',
      snapshotPeriod: '2025–26',
      grvBadge: 'Top 3%',
      photoAlt: 'Mathilde Baudelocq, trail running athlete, racing',
    },

    athlete: {
      eyebrow: '01 — Athlete',
      kicker:
        'Profile, key facts and performance metrics — the Elite trajectory captured at a glance.',
      photoAlt: 'Mathilde Baudelocq, off-track portrait',
      overlayLine1: 'The athlete,',
      overlayLine2: 'at a glance.',
      captionPortrait: 'Portrait',
      captionName: 'Mathilde Baudelocq',
      captionRegion: 'Drôme',
      description: {
        intro: 'Competitive ambition and territorial roots. On a steady climb toward Elite level, her progression rests on a strict work ethic:',
        valueSimplicite: 'simplicity',
        valueIntegrite: 'integrity',
        valueAnd: 'and',
        valueLoyaute: 'loyalty',
        outro: '. An education professional based in the Drôme region, she embodies the outdoor brand’s core target. A profile built for performance, calibrated to represent a local equipment maker and contribute to its technical R&D.',
      },
      values: ['Simplicity', 'Integrity', 'Loyalty'],
      facts: [
        { label: 'Age', value: '34 years old' },
        { label: 'City', value: 'Montélimar (26)' },
        { label: 'Experience', value: '5 years of trail running' },
        { label: 'Level', value: 'From local to Top Female' },
      ],
      factTag: 'Fact',
      dashboardLabel: 'Performance Dashboard',
      season: '2025–26 Season',
      liveData: 'Live Data',
      sectionTitle1: 'Elite',
      sectionTitle2: 'Trajectory.',
      kpis: [
        {
          eyebrow: 'Reference performance',
          metric: 'TOP',
          value: '3',
          suffix: '%',
          context: '26 km · Grand Raid du Ventoux 2026',
          tag: '9th woman · 124th overall',
        },
        {
          eyebrow: 'ITRA Score',
          metric: '',
          value: '565',
          suffix: 'pts',
          context: 'International Trail Running Association',
          tag: 'Global performance index',
        },
        {
          eyebrow: 'UTMB Index',
          metric: '',
          value: '568',
          suffix: 'pts',
          context: 'UTMB World Series · Trail',
          tag: 'Reference trail index',
        },
      ],
      ticker: [
        { label: 'Discipline', value: 'Trail Running' },
        { label: 'Sweet-spot distance', value: '20–80 km' },
        { label: 'Current level', value: 'National' },
        { label: '2026 goal', value: 'Elite Status' },
      ],
    },

    palmares: {
      eyebrow: '02 — Recent results',
      title1: 'Reference',
      title2: '2026 Season.',
      kicker:
        'One landmark performance crystallises the trajectory: a breakthrough alongside the Elite pack on one of the toughest trails in the South-East of France.',
      highlightPill: 'Highlight',
      seasonPill: '2026 Season',
      datePill: '04 / 25 / 2026',
      raceTitle1: 'Grand Raid',
      raceTitle2: 'du Ventoux',
      raceSub: '26 km · 1,100 m D+ · Mont Ventoux',
      bigStat: '9th woman / 381',
      bigStatExplain:
        ' — i.e. Top 3% female, and a category win. A reference that validates the path toward Elite status.',
      stats: [
        { label: 'Female rank', value: '9 / 381' },
        { label: 'Time', value: '02:37:09' },
        { label: 'Overall', value: '124 / 1178' },
      ],
      photoAlt: 'Mathilde Baudelocq racing at Grand Raid du Ventoux 2026',
      photoEyebrow: 'Racing · GRV 2026',
      photoCaption: 'Mont Ventoux',
      progressionLabel: 'Progression · 6 years',
      progressionTitle1: 'Steady progression',
      progressionTitle2: 'toward Elite status.',
      progressionAriaLabel: 'Six-year ascending progression curve',
      progressionStart: 'Start: Regional',
      progressionEnd: 'Today: Top Female',
      progressionYears: ['2021', '2022', '2023', '2024', '2025', '2026'],
      podiumAlt: 'Mathilde Baudelocq on the podium of Grand Raid du Ventoux 2026',
      podiumPill: 'Category podium',
      podiumEyebrow: 'Ceremony · GRV 2026',
      podiumCaption: 'Top 3% Female',
    },

    gallery: {
      eyebrow: '03 — Media',
      title1: 'Out on',
      title2: 'the trail.',
      kicker:
        'Living library — race photos, training runs and behind-the-scenes videos. High-resolution assets available on request.',
      countPhotos: 'Photos',
      countVideos: 'Videos',
      hdTag: 'HD · On request',
      footnote:
        'Photo credits provided on request · Videos hosted on Cloudinary',
      playLabel: 'Play video',
    },

    races: {
      eyebrow: '04 — Detailed results',
      title1: 'Race',
      title2: 'history.',
      kicker:
        "Raw race data — official times, female and overall rankings. The female rank is the reference signal.",
      headers: {
        date: 'Date',
        race: 'Race',
        distance: 'Distance / D+',
        time: 'Time',
        women: 'Female rank',
        general: 'Overall rank',
      },
      mobileLabels: {
        time: 'Time',
        women: 'Female',
        general: 'Overall',
      },
      footnote:
        'Source: official organiser results · Updated 2025–26 season',
      badges: {
        Podium: 'Podium',
        'Top perf': 'Top perf',
        Ultra: 'Ultra',
      },
      highlightBadge: 'Reference Performance · Top 3% Female',
    },

    calendar: {
      eyebrow: '05 — 2026 Goals',
      title1: 'Major',
      title2: 'Performance Targets.',
      kicker:
        'Two races shape the season. Targeted preparation, peak fitness aligned, validation of the move to Elite status.',
      objectiveALabel: 'Goal A',
      objectiveBLabel: 'Goal B',
      formatLabel: 'Short format · Speed',
      objectives: [
        {
          code: 'A.01',
          title: 'Mont-Blanc Marathon',
          distance: '42 km',
          location: 'Chamonix · Haute-Savoie',
          period: 'June 28, 2026',
          note: 'International showcase · mountain marathon format',
        },
        {
          code: 'A.02',
          title: 'UltraTrail du Vercors',
          distance: '84 km',
          location: 'Vercors range · Drôme / Isère',
          period: 'September 12, 2026',
          note: 'Second ultra · home playground',
        },
      ],
      objectiveLieu: 'Location',
      objectivePeriode: 'Date',
      secondary: {
        code: 'B.01',
        category: 'Visibility & Speed Goal',
        title: 'La SainteSprint',
        distance: '25 km',
        location: 'Lyon · Rhône',
        period: 'November 28, 2026',
        badge: 'Season closer event',
        context:
          '5th consecutive participation — steady progression of the female ranking from short to long formats.',
      },
      secondaryLabels: {
        period: 'Date',
        location: 'Location',
        recurrence: 'Recurrence',
        recurrenceValue: '5th appearance',
      },
    },

    partnership: {
      eyebrow: '06 — Partnership',
      title1: 'Collaboration',
      title2: 'vision.',
      kickerIntro: 'A collaboration built around',
      kickerMutual: 'mutual performance',
      kickerComma: ', ',
      kickerLocal: 'territorial roots',
      kickerAnd: 'and',
      kickerBrand: 'integration into the brand project',
      kickerEnd: '.',
      photoPill: 'GR Ventoux',
      photoEyebrow: 'Racing · 2025',
      photoCaption: 'Technical trail',
      photoAlt: 'Mathilde Baudelocq racing at Grand Raid du Ventoux',
      pillars: [
        {
          code: '01',
          subtitle: 'R&D',
          title: 'Performance & Co-development',
          body:
            'A technical synergy: pushing the athlete toward Elite status while putting cutting-edge technologies to the test. Prototype gear stress-tested on a wide variety of technical terrains.',
          tags: ['R&D leverage', 'Prototype testing', 'Analytical feedback'],
        },
        {
          code: '02',
          subtitle: 'Brand image',
          title: 'Visibility & Elite Ambition',
          body:
            'Embodying the brand on national and international circuits. An authentic, performance-driven presence on flagship events (Mont-Blanc, Vercors, SaintéLyon).',
          tags: ['Representation', 'Event visibility', 'Sport values'],
        },
        {
          code: '03',
          subtitle: 'Strategic partnership',
          title: 'Commitment & Shared Project',
          body:
            'Going beyond transactional sponsoring. Engaging in a long-lasting collaboration grounded in integrity, loyalty and a strict work ethic. The aim is to merge with the brand DNA and support mutual development over the long run.',
          tags: ['Long-term vision', 'Brand DNA', 'Shared values'],
        },
      ],
      footerEyebrow: 'Models',
      footerTitle: 'Two collaboration models on the table',
      levers: [
        {
          code: 'Model A',
          title: 'Tailored material & technical support',
          description:
            'Targeted product allocation, prototype access, season-aligned technical follow-up.',
        },
        {
          code: 'Model B',
          title: 'Official Elite Athlete Team membership',
          description:
            'Full embedding in the brand project: representation, events, communications, R&D.',
        },
      ],
      footerCta: 'Get in touch',
      footerTagline:
        'Let’s discuss the model that fits your brand project.',
    },

    communiques: {
      eyebrow: 'Press releases',
      title1: 'Race',
      title2: 'press releases.',
      kicker:
        'Race recaps, analytical takeaways and official photos: the written trace of every season highlight.',
      back: 'Back to Media Kit',
      backToList: 'Back to press releases',
      readMore: 'Read the release',
      published: 'Published',
      labels: {
        location: 'Location',
        distance: 'Distance',
        elevation: 'Elevation',
        start: 'Start',
      },
      empty: 'No press releases yet.',
    },

    contact: {
      back: 'Back to Media Kit',
      eyebrow: 'Contact',
      title1: 'Let’s build',
      title2: 'together.',
      labels: {
        prenom: 'First name',
        nom: 'Last name',
        email: 'Email',
        telephone: 'Phone',
        societe: 'Company',
        sujet: 'Subject',
        message: 'Message',
      },
      messagePlaceholder: 'Briefly describe your project, context and timeline…',
      submit: 'Send message',
      submitting: 'Sending…',
      success:
        'Message sent successfully. We will get back to you shortly.',
      error: 'Something went wrong while sending. Please try again.',
      directLabel: 'Or directly by email:',
      videoCaption: 'Presentation video',
      subjects: [
        'Sponsoring / Representation',
        'Team integration',
        'Press request',
        'Other',
      ],
    },
  },
};
