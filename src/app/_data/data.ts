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

export enum LANGUAGES {
  EN = 'EN',
  ES = 'ES',
}

export enum PALETTE {
  LIGHT = 'light',
  DARK = 'dark',
}

export const Misc = (language: LANGUAGES = LANGUAGES.EN): Misc => ({
  intro: {EN: 'Hi, I\'m', ES: 'Hola, soy'}[language],
  underDevelopment: {
    icon: 'under_development',
    title: {EN: 'Under development', ES: 'En desarrollo'}[language],
    description: {
      EN: 'Welcome to my website! I appreciate your visit. While the site is currently under development, feel free to explore and check back anytime you\'d like',
      ES: '¡Bienvenido a mi sitio web! Aprecio tu visita. Aunque el sitio está actualmente en desarrollo, siéntete libre de explorar y vuelve cuando quieras',
    }[language],
  },
  featureUnderDevelopment: {
    icon: 'under_development',
    title: {EN: 'Under development', ES: 'En desarrollo'}[language],
    description: {
      EN: 'Hey, sorry! This feature is still under development, but Mario was already notified so he will prioritize this',
      ES: 'Hola, ¡Lo lamento! Esta funcionalidad todavía se encuentra en desarrollo, pero Mario ya fue notificado para que priorize esta funcionalidad',
    }[language],
  },
  workInProgress: {
    icon: 'under_development',
    title: {EN: 'Work in progress', ES: 'Trabajo en progreso'}[language],
    description: {
      EN: 'This section is currently under development. Please check back soon!',
      ES: 'Esta sección está actualmente en desarrollo. ¡Por favor, vuelve pronto!',
    }[language],
  },
  showAll: {EN: 'Show all', ES: 'Mostrar todo'}[language],
  hideAll: {EN: 'Hide all', ES: 'Ocultar todo'}[language],
  at: {EN: 'at', ES: 'en'}[language],
  contact: {EN: 'Contact', ES: 'Contacto'}[language],
  visit: {EN: 'Visit', ES: 'Visitar'}[language],
  goBackHome: {EN: 'Go back home', ES: 'Volver al inicio'}[language],
})

const Data = (language: LANGUAGES = LANGUAGES.EN): Data => ({
  PERSONAL: {
    name: 'Mario Payan',
    role: {
      EN: 'Full Stack Principal Software Developer',
      ES: 'Desarrollador de Software Principal Full Stack',
    }[language],
    url: 'https://www.mariopayan.com/',
    quote: {
      EN: 'The cake is a lie',
      ES: 'La libertad subjetiva es la ignorancia de las causas que nos determinan',
    }[language],
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
      BUSINESS: {
        EN: `Full Stack Principal Software Developer with ${dateDiff(
          '2017-10',
          '',
          true
        )} of experience with focus on software development, \
          algorithms design, software as a service and clean code. \
          Challenge driven, always willing to learn, passionate about new technologies, teamwork and code writing`,
        ES: `Desarrollador de Software Principal Full Stack con ${dateDiff(
          '2017-10',
          '',
          true
        )} de experiencia con enfoque en desarrollo de software, \
          diseño de algoritmos, software como servicio y código limpio. \
          Motivado por desafíos, siempre dispuesto a aprender, apasionado por las nuevas tecnologías, \
          el trabajo en equipo y la escritura de código`,
      }[language],
      CHILL: {
        EN: 'Colombian software developer by day, an empirical musician whenever inspiration strikes, \
          a dedicated gamer in my downtime, and an adventurer always on the move, and definitely a random person. ¯\\_(ツ)_/¯',
        ES: 'Desarrollador de software colombiano durante el día, un músico empírico cuando la inspiración llega, \
          un jugador dedicado en mi tiempo libre, y un aventurero siempre en movimiento, y definitivamente una persona curiosa cuando menos. ¯\\_(ツ)_/¯',
      }[language],
    },
  },

  BUSINESS_SECTIONS: [
    {
      label: {EN: 'About Me', ES: 'Sobre Mí'}[language],
      key: SECTIONS.ABOUT_ME_BUSINESS,
    },
    {label: {EN: 'Skills', ES: 'Habilidades'}[language], key: SECTIONS.SKILLS},
    {
      label: {EN: 'Experience', ES: 'Experiencia'}[language],
      key: SECTIONS.EXPERIENCE,
    },
    {
      label: {EN: 'Projects', ES: 'Proyectos'}[language],
      key: SECTIONS.PROJECTS,
    },
    {
      label: {EN: 'Education', ES: 'Educación'}[language],
      key: SECTIONS.EDUCATION,
    },
  ],

  CHILL_SECTIONS: [
    {
      label: {EN: 'About Me', ES: 'Sobre Mí'}[language],
      key: SECTIONS.ABOUT_ME_CHILL,
    },
    {label: {EN: 'Music', ES: 'Música'}[language], key: SECTIONS.MUSIC},
    {label: {EN: 'Traveling', ES: 'Viajes'}[language], key: SECTIONS.TRAVELING},
    {label: {EN: 'Dogs', ES: 'Perros'}[language], key: SECTIONS.DOGS},
    {label: {EN: 'Geek', ES: 'Friki'}[language], key: SECTIONS.GEEK},
    {label: {EN: 'Roles', ES: 'Roles'}[language], key: SECTIONS.ROLES},
    {label: {EN: 'Films', ES: 'Películas'}[language], key: SECTIONS.FILMS},
    {label: {EN: 'Sports', ES: 'Deportes'}[language], key: SECTIONS.SPORTS},
    {label: {EN: 'Random', ES: 'Aleatorio'}[language], key: SECTIONS.RANDOM},
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
      key: 'Coding',
      title: {EN: 'Coding', ES: 'Lenguajes'}[language],
      skills: [{title: 'Python'}, {title: 'Javascript'}, {title: 'TypeScript'}],
      rgbColor: rgbColors.techSkill.coding,
    },
    {
      key: 'Front End Frameworks',
      title: {EN: 'Front End Frameworks', ES: 'Frameworks de Front End'}[language],
      skills: [{title: 'React'}, {title: 'NextJS'}, {title: 'AngularJS'}],
      rgbColor: rgbColors.techSkill.frontEndFrameworks,
    },
    {
      key: 'Back End Frameworks',
      title: {EN: 'Back End Frameworks', ES: 'Frameworks de Back End'}[language],
      skills: [{title: 'Django'}, {title: 'Django REST'}],
      rgbColor: rgbColors.techSkill.backEndFrameworks,
    },
    {
      key: 'Markup',
      title: {EN: 'Markup', ES: 'Etiquetado'}[language],
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
      key: 'Database',
      title: {EN: 'Database', ES: 'Base de Datos'}[language],
      skills: [{title: 'PostgreSQL'}, {title: 'SQLite'}],
      rgbColor: rgbColors.techSkill.database,
    },
    {
      key: 'Version Control',
      title: {EN: 'Version Control', ES: 'Control de Versiones'}[language],
      skills: [{title: 'Git'}, {title: 'GitHub'}, {title: 'GitLab'}, {title: 'BitBucket'}],
      rgbColor: rgbColors.techSkill.versionControl,
    },
    {
      key: 'Scripting',
      title: {EN: 'Scripting', ES: 'Scripting'}[language],
      skills: [{title: 'Bash'}],
      rgbColor: rgbColors.techSkill.scripting,
    },
    {
      key: 'Testing',
      title: {EN: 'Testing', ES: 'Pruebas'}[language],
      skills: [{title: 'Cypress'}, {title: 'Jasmine'}, {title: 'Puppeteer'}, {title: 'Appium'}, {title: 'Selenium'}],
      rgbColor: rgbColors.techSkill.testing,
    },
    {
      key: 'Operative Systems',
      title: {EN: 'Operative Systems', ES: 'Sistemas Operativos'}[language],
      skills: [{title: 'OSx'}, {title: 'Linux'}],
      rgbColor: rgbColors.techSkill.operativeSystem,
    },
  ],

  SOFT_SKILLS: [
    {
      key: 'Personal',
      title: {EN: 'Personal', ES: 'Personal'}[language],
      skills: [
        {
          key: 'Willingness to Learn',
          title: {EN: 'Willingness to Learn', ES: 'Disposición para aprender'}[language],
        },
        {
          key: 'Proactivity',
          title: {EN: 'Proactivity', ES: 'Proactividad'}[language],
        },
      ],
      rgbColor: rgbColors.softSkill.personal,
    },
    {
      key: 'Methodical',
      title: {EN: 'Methodical', ES: 'Metódico'}[language],
      skills: [
        {
          key: 'Problem solving',
          title: {EN: 'Problem solving', ES: 'Resolución de problemas'}[language],
        },
        {
          key: 'Clean Code',
          title: {EN: 'Clean Code', ES: 'Código limpio'}[language],
        },
      ],
      rgbColor: rgbColors.softSkill.methodical,
    },
    {
      key: 'Social',
      title: {EN: 'Social', ES: 'Social'}[language],
      skills: [
        {
          key: 'Communication',
          title: {EN: 'Communication', ES: 'Comunicación'}[language],
        },
        {
          key: 'Teamwork',
          title: {EN: 'Teamwork', ES: 'Trabajo en equipo'}[language],
        },
        {
          key: 'Adaptability',
          title: {EN: 'Adaptability', ES: 'Adaptabilidad'}[language],
        },
      ],
      rgbColor: rgbColors.softSkill.social,
    },
  ],

  EXPERIENCE: [
    {
      where: 'Alert Logic',
      from: '2017-01',
      to: '2017-07',
      position: {EN: 'Web Developer', ES: 'Desarrollador Web'}[language],
      rgbColor: rgbColors.experience.alertLogic,
      image: '/images/jobs/alert_logic.svg',
      achievements: [
        {
          EN: 'Increased test coverage of a PHP application',
          ES: 'Aumenté la cobertura de pruebas de una aplicación PHP',
        }[language],
        {
          EN: 'Supported application defects/feature requests for JavaScript, jQuery, and PHP code',
          ES: 'Realicé soporte de defectos/solicitudes de características de la aplicación para código JavaScript, jQuery y PHP',
        }[language],
        {
          EN: 'Improved UI and performance of web applications',
          ES: 'Mejoré la interfaz de usuario y el rendimiento de las aplicaciones web',
        }[language],
        {
          EN: 'Contributed to software development using SCRUM agile methodology',
          ES: 'Contribuí al desarrollo de software utilizando la metodología ágil SCRUM',
        }[language],
      ],
    },
    {
      where: 'Alert Logic',
      from: '2017-10',
      to: '2018-11',
      position: {EN: 'Back-End Developer', ES: 'Desarrollador Back-End'}[language],
      rgbColor: rgbColors.experience.alertLogic,
      image: '/images/jobs/alert_logic.svg',
      achievements: [
        {
          EN: 'Automated internal services',
          ES: 'Automaticé servicios internos',
        }[language],
        {
          EN: 'Provided and supported internal tools for analysts',
          ES: 'Proveí y apoyé herramientas internas para analistas',
        }[language],
        {
          EN: 'Managed and maintained Linux nodes with Chef',
          ES: 'Administré y mantuve nodos Linux con Chef',
        }[language],
      ],
    },
    {
      where: 'Alert Logic',
      from: '2018-11',
      to: '2019-11',
      position: {EN: 'Full-Stack Developer', ES: 'Desarrollador Full-Stack'}[language],
      rgbColor: rgbColors.experience.alertLogic,
      image: '/images/jobs/alert_logic.svg',
      achievements: [
        {
          EN: 'Acted as SCRUM master developer',
          ES: 'Actué como desarrollador SCRUM master',
        }[language],
        {
          EN: 'Contributed to implementing continuous integration and continuous delivery pipelines',
          ES: 'Contribuí a implementar tuberías de integración continua y entrega continua',
        }[language],
        {
          EN: 'Implemented End-to-end software testing methodology and architecture',
          ES: 'Implementé la metodología y arquitectura de pruebas de software de extremo a extremo',
        }[language],
        {
          EN: 'Developed new UI experience for one of the most used products',
          ES: 'Desarrollé una nueva experiencia de usuario para uno de los productos más utilizados',
        }[language],
      ],
    },
    {
      where: 'Alert Logic',
      from: '2019-11',
      to: '2021-07',
      position: {EN: 'Mobile Developer', ES: 'Desarrollador Móvil'}[language],
      rgbColor: rgbColors.experience.alertLogic,
      image: '/images/jobs/alert_logic.svg',
      achievements: [
        {
          EN: 'Worked on the implementation of an iOS mobile application',
          ES: 'Trabajé en la implementación de una aplicación móvil iOS',
        }[language],
        {
          EN: 'Built an Android mobile application from scratch',
          ES: 'Construí una aplicación móvil Android desde cero',
        }[language],
      ],
    },
    {
      where: 'Redux',
      from: '2021-07',
      to: '',
      position: {EN: 'Principal Software Engineer', ES: 'Ingeniero Principal de Software'}[language],
      rgbColor: rgbColors.experience.redux,
      image: '/images/jobs/redux.svg',
      achievements: [
        {
          EN: 'Led end-to-end software development lifecycle, taking full ownership of decision-making, architectural design, and UI/UX considerations',
          ES: 'Lideré el ciclo de vida del desarrollo de software de extremo a extremo, tomando la plena propiedad de la toma de decisiones, el diseño arquitectónico y las consideraciones de UI/UX',
        }[language],
        {
          EN: 'Directly engaged stakeholders, capturing business logic and delivering software solution that met expectations',
          ES: 'Participé directamente con los interesados, capturando la lógica de negocio y entregando una solución de software que cumplió con las expectativas',
        }[language],
      ],
    },
    {
      where: 'Deft',
      from: '2020-01',
      to: '',
      position: {EN: 'Co-founder & Teacher', ES: 'Cofundador y Profesor'}[language],
      rgbColor: rgbColors.experience.deft,
      image: '/images/jobs/deft.png',
      achievements: [
        {
          EN: 'Developed software and web apps based on client demands',
          ES: 'Desarrollé software y aplicaciones web basadas en las demandas del cliente',
        }[language],
        {
          EN: 'Taught new technologies, good practices, tools, etc., to students',
          ES: 'Enseñé nuevas tecnologías, buenas prácticas, herramientas, etc., a los estudiantes',
        }[language],
      ],
    },
    {
      where: 'CIER-Sur',
      from: '2016-01',
      to: '2016-06',
      position: {
        EN: 'Web Content Developer',
        ES: 'Desarrollador de Contenido Web',
      }[language],
      rgbColor: rgbColors.experience.cierSur,
      image: '/images/jobs/cier_sur.png',
      achievements: [
        {
          EN: 'Built learning objects based on JavaScript code with CSS',
          ES: 'Construí objetos de aprendizaje basados en código JavaScript con CSS',
        }[language],
        {
          EN: 'Contributed to building a framework for reusing existing code in new learning objects',
          ES: 'Contribuí a construir un marco para reutilizar el código existente en nuevos objetos de aprendizaje',
        }[language],
      ],
    },
  ],

  EDUCATION: [
    {
      where: 'Universidad del Valle',
      from: '2012-01',
      to: '2017-01',
      position: {
        EN: 'B.S. Systems Engineering and Computer Science',
        ES: 'B.S. Ingeniería de Sistemas y Ciencias de la Computación',
      }[language],
      rgbColor: rgbColors.education.univalle,
      image: '/images/projects/univalle.svg',
      achievements: [
        {
          EN: 'National Awarded Academic Scholarship: Bachilleres por Colombia Mario Galán Gómez, an award given to the 70 best students in the country',
          ES: 'Beca Académica Nacional Otorgada: Bachilleres por Colombia Mario Galán Gómez, un premio otorgado a los 70 mejores estudiantes del país',
        }[language],
        {
          EN: 'Awarded Academic Scholarships for being at the top of the class',
          ES: 'Becas Académicas Otorgadas por estar en la cima de la clase',
        }[language],
      ],
    },
  ],

  PROJECTS: [
    {
      label: {EN: 'Survey Tool', ES: 'Herramienta de Encuestas'}[language],
      description: {
        EN: 'A tool that enables user characterization through surveys to find the perfect match for specific needs',
        ES: 'Una herramienta que permite la caracterización de usuarios a través de encuestas',
      }[language],
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
      label: {EN: 'This site', ES: 'Este sitio'}[language],
      description: {
        EN: 'A website created for personal enjoyment and showcasing projects',
        ES: 'Un sitio web creado para disfrute personal y para mostrar proyectos',
      }[language],
      image: '/images/profile_pixel.png',
      stack: ['React', 'NextJS', 'TypeScript', 'Material UI', 'Flexbox', 'HTML5', 'CSS3', 'SASS', 'Git', 'GitHub'],
      link: 'https://www.mariopayan.com/',
    },
    {
      label: {EN: 'Under degree project', ES: 'Proyecto de grado'}[language],
      description: {
        EN: 'An application of Augmented Reality to facilitate the self-assessment process of the System Engineering Academic Program',
        ES: 'Una aplicación de Realidad Aumentada para facilitar el proceso de autoevaluación del Programa Académico de Ingeniería de Sistemas',
      }[language],
      image: '/images/projects/univalle.svg',
      stack: ['Vuforia', 'Unity', 'C#'],
      link: '',
    },
    {
      label: {EN: 'Deft website', ES: 'Sitio web de Deft'}[language],
      description: {
        EN: 'A landing page for Deft Soluciones, a software development company',
        ES: 'Una página de aterrizaje para Deft Soluciones, una empresa de desarrollo de software',
      }[language],
      image: '/images/projects/deft.png',
      stack: ['Javascript', 'HTML5', 'CSS3', 'Git', 'GitHub', 'Bootstrap'],
      // link: 'https://deftsoluciones.com/',
    },
    {
      label: {EN: 'Alert Logic web app', ES: 'Aplicación web de Alert Logic'}[language],
      description: {
        EN: 'A Web app for Alert Logic customers',
        ES: 'Una aplicación web para clientes de Alert Logic',
      }[language],
      image: '/images/projects/alert_logic_web.png',
      stack: ['jQuery', 'AngularJS', 'Bootstrap', 'PHP', 'HTML5', 'CSS3', 'Git', 'GitHub', 'PostgreSQL'],
      // link: 'https://alertlogic.com/',
    },
    {
      label: {
        EN: 'Alert Logic mobile app',
        ES: 'Aplicación móvil de Alert Logic',
      }[language],
      description: {
        EN: 'A mobile app for Alert Logic customers available on Android and iOS',
        ES: 'Una aplicación móvil para clientes de Alert Logic disponible en Android e iOS',
      }[language],
      image: '/images/projects/alert_logic_mobile.png',
      stack: ['React Native', 'Javascript', 'HTML5', 'CSS3', 'Git', 'GitHub'],
      link: 'https://play.google.com/store/apps/details?id=com.alertlogic.secalert',
    },
    {
      label: {EN: 'Placa y Cédula (Android)', ES: 'Placa y Cédula (Android)'}[language],
      description: {
        EN: 'An Android app to determine when individuals can go outside during the pandemic situation in Colombia',
        ES: 'Una aplicación de Android para determinar cuándo las personas pueden salir durante la situación de pandemia en Colombia',
      }[language],
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
      label: {EN: 'Placa y Cédula (Web)', ES: 'Placa y Cédula (Web)'}[language],
      description: {
        EN: 'A web app to determine when individuals can go outside during the pandemic situation in Colombia',
        ES: 'Una aplicación web para determinar cuándo las personas pueden salir durante la situación de pandemia en Colombia',
      }[language],
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
      label: {EN: 'SVG Learning Tool', ES: 'Herramienta de Aprendizaje SVG'}[language],
      description: {
        EN: 'A simple tool created during free time to help others understand how SVG works',
        ES: 'Una herramienta sencilla creada durante el tiempo libre para ayudar a otros a entender cómo funciona SVG',
      }[language],
      image: '/images/projects/svg.png',
      stack: ['React', 'Javascript', 'HTML5', 'CSS3', 'SASS', 'Git', 'GitHub', 'Typescript', 'Material UI'],
      link: 'https://mariopayan.github.io/SvgLearningTool/',
    },
    {
      label: {
        EN: 'Alert Logic internal services',
        ES: 'Servicios internos de Alert Logic',
      }[language],
      description: {
        EN: 'Responsible for supporting and maintaining several internal services at Alert Logic',
        ES: 'Responsable de dar soporte y mantener varios servicios internos en Alert Logic',
      }[language],
      image: '/images/projects/alert_logic_heimdall.jpg',
      stack: ['AngularJS', 'Bootstrap', 'PHP', 'Chef', 'Linux', 'Bash', 'Git', 'GitHub', 'PostgreSQL'],
      // link: 'https://alertlogic.com/',
    },
  ],

  MUSIC: {
    title: {EN: 'Music', ES: 'Música'}[language],
    description: {
      EN: 'I have been an empirical musician since the age of 14, exploring various instruments and genres. Although I don\'t dedicate myself to it full-time, I find great joy in creating and sharing my music',
      ES: 'He sido músico empírico desde los 14 años, explorando varios instrumentos y géneros. Aunque no me dedico a ello a tiempo completo, encuentro gran alegría en crear y compartir mi música',
    }[language],
    sections: [
      {
        title: 'Solo',
        description: {
          EN: 'I am primarily a guitarist, but I also dabble in other instruments and can contribute backing vocals. Most of the time, I enjoy creating music at home for my own personal enjoyment',
          ES: 'Soy principalmente guitarrista, pero también experimento con otros instrumentos y puedo contribuir con coros. La mayoría de las veces, disfruto creando música en casa para mi propio disfrute personal',
        }[language],
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
          // TODO: Add slack cover
        ],
      },
      {
        title: 'Falsete Proyecto',
        description: {
          EN: 'I have a cherished music project with my college friends where we indulge in our favorite genres, including ballads, Pacific music, reggaeton, salsa, and more. We put our unique stamp on each style, infusing it with our own creative flair',
          ES: 'Tengo un apreciado proyecto musical con mis amigos de la universidad en el que nos deleitamos con nuestros géneros favoritos, incluyendo baladas, música del Pacífico, reguetón, salsa, y más. Ponemos nuestro sello único en cada estilo, infundiéndolo con nuestro propio toque creativo',
        }[language],
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
        description: {
          EN: 'I had the opportunity to be part of an urban music project where we ventured into various musical experiments, pushing the boundaries and exploring new sounds',
          ES: 'Tuve la oportunidad de ser parte de un proyecto de música urbana donde nos aventuramos en varios experimentos musicales, empujando los límites y explorando nuevos sonidos',
        }[language],
        images: ['/images/hobbies/music/cero_grados/img_1.jpg'],
        social: {
          facebook: 'https://www.facebook.com/cerogradosmusic',
          instagram: 'https://www.instagram.com/cerogradosmusic/',
          youtube: 'https://www.youtube.com/channel/UCfI30-3Jxhtdy9v0ZYnzcbw',
        },
      },
      {
        title: 'Band AL',
        description: {
          EN: 'I was part of a band that initially formed for fun while working at a company, simply as a means of spending time together. Unexpectedly, our passion and talent led us to perform gigs, entertaining the rest of the company',
          ES: 'Fui parte de una banda que se formó inicialmente por diversión mientras trabajábamos en una empresa, simplemente como una forma de pasar tiempo juntos. Inesperadamente, nuestra pasión y talento nos llevó a realizar conciertos, entreteniendo al resto de la empresa',
        }[language],
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
        description: {
          EN: 'My very first band was a rock and metal outfit driven by our youthful desire to rock and roll. Our most significant achievement was performing in front of a crowd of over 500 people, which seemed unimaginable to us at the time. Interestingly, we chose the name "Closed Eyes" as a tribute to our talented blind vocalist',
          ES: 'Mi primera banda fue un grupo de rock y metal impulsado por nuestro deseo juvenil de rock and roll. Nuestro logro más significativo fue tocar frente a una multitud de más de 500 personas, lo cual nos parecía inimaginable en ese momento. Curiosamente, elegimos el nombre "Ojos Cerrados" como tributo a nuestro talentoso vocalista ciego',
        }[language],
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
        description: {
          EN: 'During my early days of learning to play and sing, I embarked on a small project with a friend. Although we didn\'t collaborate extensively, we managed to record a few covers together. Looking back, I hope those recordings never see the light of day again',
          ES: 'Durante mis primeros días de aprendizaje para tocar y cantar, embarqué en un pequeño proyecto con un amigo. Aunque no colaboramos extensamente, logramos grabar algunas covers juntos. Mirando hacia atrás, espero que esas grabaciones nunca vuelvan a ver la luz del día',
        }[language],
        images: ['/images/hobbies/music/kyr/img_1.jpg', '/images/hobbies/music/kyr/img_2.jpg'],
      },
    ],
  },

  TRAVELING: {
    title: {EN: 'Traveling', ES: 'Viajes'}[language],
    description: {
      EN: 'Traveling is one of my greatest passions. No matter how small the journey, there is always so much to learn and experience',
      ES: 'Viajar es una de mis mayores pasiones. No importa cuán pequeño sea el viaje, siempre hay mucho que aprender y experimentar',
    }[language],
    sections: [
      {
        title: 'Colombia',
        description: {
          EN: 'Colombia, my lifelong home, is a country brimming with enchanting small destinations. Even after all these years, I continue to discover hidden gems that I never knew existed',
          ES: 'Colombia, mi hogar de toda la vida, es un país rebosante de pequeños destinos encantadores. Incluso después de todos estos años, sigo descubriendo joyas ocultas que nunca supe que existían',
        }[language],
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
    title: {EN: 'Dogs', ES: 'Perros'}[language],
    description: {
      EN: 'Seeing a dog and resisting the urge to pet it is a challenge I often struggle with. That\'s why this aspect becomes essential when describing myself – my unwavering love for dogs and my innate desire to shower them with affection',
      ES: 'Ver un perro y resistir el impulso de acariciarlo es un desafío con el que a menudo lucho. Por eso este aspecto se vuelve esencial al describirme: mi amor inquebrantable por los perros y mi deseo innato de colmarlos de afecto',
    }[language],
    sections: [
      {
        title: 'Sora',
        description: {
          EN: 'Sora, the dog I rescued, needs no extensive introduction. The photos of her speak volumes on their own, showcasing the love and joy she brings into my life',
          ES: 'Sora, la perra que rescaté, no necesita una introducción extensa. Las fotos de ella hablan por sí solas, mostrando el amor y la alegría que trae a mi vida',
        }[language],
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
        description: {
          EN: 'Puca, a dog my mother adopted, seamlessly became a cherished member of our family. While displaying remarkable aggression towards strangers, she radiates immense love and affection towards those within our household. Her contrasting nature speaks volumes about her fierce loyalty and unwavering devotion to our family unit',
          ES: 'Puca, una perra que adoptó mi madre, se convirtió sin problemas en un miembro preciado de nuestra familia. Aunque muestra una agresión notable hacia los extraños, irradia un inmenso amor y afecto hacia los que están dentro de nuestra casa. Su naturaleza contrastante habla mucho sobre su feroz lealtad y su devoción inquebrantable a nuestra unidad familiar',
        }[language],
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
        title: {EN: 'Random dogs', ES: 'Otros perros'}[language],
        description: {
          EN: 'In this vast world brimming with dogs to shower with affection, I have been fortunate to make cherished canine companions during my journeys. Some of these furry friends have seamlessly become a part of my extended family, forging deep bonds that transcend mere friendship. I have even dedicated time to visit them, nurturing and cherishing the special connections we share',
          ES: 'En este vasto mundo lleno de perros a los que colmar de afecto, he tenido la suerte de hacer queridos compañeros caninos durante mis viajes. Algunos de estos amigos peludos se han convertido sin problemas en parte de mi familia extendida, forjando vínculos profundos que trascienden la mera amistad. Incluso he dedicado tiempo para visitarlos, nutriendo y apreciando las conexiones especiales que compartimos',
        }[language],
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
    title: {EN: 'Geek', ES: 'Friki'}[language],
    description: {
      EN: 'I\'m a fan of many geeky things, including technology, games, geopolitics, philosophy, and more. I have a deep curiosity and enjoy expanding my knowledge in various fields',
      ES: 'Soy fan de muchas cosas frikis, incluyendo tecnología, juegos, geopolítica, filosofía, y más. Tengo una profunda curiosidad y disfruto expandiendo mis conocimientos en varios campos',
    }[language],
    sections: [
      {
        title: {EN: 'Video games', ES: 'Videojuegos'}[language],
        description: {
          EN: 'Video games, to me, are the culmination of many art forms, including music, film, writing, and painting. They create immersive experiences that constantly evolve, and I find great joy in playing them',
          ES: 'Para mí, los videojuegos son la culminación de muchas formas de arte, incluyendo música, cine, escritura y pintura. Crean experiencias inmersivas que evolucionan constantemente, y encuentro gran alegría en jugarlos',
        }[language],
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
        title: {EN: 'Code challenges', ES: 'Desafíos de código'}[language],
        description: {
          EN: 'Challenging myself to write efficient, readable, and practical code using best practices is something I enjoy doing for fun. I love taking on coding challenges and continuously improving my skills in this area',
          ES: 'Desafiarme a escribir código eficiente, legible y práctico utilizando las mejores prácticas es algo que disfruto hacer por diversión. Me encanta enfrentarme a desafíos de codificación y mejorar continuamente mis habilidades en esta área',
        }[language],
        images: [
          '/images/hobbies/geek/code/img_1.jpg',
          '/images/hobbies/geek/code/img_2.png',
          '/images/hobbies/geek/code/img_3.jpg',
        ],
      },
    ],
  },

  SPORTS: {
    title: {EN: 'Sports', ES: 'Deportes'}[language],
    description: {
      EN: 'While I\'m not a fan of watching sports, I thoroughly enjoy participating in them. I have engaged in various sports throughout my life and continue to seek opportunities to try new ones',
      ES: 'Aunque no me gusta ver deportes, disfruto mucho participando en ellos. He practicado varios deportes a lo largo de mi vida y continúo buscando oportunidades para probar nuevos',
    }[language],
    sections: [
      {
        title: {EN: 'Kung Fu Xiaolin', ES: 'Kung Fu Xiaolin'}[language],
        description: {
          EN: 'Martial arts, in particular, fascinate me. I appreciate any sport that pushes my body beyond its limits, and martial arts excel at that. The discipline and skill involved in Kung Fu Xiaolin have captivated me',
          ES: 'Las artes marciales, en particular, me fascinan. Aprecio cualquier deporte que empuje mi cuerpo más allá de sus límites, y las artes marciales sobresalen en eso. La disciplina y habilidad involucradas en Kung Fu Xiaolin me han cautivado',
        }[language],
        images: [
          '/images/hobbies/sports/martial_arts/img_1.jpg',
          '/images/hobbies/sports/martial_arts/img_2.jpg',
          '/images/hobbies/sports/martial_arts/img_3.jpg',
        ],
        // TODO: Look for more photos, or medals
      },
      {
        title: {EN: 'Cycling', ES: 'Ciclismo'}[language],
        description: {
          EN: 'Cycling has been a significant part of my life since my university days. I would hop on my bike and embark on thrilling adventures, exploring new places no matter how far they were. The freedom, the sense of exploration, and the joy of pedaling through picturesque landscapes made cycling an exhilarating experience',
          ES: 'El ciclismo ha sido una parte significativa de mi vida desde mis días universitarios. Subiría a mi bicicleta y me embarcaría en emocionantes aventuras, explorando nuevos lugares sin importar cuán lejos estuvieran. La libertad, el sentido de la exploración y la alegría de pedalear por paisajes pintorescos hicieron del ciclismo una experiencia emocionante',
        }[language],
        images: ['/images/hobbies/sports/cycling/img_1.jpg', '/images/hobbies/sports/cycling/img_2.jpg'],
      },
      {
        title: {EN: 'Paintball', ES: 'Paintball'}[language],
        description: {
          EN: 'As a fan of war games, paintball has become a thrilling activity for me. I love immersing myself in strategic battles, utilizing the tactics and strategies I\'ve learned from games. The adrenaline rush, the teamwork, and the competitive spirit make paintball an incredibly exciting and immersive sport',
          ES: 'Como fan de los juegos de guerra, el paintball se ha convertido en una actividad emocionante para mí. Me encanta sumergirme en batallas estratégicas, utilizando las tácticas y estrategias que he aprendido de los juegos. La adrenalina, el trabajo en equipo y el espíritu competitivo hacen del paintball un deporte increíblemente emocionante e inmersivo',
        }[language],
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
        title: {EN: 'Skateboarding', ES: 'Patineta'}[language],
        description: {
          EN: 'Skateboarding was once my greatest passion during my school days. I spent countless hours with my friends, honing our skills and practicing tricks. The skateboarding community, the exhilaration of nailing a new trick, and the creative expression through freestyle maneuvers made skateboarding an unforgettable part of my life',
          ES: 'Patineta fue una vez mi mayor pasión durante mis días escolares. Pasé innumerables horas con mis amigos, perfeccionando nuestras habilidades y practicando trucos. La comunidad de skate, la emoción de clavar un nuevo truco y la expresión creativa a través de maniobras de estilo libre hicieron del skateboarding una parte inolvidable de mi vida',
        }[language],
        images: ['/images/hobbies/sports/skate_boarding/img_1.jpg', '/images/hobbies/sports/skate_boarding/img_2.jpg'],
      },
      {
        title: {EN: 'Soccer', ES: 'Fútbol'}[language],
        description: {
          EN: 'Although I\'m not particularly skilled at soccer, it has become a beloved sport among my friends. I engage in soccer primarily to spend quality time with them, enjoying friendly matches and bonding over shared experiences on the field. The camaraderie, laughter, and shared memories make playing soccer a cherished part of my social life',
          ES: 'Aunque no soy particularmente habilidoso en el fútbol, se ha convertido en un deporte querido entre mis amigos. Me involucro en el fútbol principalmente para pasar tiempo de calidad con ellos, disfrutando de partidos amistosos y compartiendo experiencias en el campo. La camaradería, la risa y los recuerdos compartidos hacen que jugar al fútbol sea una parte apreciada de mi vida social',
        }[language],
        images: [
          '/images/hobbies/sports/soccer/img_1.jpg',
          '/images/hobbies/sports/soccer/img_2.jpg',
          '/images/hobbies/sports/soccer/img_3.jpg',
        ],
      },

      {
        title: {EN: 'Hiking', ES: 'Senderismo'}[language],
        description: {
          EN: 'I have a genuine love for walking, and I could easily spend hours on foot, especially when surrounded by breathtaking sights such as mountains, valleys, or simply under a serene blue sky. The tranquility and inner peace that walking brings are truly indescribable',
          ES: 'Tengo un amor genuino por caminar, y fácilmente podría pasar horas a pie, especialmente cuando estoy rodeado de vistas impresionantes como montañas, valles, o simplemente bajo un cielo azul sereno. La tranquilidad y la paz interior que aporta caminar son realmente indescriptibles',
        }[language],
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
        title: {EN: 'Others', ES: 'Otros'}[language],
        description: {
          EN: 'I have ventured into numerous sports and enjoyed the thrill of each one. However, my true passion lies in pursuing extreme sports and activities. From skydiving and parkour to scuba diving, I thrive on the adrenaline rush and the sense of pushing my limits. The exhilaration and the unique experiences gained from these daring pursuits are unparalleled',
          ES: 'Me he aventurado en numerosos deportes y he disfrutado de la emoción de cada uno. Sin embargo, mi verdadera pasión reside en la búsqueda de deportes extremos y actividades. Desde el paracaidismo y el parkour hasta el buceo, prospero con la adrenalina y el sentido de empujar mis límites. La emoción y las experiencias únicas obtenidas de estas audaces persecuciones son inigualables',
        }[language],
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
    title: {EN: 'Roles', ES: 'Roles'}[language],
    description: {EN: 'TODO: Add description', ES: 'TODO: Añadir descripción'}[language],
    sections: [
      {
        title: {EN: 'Short films', ES: 'Cortometrajes'}[language],
        description: {
          EN: 'I have been involved in two short films, one as the main actor and the other in a supporting role. These experiences have deepened my passion for acting and allowed me to explore different characters and their stories',
          ES: 'He participado en dos cortometrajes, uno como actor principal y el otro en un papel secundario. Estas experiencias han profundizado mi pasión por la actuación y me han permitido explorar diferentes personajes y sus historias',
        }[language],
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
        title: {EN: 'Boy scout', ES: 'Boy scout'}[language],
        description: {
          EN: 'TODO: Add description',
          ES: 'TODO: Añadir descripción',
        }[language],
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
    title: {EN: 'Films', ES: 'Películas'}[language],
    description: {EN: 'TODO: Add description', ES: 'TODO: añadir descripción'}[language],
    sections: [
      {
        title: {EN: 'Movies', ES: 'Películas'}[language],
        description: {
          EN: 'Although I\'m not a devoted movie watcher, I can appreciate the power of a well-crafted film. While some movies may follow familiar narrative structures like the Hero\'s journey, there are always exceptional films that captivate me with their thought-provoking stories, unique perspectives, and the ability to challenge my thinking',
          ES: 'Aunque no soy un ávido espectador de películas, puedo apreciar el poder de una película bien hecha. Mientras que algunas películas pueden seguir estructuras narrativas familiares como el viaje del héroe, siempre hay películas excepcionales que me cautivan con sus historias que hacen pensar, perspectivas únicas y la capacidad de desafiar mi forma de pensar',
        }[language],
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
        title: {EN: 'Series', ES: 'Series'}[language],
        description: {
          EN: 'Similar to movies, I approach TV series with a discerning eye. While many series may follow common storytelling tropes, there are remarkable ones that break new ground and offer compelling narratives. I enjoy immersing myself in series that challenge conventions, explore diverse themes, and offer fresh perspectives on storytelling',
          ES: 'Al igual que las películas, abordo las series de televisión con un ojo crítico. Mientras que muchas series pueden seguir clichés de narración comunes, hay otras notables que rompen esquemas y ofrecen narrativas convincentes. Disfruto sumergiéndome en series que desafían las convenciones, exploran temas diversos y ofrecen perspectivas frescas sobre la narrativa',
        }[language],
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
        title: {EN: 'Anime', ES: 'Anime'}[language],
        description: {
          EN: 'Anime made a profound impact on me from a young age with its distinctive storytelling and diverse range of topics. The narratives were often different from what I was accustomed to, and that\'s what drew me in. The versatility of anime, spanning genres from fantasy and sci-fi to slice of life, allows me to explore captivating worlds and encounter thought-provoking themes',
          ES: 'El anime tuvo un profundo impacto en mí desde una edad temprana con su narrativa distintiva y su diversa gama de temas. Las narrativas a menudo eran diferentes a lo que estaba acostumbrado, y eso es lo que me atrajo. La versatilidad del anime, que abarca géneros desde la fantasía y la ciencia ficción hasta la vida cotidiana, me permite explorar mundos cautivadores y encontrar temas que invitan a la reflexión',
        }[language],
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
    title: {EN: 'Random', ES: 'Aleatorio'}[language],
    description: {EN: 'TODO: Random', ES: 'TODO: Aleatorio'}[language],
    sections: [
      {
        title: {EN: 'Random', ES: 'Aleatorio'}[language],
        description: {EN: 'TODO:', ES: 'TODO:'}[language],
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
})

export default Data

// TODO: Reduce the number of images in some sections
// TODO: Separate Redux Clients
// TODO: Add TeamSense Project
// TODO: Change enum strings to numbers
