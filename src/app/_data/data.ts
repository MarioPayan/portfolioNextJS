import {dateDiff} from '@/utils/dates'

const rgbColors: RgbColors = {
  experience: {
    redux: [26, 60, 133],
    alertLogic: [255, 127, 0],
    deft: [0, 188, 212],
    cierSur: [125, 35, 124],
  },
  education: {
    univalle: [228, 40, 24],
  },
  techSkill: {
    coding: [61, 126, 156],
    frontEndFrameworks: [116, 154, 139],
    backEndFrameworks: [151, 124, 137],
    markup: [162, 148, 109],
    database: [126, 133, 147],
    versionControl: [186, 88, 88],
    scripting: [144, 165, 119],
    testing: [95, 118, 163],
    operativeSystem: [155, 175, 120],
  },
  softSkill: {
    personal: [114, 142, 156],
    methodical: [164, 109, 90],
    social: [143, 109, 135],
  },
}

export enum SECTIONS {
  ABOUT_ME_BUSINESS = 'ABOUT_ME_BUSINESS',
  SKILLS = 'SKILLS',
  EXPERIENCE = 'EXPERIENCE',
  PROJECTS = 'PROJECTS',
  EDUCATION = 'EDUCATION',
  ABOUT_ME_CHILL = 'ABOUT_ME_CHILL',
  MUSIC = 'MUSIC',
  TRAVELING = 'TRAVELING',
  DOGS = 'DOGS',
  GEEK = 'GEEK',
  ROLES = 'ROLES',
  FILMS = 'FILMS',
  SPORTS = 'SPORTS',
  RANDOM = 'RANDOM',
}

export enum MODES {
  BUSINESS = 'BUSINESS',
  CHILL = 'CHILL',
}

const DATA: Data = {
  PERSONAL: {
    name: 'Mario Payan',
    role: 'Full Stack Principal Software Developer',
    url: 'https://www.mariopayan.com/',
    quote: 'The cake is a lie',
    location: 'Cali, Colombia',
    keywords: [
      'Mario Payan',
      'Mario',
      'Payan',
      'Mario A. Payan',
      'Software',
      'Developer',
      'Full Stack',
      'Tech Lead',
      'Principal',
    ],
    meta_description:
      'I\'m Mario Payan! A Full Stack Principal Software Developer, empirical musician, hardcore gamer, adventurous explorer, geek guy, and a random person. ¯\\_(ツ)_/¯',
    meta_title: 'Mario Payan | Full Stack Principal Software Developer',
    description: {
      BUSINESS: `Full Stack Principal Software Developer with ${dateDiff(
        '2017-10',
        '',
        true
      )} of experience with focus on software development, \
      algorithms design, software as a service and clean code. \
      Challenge driven, always willing to learn, passionate about new technologies, teamwork and code writing`,
      CHILL:
        'Colombian software developer by day, an empirical musician whenever inspiration strikes, \
        a dedicated gamer in my downtime, and an adventurer always on the move, and definitely a random person. ¯\\_(ツ)_/¯',
    },
  },

  BUSINESS_SECTIONS: [
    {label: 'About Me', key: SECTIONS.ABOUT_ME_BUSINESS},
    {label: 'Skills', key: SECTIONS.SKILLS},
    {label: 'Experience', key: SECTIONS.EXPERIENCE},
    {label: 'Projects', key: SECTIONS.PROJECTS},
    {label: 'Education', key: SECTIONS.EDUCATION},
  ],

  CHILL_SECTIONS: [
    {label: 'About Me', key: SECTIONS.ABOUT_ME_CHILL},
    {label: 'Music', key: SECTIONS.MUSIC},
    {label: 'Traveling', key: SECTIONS.TRAVELING},
    {label: 'Dogs', key: SECTIONS.DOGS},
    {label: 'Geek', key: SECTIONS.GEEK},
    {label: 'Roles', key: SECTIONS.ROLES},
    {label: 'Films', key: SECTIONS.FILMS},
    {label: 'Sports', key: SECTIONS.SPORTS},
    {label: 'Random', key: SECTIONS.RANDOM},
  ],

  CONTACTS: [
    {
      label: 'Email',
      name: 'mpayan.av@gmail.com',
      url: 'mailto:mpayan.av@gmail.com',
      mode: MODES.BUSINESS,
    },
    {
      label: 'Linked In',
      name: 'mario-payan',
      url: 'https://www.linkedin.com/in/mario-payan/',
      mode: MODES.BUSINESS,
    },
    {
      label: 'Git Hub',
      name: 'MarioPayan',
      url: 'https://github.com/MarioPayan',
      mode: MODES.BUSINESS,
    },
    {
      label: 'WhatsApp',
      name: '+57 318 615 1646',
      url: 'https://wa.me/573186151646?text=Hey!',
      mode: MODES.CHILL,
    },
    {
      label: 'Facebook',
      name: 'Mario A. Payan V.',
      url: 'https://www.facebook.com/Mario.A.Payan.V',
      mode: MODES.CHILL,
    },
    {
      label: 'Instagram',
      name: 'mario.a.payan',
      url: 'https://www.instagram.com/mario.a.payan/',
      mode: MODES.CHILL,
    },
  ],

  TECH_SKILLS: [
    {
      title: 'Coding',
      skills: [{title: 'Python'}, {title: 'Javascript'}, {title: 'TypeScript'}],
      rgbColor: rgbColors.techSkill.coding,
    },
    {
      title: 'Front End Frameworks',
      skills: [{title: 'React'}, {title: 'NextJS'}, {title: 'AngularJS'}],
      rgbColor: rgbColors.techSkill.frontEndFrameworks,
    },
    {
      title: 'Back End Frameworks',
      skills: [{title: 'Django'}, {title: 'Django REST'}],
      rgbColor: rgbColors.techSkill.backEndFrameworks,
    },
    {
      title: 'Markup',
      skills: [
        {title: 'HTML5'},
        {title: 'CSS3'},
        {title: 'SASS'},
        {title: 'PWA'},
        {title: 'Material UI'},
        {title: 'Bootstrap'},
        {title: 'Flexbox'},
      ],
      rgbColor: rgbColors.techSkill.markup,
    },
    {
      title: 'Database',
      skills: [{title: 'PostgreSQL'}, {title: 'SQLite'}],
      rgbColor: rgbColors.techSkill.database,
    },
    {
      title: 'Version Control',
      skills: [
        {title: 'Git'},
        {title: 'GitHub'},
        {title: 'GitLab'},
        {title: 'BitBucket'},
      ],
      rgbColor: rgbColors.techSkill.versionControl,
    },
    {
      title: 'Scripting',
      skills: [{title: 'Bash'}],
      rgbColor: rgbColors.techSkill.scripting,
    },
    {
      title: 'Testing',
      skills: [
        {title: 'Cypress'},
        {title: 'Jasmine'},
        {title: 'Puppeteer'},
        {title: 'Appium'},
        {title: 'Selenium'},
      ],
      rgbColor: rgbColors.techSkill.testing,
    },
    {
      title: 'Operative System',
      skills: [{title: 'OSx'}, {title: 'Linux'}],
      rgbColor: rgbColors.techSkill.operativeSystem,
    },
  ],

  SOFT_SKILLS: [
    {
      title: 'Personal',
      skills: [{title: 'Willingness to Learn'}, {title: 'Proactivity'}],
      rgbColor: rgbColors.softSkill.personal,
    },
    {
      title: 'Methodical',
      skills: [{title: 'Problem solving'}, {title: 'Clean Code'}],
      rgbColor: rgbColors.softSkill.methodical,
    },
    {
      title: 'Social',
      skills: [
        {title: 'Communication'},
        {title: 'Teamwork'},
        {title: 'Adaptability'},
      ],
      rgbColor: rgbColors.softSkill.social,
    },
  ],

  EXPERIENCE: [
    {
      where: 'Alert Logic',
      from: '2017-01',
      to: '2017-07',
      position: 'Web Developer',
      rgbColor: rgbColors.experience.alertLogic,
      image: '/images/jobs/alert_logic.svg',
      achievements: [
        'Increased test coverage of a PHP application',
        'Supported application defects/feature requests for JavaScript, jQuery, and PHP code',
        'Improved UI and performance of web applications',
        'Contributed to software development using SCRUM agile methodology',
      ],
    },
    {
      where: 'Alert Logic',
      from: '2017-10',
      to: '2018-11',
      position: 'Back-End Developer',
      rgbColor: rgbColors.experience.alertLogic,
      image: '/images/jobs/alert_logic.svg',
      achievements: [
        'Automated internal services',
        'Provided and supported internal tools for analysts',
        'Managed and maintained Linux nodes with Chef',
      ],
    },
    {
      where: 'Alert Logic',
      from: '2018-11',
      to: '2019-11',
      position: 'Full-Stack Developer',
      rgbColor: rgbColors.experience.alertLogic,
      image: '/images/jobs/alert_logic.svg',
      achievements: [
        'Acted as SCRUM master developer',
        'Contributed to implementing continuous integration and continuous delivery pipelines',
        'Implemented End-to-end software testing methodology and architecture',
        'Developed new UI experience for one of the most used products',
      ],
    },
    {
      where: 'Alert Logic',
      from: '2019-11',
      to: '2021-07',
      position: 'Mobile Developer',
      rgbColor: rgbColors.experience.alertLogic,
      image: '/images/jobs/alert_logic.svg',
      achievements: [
        'Worked on the implementation of an iOS mobile application',
        'Built an Android mobile application from scratch',
      ],
    },
    {
      where: 'Redux',
      from: '2021-07',
      to: '',
      position: 'Principal Engineer',
      rgbColor: rgbColors.experience.redux,
      image: '/images/jobs/redux.svg',
      achievements: [
        'Led end-to-end software development lifecycle, taking full ownership of decision-making, architectural design, and UI/UX considerations',
        'Directly engaged stakeholders, capturing business logic and delivering software solution that met expectations',
      ],
    },
    {
      where: 'Deft',
      from: '2020-01',
      to: '',
      position: 'Co-founder & Teacher',
      rgbColor: rgbColors.experience.deft,
      image: '/images/jobs/deft.png',
      achievements: [
        'Developed software and web apps based on client demands',
        'Taught new technologies, good practices, tools, etc., to students',
      ],
    },
    {
      where: 'CIER-Sur',
      from: '2016-01',
      to: '2016-06',
      position: 'Web Content Developer',
      rgbColor: rgbColors.experience.cierSur,
      image: '/images/jobs/cier_sur.png',
      achievements: [
        'Built learning objects based on JavaScript code with CSS',
        'Contributed to building a framework for reusing existing code in new learning objects',
      ],
    },
  ],

  EDUCATION: [
    {
      where: 'Universidad del Valle',
      from: '2012-01',
      to: '2017-01',
      position: 'B.S. Systems Engineering and Computer Science',
      rgbColor: rgbColors.education.univalle,
      image: '/images/projects/univalle.svg',
      achievements: [
        'National Awarded Academic Scholarship: Bachilleres por Colombia Mario Galán Gómez, an award given to the 70 best students in the country',
        'Awarded Academic Scholarships for being at the top of the class',
      ],
    },
  ],

  PROJECTS: [
    {
      label: 'Survey Tool',
      description:
        'A tool that enables user characterization through surveys to find the perfect match for specific needs',
      image: '/images/projects/wp.png',
      stack: [
        'React',
        'Javascript',
        'Django',
        'Python',
        'Material UI',
        'Django REST',
        'HTML5',
        'CSS3',
        'Git',
        'PostgreSQL',
        'BitBucket',
        'Cypress',
      ],
      // link: 'https://app.wellplayedresearch.com/',
    },
    {
      label: 'This site',
      description:
        'A website created for personal enjoyment and showcasing projects',
      image: '/images/profile_pixel.png',
      stack: [
        'React',
        'NextJS',
        'TypeScript',
        'Material UI',
        'Flexbox',
        'HTML5',
        'CSS3',
        'SASS',
        'Git',
        'GitHub',
      ],
      link: 'https://www.mariopayan.com/',
    },
    {
      label: 'Under degree project',
      description:
        'An application of Augmented Reality to facilitate the self-assessment process of the System Engineering Academic Program',
      image: '/images/projects/univalle.svg',
      stack: ['Vuforia', 'Unity', 'C#'],
      link: '',
    },
    {
      label: 'Deft website',
      description:
        'A landing page for Deft Soluciones, a software development company',
      image: '/images/projects/deft.png',
      stack: ['Javascript', 'HTML5', 'CSS3', 'Git', 'GitHub', 'Bootstrap'],
      // link: 'https://deftsoluciones.com/',
    },
    {
      label: 'Alert Logic web app',
      description: 'A Web app for Alert Logic customers',
      image: '/images/projects/alert_logic_web.png',
      stack: [
        'jQuery',
        'AngularJS',
        'Bootstrap',
        'PHP',
        'HTML5',
        'CSS3',
        'Git',
        'GitHub',
        'PostgreSQL',
      ],
      // link: 'https://alertlogic.com/',
    },
    {
      label: 'Alert Logic mobile app',
      description:
        'A mobile app for Alert Logic customers available on Android and iOS',
      image: '/images/projects/alert_logic_mobile.png',
      stack: ['React Native', 'Javascript', 'HTML5', 'CSS3', 'Git', 'GitHub'],
      link: 'https://play.google.com/store/apps/details?id=com.alertlogic.secalert',
    },
    {
      label: 'Placa y Cédula (Android)',
      description:
        'An Android app to determine when individuals can go outside during the pandemic situation in Colombia',
      image: '/images/projects/pyc_android.webp',
      stack: [
        'React',
        'Javascript',
        'HTML5',
        'CSS3',
        'SASS',
        'Git',
        'GitHub',
        'Typescript',
        'Material UI',
        'PWA',
        'SQlite',
      ],
      link: 'https://play.google.com/store/apps/details?id=com.herokuapp.placa_y_cedula.twa',
    },
    {
      label: 'Placa y Cédula (Web)',
      description:
        'A web app to determine when individuals can go outside during the pandemic situation in Colombia',
      image: '/images/projects/pyc_web.png',
      stack: [
        'React',
        'Javascript',
        'HTML5',
        'CSS3',
        'SASS',
        'Git',
        'GitHub',
        'Typescript',
        'Material UI',
        'PWA',
        'SQlite',
      ],
      link: 'https://placa-y-cedula.herokuapp.com/',
    },
    {
      label: 'SVG Learning Tool',
      description:
        'A simple tool created during free time to help others understand how SVG works',
      image: '/images/projects/svg.png',
      stack: [
        'React',
        'Javascript',
        'HTML5',
        'CSS3',
        'SASS',
        'Git',
        'GitHub',
        'Typescript',
        'Material UI',
      ],
      link: 'https://mariopayan.github.io/SvgLearningTool/',
    },
    {
      label: 'Alert Logic internal services',
      description:
        'Responsible for supporting and maintaining several internal services at Alert Logic',
      image: '/images/projects/alert_logic_heimdall.jpg',
      stack: [
        'AngularJS',
        'Bootstrap',
        'PHP',
        'Chef',
        'Linux',
        'Bash',
        'Git',
        'GitHub',
        'PostgreSQL',
      ],
      // link: 'https://alertlogic.com/',
    },
  ],

  MUSIC: {
    title: 'Music',
    description:
      'I have been an empirical musician since the age of 14, exploring various instruments and genres. Although I don\'t dedicate myself to it full-time, I find great joy in creating and sharing my music',
    sections: [
      {
        title: 'Solo',
        description:
          'I am primarily a guitarist, but I also dabble in other instruments and can contribute backing vocals. Most of the time, I enjoy creating music at home for my own personal enjoyment',
        images: [
          '/images/hobbies/music/solo/img_1.jpg',
          '/images/hobbies/music/solo/img_2.jpg',
          '/images/hobbies/music/solo/img_3.jpg',
          '/images/hobbies/music/solo/img_4.jpg',
          '/images/hobbies/music/solo/img_5.jpg',
          '/images/hobbies/music/solo/img_6.jpg',
          '/images/hobbies/music/solo/img_7.jpg',
          '/images/hobbies/music/solo/img_8.jpg',
          '/images/hobbies/music/solo/img_9.jpg',
          '/images/hobbies/music/solo/img_10.jpg',
          '/images/hobbies/music/solo/img_11.jpg',
          '/images/hobbies/music/solo/img_12.jpg',
        ],
      },
      {
        title: 'Falsete Proyecto',
        description:
          'I have a cherished music project with my college friends where we indulge in our favorite genres, including ballads, Pacific music, reggaeton, salsa, and more. We put our unique stamp on each style, infusing it with our own creative flair',
        images: [
          '/images/hobbies/music/falsete/img_1.jpg',
          '/images/hobbies/music/falsete/img_2.jpg',
          '/images/hobbies/music/falsete/img_3.jpg',
          '/images/hobbies/music/falsete/img_4.jpg',
          '/images/hobbies/music/falsete/img_5.jpg',
          '/images/hobbies/music/falsete/img_6.jpg',
          '/images/hobbies/music/falsete/img_7.jpg',
          '/images/hobbies/music/falsete/img_8.jpg',
          '/images/hobbies/music/falsete/img_9.jpg',
          '/images/hobbies/music/falsete/img_10.jpg',
          '/images/hobbies/music/falsete/img_11.jpg',
          '/images/hobbies/music/falsete/img_12.jpg',
          '/images/hobbies/music/falsete/img_13.jpg',
          '/images/hobbies/music/falsete/img_14.jpg',
          '/images/hobbies/music/falsete/img_15.jpg',
          '/images/hobbies/music/falsete/img_16.jpg',
          '/images/hobbies/music/falsete/img_17.jpg',
          '/images/hobbies/music/falsete/img_18.jpg',
          '/images/hobbies/music/falsete/img_19.jpg',
        ],
        social: {
          facebook: 'https://www.facebook.com/proyectofalsete',
          instagram: 'https://www.instagram.com/falsete.proyecto/',
          youtube: 'https://www.youtube.com/channel/UCTespFNTty8D1wSWhQiUmHA',
          whatsapp: 'https://wa.me/573127266099?text=Hey!',
        },
      },
      {
        title: 'Cero Grados',
        description:
          'I had the opportunity to be part of an urban music project where we ventured into various musical experiments, pushing the boundaries and exploring new sounds',
        images: ['/images/hobbies/music/cero_grados/img_1.jpg'],
        social: {
          facebook: 'https://www.facebook.com/cerogradosmusic',
          instagram: 'https://www.instagram.com/cerogradosmusic/',
          youtube: 'https://www.youtube.com/channel/UCfI30-3Jxhtdy9v0ZYnzcbw',
        },
      },
      {
        title: 'Band AL',
        description:
          'I was part of a band that initially formed for fun while working at a company, simply as a means of spending time together. Unexpectedly, our passion and talent led us to perform gigs, entertaining the rest of the company',
        images: [
          '/images/hobbies/music/band_al/img_1.jpg',
          '/images/hobbies/music/band_al/img_2.jpg',
          '/images/hobbies/music/band_al/img_3.jpg',
          '/images/hobbies/music/band_al/img_4.jpg',
          '/images/hobbies/music/band_al/img_5.jpg',
          '/images/hobbies/music/band_al/img_6.jpg',
          '/images/hobbies/music/band_al/img_7.jpg',
        ],
      },
      {
        title: 'Closed Eyes',
        description:
          'My very first band was a rock and metal outfit driven by our youthful desire to rock and roll. Our most significant achievement was performing in front of a crowd of over 500 people, which seemed unimaginable to us at the time. Interestingly, we chose the name "Closed Eyes" as a tribute to our talented blind vocalist',
        images: [
          '/images/hobbies/music/closed_eyes/img_1.jpg',
          '/images/hobbies/music/closed_eyes/img_2.jpg',
          '/images/hobbies/music/closed_eyes/img_3.jpg',
          '/images/hobbies/music/closed_eyes/img_4.jpg',
        ],
        social: {
          youtube: 'https://www.youtube.com/user/ClosedEyesMetal',
        },
      },
      {
        title: 'K&R',
        description:
          'During my early days of learning to play and sing, I embarked on a small project with a friend. Although we didn\'t collaborate extensively, we managed to record a few covers together. Looking back, I hope those recordings never see the light of day again',
        images: [
          '/images/hobbies/music/kyr/img_1.jpg',
          '/images/hobbies/music/kyr/img_2.jpg',
        ],
      },
    ],
  },
  TRAVELING: {
    title: 'Traveling',
    description:
      'Traveling is one of my greatest passions. No matter how small the journey, there is always so much to learn and experience',
    sections: [
      {
        title: 'Colombia',
        description:
          'Colombia, my lifelong home, is a country brimming with enchanting small destinations. Even after all these years, I continue to discover hidden gems that I never knew existed',
        images: [
          '/images/hobbies/traveling/colombia/img_1.jpg',
          '/images/hobbies/traveling/colombia/img_2.jpg',
          '/images/hobbies/traveling/colombia/img_3.jpg',
          '/images/hobbies/traveling/colombia/img_4.jpg',
          '/images/hobbies/traveling/colombia/img_5.jpg',
          '/images/hobbies/traveling/colombia/img_6.jpg',
          '/images/hobbies/traveling/colombia/img_7.jpg',
          '/images/hobbies/traveling/colombia/img_8.jpg',
          '/images/hobbies/traveling/colombia/img_9.jpg',
          '/images/hobbies/traveling/colombia/img_10.jpg',
          '/images/hobbies/traveling/colombia/img_11.jpg',
          '/images/hobbies/traveling/colombia/img_12.jpg',
          '/images/hobbies/traveling/colombia/img_13.jpg',
          '/images/hobbies/traveling/colombia/img_14.jpg',
          '/images/hobbies/traveling/colombia/img_15.jpg',
          '/images/hobbies/traveling/colombia/img_16.jpg',
          '/images/hobbies/traveling/colombia/img_17.jpg',
          '/images/hobbies/traveling/colombia/img_18.jpg',
          '/images/hobbies/traveling/colombia/img_19.jpg',
          '/images/hobbies/traveling/colombia/img_20.jpg',
          '/images/hobbies/traveling/colombia/img_21.jpg',
          '/images/hobbies/traveling/colombia/img_22.jpg',
          '/images/hobbies/traveling/colombia/img_23.jpg',
          '/images/hobbies/traveling/colombia/img_24.jpg',
          '/images/hobbies/traveling/colombia/img_25.jpg',
          '/images/hobbies/traveling/colombia/img_26.jpg',
          '/images/hobbies/traveling/colombia/img_27.jpg',
          '/images/hobbies/traveling/colombia/img_28.jpg',
          '/images/hobbies/traveling/colombia/img_29.jpg',
          '/images/hobbies/traveling/colombia/img_30.jpg',
          '/images/hobbies/traveling/colombia/img_31.jpg',
          '/images/hobbies/traveling/colombia/img_32.jpg',
          '/images/hobbies/traveling/colombia/img_33.jpg',
          '/images/hobbies/traveling/colombia/img_34.jpg',
          '/images/hobbies/traveling/colombia/img_35.jpg',
          '/images/hobbies/traveling/colombia/img_36.jpg',
          '/images/hobbies/traveling/colombia/img_37.jpg',
          '/images/hobbies/traveling/colombia/img_38.jpg',
          '/images/hobbies/traveling/colombia/img_39.jpg',
          '/images/hobbies/traveling/colombia/img_40.jpg',
          '/images/hobbies/traveling/colombia/img_41.jpg',
          '/images/hobbies/traveling/colombia/img_42.jpg',
          '/images/hobbies/traveling/colombia/img_43.jpg',
          '/images/hobbies/traveling/colombia/img_44.jpg',
          '/images/hobbies/traveling/colombia/img_45.jpg',
          '/images/hobbies/traveling/colombia/img_46.jpg',
          '/images/hobbies/traveling/colombia/img_47.jpg',
          '/images/hobbies/traveling/colombia/img_48.jpg',
          '/images/hobbies/traveling/colombia/img_49.jpg',
          '/images/hobbies/traveling/colombia/img_50.jpg',
          '/images/hobbies/traveling/colombia/img_51.jpg',
          '/images/hobbies/traveling/colombia/img_52.jpg',
          '/images/hobbies/traveling/colombia/img_53.jpg',
          '/images/hobbies/traveling/colombia/img_54.jpg',
          '/images/hobbies/traveling/colombia/img_55.jpg',
          '/images/hobbies/traveling/colombia/img_56.jpg',
          '/images/hobbies/traveling/colombia/img_57.jpg',
          '/images/hobbies/traveling/colombia/img_58.jpg',
          '/images/hobbies/traveling/colombia/img_59.jpg',
          '/images/hobbies/traveling/colombia/img_60.jpg',
          '/images/hobbies/traveling/colombia/img_61.jpg',
          '/images/hobbies/traveling/colombia/img_62.jpg',
          '/images/hobbies/traveling/colombia/img_63.jpg',
          '/images/hobbies/traveling/colombia/img_64.jpg',
          '/images/hobbies/traveling/colombia/img_65.jpg',
          '/images/hobbies/traveling/colombia/img_66.jpg',
          '/images/hobbies/traveling/colombia/img_67.jpg',
        ],
      },
    ],
  },
  DOGS: {
    title: 'Dogs',
    description:
      'Seeing a dog and resisting the urge to pet it is a challenge I often struggle with. That\'s why this aspect becomes essential when describing myself – my unwavering love for dogs and my innate desire to shower them with affection',
    sections: [
      {
        title: 'Sora',
        description:
          'Sora, the dog I rescued, needs no extensive introduction. The photos of her speak volumes on their own, showcasing the love and joy she brings into my life',
        images: [
          '/images/hobbies/dogs/sora/img_1.jpg',
          '/images/hobbies/dogs/sora/img_2.jpg',
          '/images/hobbies/dogs/sora/img_3.jpg',
          '/images/hobbies/dogs/sora/img_4.jpg',
          '/images/hobbies/dogs/sora/img_5.jpg',
          '/images/hobbies/dogs/sora/img_6.jpg',
          '/images/hobbies/dogs/sora/img_7.jpg',
          '/images/hobbies/dogs/sora/img_8.jpg',
          '/images/hobbies/dogs/sora/img_9.jpg',
          '/images/hobbies/dogs/sora/img_10.jpg',
        ],
      },
      {
        title: 'Puca',
        description:
          'Puca, a dog my mother adopted, seamlessly became a cherished member of our family. While displaying remarkable aggression towards strangers, she radiates immense love and affection towards those within our household. Her contrasting nature speaks volumes about her fierce loyalty and unwavering devotion to our family unit',
        images: [
          '/images/hobbies/dogs/puca/img_1.jpg',
          '/images/hobbies/dogs/puca/img_2.jpg',
          '/images/hobbies/dogs/puca/img_3.jpg',
          '/images/hobbies/dogs/puca/img_4.jpg',
          '/images/hobbies/dogs/puca/img_5.jpg',
          '/images/hobbies/dogs/puca/img_6.jpg',
          '/images/hobbies/dogs/puca/img_7.jpg',
          '/images/hobbies/dogs/puca/img_8.jpg',
          '/images/hobbies/dogs/puca/img_9.jpg',
          '/images/hobbies/dogs/puca/img_10.jpg',
        ],
      },
      {
        title: 'Random dogs',
        description:
          'In this vast world brimming with dogs to shower with affection, I have been fortunate to make cherished canine companions during my journeys. Some of these furry friends have seamlessly become a part of my extended family, forging deep bonds that transcend mere friendship. I have even dedicated time to visit them, nurturing and cherishing the special connections we share',
        images: [
          '/images/hobbies/dogs/others/img_1.jpg',
          '/images/hobbies/dogs/others/img_2.jpg',
          '/images/hobbies/dogs/others/img_3.jpg',
          '/images/hobbies/dogs/others/img_4.jpeg',
          '/images/hobbies/dogs/others/img_5.jpg',
          '/images/hobbies/dogs/others/img_6.jpg',
          '/images/hobbies/dogs/others/img_7.jpg',
          '/images/hobbies/dogs/others/img_8.jpg',
          '/images/hobbies/dogs/others/img_9.jpeg',
        ],
      },
    ],
  },
  GEEK: {
    title: 'Geek',
    description:
      'I\'m a fan of many geeky things, including technology, games, geopolitics, philosophy, and more. I have a deep curiosity and enjoy expanding my knowledge in various fields',
    sections: [
      {
        title: 'Video games',
        description:
          'Video games, to me, are the culmination of many art forms, including music, film, writing, and painting. They create immersive experiences that constantly evolve, and I find great joy in playing them',
        images: [
          '/images/hobbies/geek/games/img_1.jpeg',
          '/images/hobbies/geek/games/img_2.png',
          '/images/hobbies/geek/games/img_3.jpg',
          '/images/hobbies/geek/games/img_4.jpg',
          '/images/hobbies/geek/games/img_5.jpg',
          '/images/hobbies/geek/games/img_6.jpg',
          '/images/hobbies/geek/games/img_7.jpg',
          '/images/hobbies/geek/games/img_8.jpeg',
          '/images/hobbies/geek/games/img_9.jpg',
          '/images/hobbies/geek/games/img_10.jpg',
          '/images/hobbies/geek/games/img_11.jpg',
          '/images/hobbies/geek/games/img_12.jpeg',
          '/images/hobbies/geek/games/img_13.jpg',
          '/images/hobbies/geek/games/img_14.png',
        ],
      },
      {
        title: 'Code challenges',
        description:
          'Challenging myself to write efficient, readable, and practical code using best practices is something I enjoy doing for fun. I love taking on coding challenges and continuously improving my skills in this area',
        images: [
          '/images/hobbies/geek/code/img_1.jpg',
          '/images/hobbies/geek/code/img_2.png',
          '/images/hobbies/geek/code/img_3.jpg',
        ],
      },
    ],
  },
  SPORTS: {
    title: 'Sports',
    description:
      'While I\'m not a fan of watching sports, I thoroughly enjoy participating in them. I have engaged in various sports throughout my life and continue to seek opportunities to try new ones',
    sections: [
      {
        title: 'Kung Fu Xiaolin',
        description:
          'Martial arts, in particular, fascinate me. I appreciate any sport that pushes my body beyond its limits, and martial arts excel at that. The discipline and skill involved in Kung Fu Xiaolin have captivated me',
        images: [
          '/images/hobbies/sports/martial_arts/img_1.jpg',
          '/images/hobbies/sports/martial_arts/img_2.jpg',
          '/images/hobbies/sports/martial_arts/img_3.jpg',
        ],
        // TODO: Look for more photos, or medals
      },
      {
        title: 'Cycling',
        description:
          'Cycling has been a significant part of my life since my university days. I would hop on my bike and embark on thrilling adventures, exploring new places no matter how far they were. The freedom, the sense of exploration, and the joy of pedaling through picturesque landscapes made cycling an exhilarating experience',
        images: [
          '/images/hobbies/sports/cycling/img_1.jpg',
          '/images/hobbies/sports/cycling/img_2.jpg',
        ],
      },
      {
        title: 'Paintball',
        description:
          'As a fan of war games, paintball has become a thrilling activity for me. I love immersing myself in strategic battles, utilizing the tactics and strategies I\'ve learned from games. The adrenaline rush, the teamwork, and the competitive spirit make paintball an incredibly exciting and immersive sport',
        images: [
          '/images/hobbies/sports/paintball/img_1.jpg',
          '/images/hobbies/sports/paintball/img_2.jpg',
          '/images/hobbies/sports/paintball/img_3.jpg',
          '/images/hobbies/sports/paintball/img_4.jpg',
          '/images/hobbies/sports/paintball/img_5.jpg',
          '/images/hobbies/sports/paintball/img_6.jpg',
          '/images/hobbies/sports/paintball/img_7.jpg',
          '/images/hobbies/sports/paintball/img_8.jpg',
          '/images/hobbies/sports/paintball/img_9.jpg',
          '/images/hobbies/sports/paintball/img_10.jpg',
          '/images/hobbies/sports/paintball/img_11.jpg',
          '/images/hobbies/sports/paintball/img_12.jpg',
          '/images/hobbies/sports/paintball/img_13.jpg',
        ],
        // TODO: Add missing paintball photos
      },
      {
        title: 'Skateboarding',
        description:
          'Skateboarding was once my greatest passion during my school days. I spent countless hours with my friends, honing our skills and practicing tricks. The skateboarding community, the exhilaration of nailing a new trick, and the creative expression through freestyle maneuvers made skateboarding an unforgettable part of my life',
        images: [
          '/images/hobbies/sports/skate_boarding/img_1.jpg',
          '/images/hobbies/sports/skate_boarding/img_2.jpg',
        ],
      },
      {
        title: 'Soccer',
        description:
          'Although I\'m not particularly skilled at soccer, it has become a beloved sport among my friends. I engage in soccer primarily to spend quality time with them, enjoying friendly matches and bonding over shared experiences on the field. The camaraderie, laughter, and shared memories make playing soccer a cherished part of my social life',
        images: [
          '/images/hobbies/sports/soccer/img_1.jpg',
          '/images/hobbies/sports/soccer/img_2.jpg',
          '/images/hobbies/sports/soccer/img_3.jpg',
        ],
      },

      {
        title: 'Hiking',
        description:
          'I have a genuine love for walking, and I could easily spend hours on foot, especially when surrounded by breathtaking sights such as mountains, valleys, or simply under a serene blue sky. The tranquility and inner peace that walking brings are truly indescribable',
        images: [
          '/images/hobbies/sports/hiking/img_1.jpg',
          '/images/hobbies/sports/hiking/img_2.jpg',
          '/images/hobbies/sports/hiking/img_3.jpg',
          '/images/hobbies/sports/hiking/img_4.jpg',
          '/images/hobbies/sports/hiking/img_5.jpg',
          '/images/hobbies/sports/hiking/img_6.jpg',
          '/images/hobbies/sports/hiking/img_7.jpg',
          '/images/hobbies/sports/hiking/img_8.jpg',
        ],
      },
      {
        title: 'Others',
        description:
          'I have ventured into numerous sports and enjoyed the thrill of each one. However, my true passion lies in pursuing extreme sports and activities. From skydiving and parkour to scuba diving, I thrive on the adrenaline rush and the sense of pushing my limits. The exhilaration and the unique experiences gained from these daring pursuits are unparalleled',
        images: [
          '/images/hobbies/sports/others/img_1.jpg',
          '/images/hobbies/sports/others/img_2.jpg',
          '/images/hobbies/sports/others/img_3.JPG',
          '/images/hobbies/sports/others/img_4.jpg',
          '/images/hobbies/sports/others/img_5.jpg',
        ],
        // TODO: Add skydiving photos
      },
    ],
  },
  ROLES: {
    title: 'Roles',
    description: 'TODO: Add description',
    sections: [
      {
        title: 'Short films',
        description:
          'I have been involved in two short films, one as the main actor and the other in a supporting role. These experiences have deepened my passion for acting and allowed me to explore different characters and their stories',
        images: [
          '/images/hobbies/roles/short_films/img_1.jpg',
          '/images/hobbies/roles/short_films/img_2.jpg',
          '/images/hobbies/roles/short_films/img_3.jpg',
          '/images/hobbies/roles/short_films/img_4.jpg',
          '/images/hobbies/roles/short_films/img_5.jpg',
        ],
        social: {
          youtube: 'https://www.youtube.com/channel/UCNyP-BLXPVA5PS0epWcDCiQ',
        },
      },
      {
        title: 'Boy scout',
        description: 'TODO: Add description',
        images: [
          '/images/hobbies/roles/boy_scout/img_1.jpg',
          '/images/hobbies/roles/boy_scout/img_2.jpg',
          '/images/hobbies/roles/boy_scout/img_3.jpg',
          '/images/hobbies/roles/boy_scout/img_4.jpg',
          '/images/hobbies/roles/boy_scout/img_5.jpg',
        ],
      },
    ],
  },
  FILMS: {
    title: 'Roles',
    description: 'Films',
    sections: [
      {
        title: 'Movies',
        description:
          'Although I\'m not a devoted movie watcher, I can appreciate the power of a well-crafted film. While some movies may follow familiar narrative structures like the Hero\'s journey, there are always exceptional films that captivate me with their thought-provoking stories, unique perspectives, and the ability to challenge my thinking',
        images: ['/images/hobbies/films/movies/img_1.jpeg'],
        // TODO: Add
        // Her
        // Forrest Gump
        // Spirited Away
        // Parasite
        // Interstellar
        // Everything Everywhere All at Once
        // Green Book
      },
      {
        title: 'Series',
        description:
          'Similar to movies, I approach TV series with a discerning eye. While many series may follow common storytelling tropes, there are remarkable ones that break new ground and offer compelling narratives. I enjoy immersing myself in series that challenge conventions, explore diverse themes, and offer fresh perspectives on storytelling',
        images: [
          '/images/hobbies/films/series/img_1.jpg',
          '/images/hobbies/films/series/img_2.jpg',
          '/images/hobbies/films/series/img_3.jpeg',
          '/images/hobbies/films/series/img_4.jpg',
        ],
        // TODO: Add
        // Breaking Bad
        // Chernobyl
        // Stranger Things
        // Mr Robot
      },
      {
        title: 'Anime',
        description:
          'Anime made a profound impact on me from a young age with its distinctive storytelling and diverse range of topics. The narratives were often different from what I was accustomed to, and that\'s what drew me in. The versatility of anime, spanning genres from fantasy and sci-fi to slice of life, allows me to explore captivating worlds and encounter thought-provoking themes',
        images: [
          '/images/hobbies/films/anime/img_1.jpg',
          '/images/hobbies/films/anime/img_2.png',
          '/images/hobbies/films/anime/img_3.jpg',
          '/images/hobbies/films/anime/img_4.png',
          '/images/hobbies/films/anime/img_5.jpg',
        ],
        // TODO: Add
        // Psychopass
        // Trigun
        // Death Note
        // Kimetsu no Yaiba
        // Code Geass
        // Neon Genesis Evangelion
        // One Piece
        // Bleach
        // Btooom!
      },
    ],
  },
  RANDOM: {
    title: 'Random',
    description: 'Random',
    sections: [
      {
        title: 'Random',
        description: 'TODO:',
        images: [
          '/images/hobbies/random/img_1.jpg',
          '/images/hobbies/random/img_2.jpg',
          '/images/hobbies/random/img_3.jpg',
          '/images/hobbies/random/img_4.jpg',
          '/images/hobbies/random/img_5.jpg',
          '/images/hobbies/random/img_6.jpg',
          '/images/hobbies/random/img_7.jpg',
          '/images/hobbies/random/img_8.jpg',
          '/images/hobbies/random/img_9.jpg',
          '/images/hobbies/random/img_10.jpg',
          '/images/hobbies/random/img_11.jpg',
          '/images/hobbies/random/img_12.jpg',
          '/images/hobbies/random/img_13.jpeg',
          '/images/hobbies/random/img_14.jpg',
          '/images/hobbies/random/img_15.jpg',
          '/images/hobbies/random/img_16.jpg',
          '/images/hobbies/random/img_17.jpg',
          '/images/hobbies/random/img_18.jpg',
          '/images/hobbies/random/img_19.jpg',
          '/images/hobbies/random/img_20.jpg',
          '/images/hobbies/random/img_21.jpg',
          '/images/hobbies/random/img_22.jpg',
          '/images/hobbies/random/img_23.jpeg',
          '/images/hobbies/random/img_24.jpeg',
          '/images/hobbies/random/img_25.jpeg',
          '/images/hobbies/random/img_26.jpg',
          '/images/hobbies/random/img_27.jpg',
          '/images/hobbies/random/img_28.jpeg',
          '/images/hobbies/random/img_29.jpeg',
        ],
      },
    ],
  },
}

export default DATA
