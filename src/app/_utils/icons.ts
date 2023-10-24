import {getKeyFromLabel} from '@/utils/misc'

const getDevIconURL: GetDevIconURL = url => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${url}`

import BugReport from '@mui/icons-material/BugReport'
import Code from '@mui/icons-material/Code'
import ConstructionIcon from '@mui/icons-material/Construction'
import Email from '@mui/icons-material/Email'
import Engineering from '@mui/icons-material/Engineering'
import Facebook from '@mui/icons-material/Facebook'
import GitHub from '@mui/icons-material/GitHub'
import Group from '@mui/icons-material/Group'
import Instagram from '@mui/icons-material/Instagram'
import IntegrationInstructions from '@mui/icons-material/IntegrationInstructions'
import LaptopChromebook from '@mui/icons-material/LaptopChromebook'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Movie from '@mui/icons-material/Movie'
import Moving from '@mui/icons-material/Moving'
import MusicNote from '@mui/icons-material/MusicNote'
import Person from '@mui/icons-material/Person'
import Pets from '@mui/icons-material/Pets'
import QuestionMark from '@mui/icons-material/QuestionMark'
import School from '@mui/icons-material/School'
import SelfImprovement from '@mui/icons-material/SelfImprovement'
import SportsEsports from '@mui/icons-material/SportsEsports'
import SportsSoccer from '@mui/icons-material/SportsSoccer'
import Storage from '@mui/icons-material/Storage'
import TheaterComedy from '@mui/icons-material/TheaterComedy'
import TwoWheeler from '@mui/icons-material/TwoWheeler'
import WhatsApp from '@mui/icons-material/WhatsApp'
import Work from '@mui/icons-material/Work'
import YouTube from '@mui/icons-material/YouTube'

const icons: Icons = {
  // Sections
  about_me_business: Person,
  skills: Code,
  experience: Moving,
  projects: Work,
  education: School,
  about_me_chill: Person,
  music: MusicNote,
  traveling: TwoWheeler,
  dogs: Pets,
  geek: SportsEsports,
  roles: TheaterComedy,
  films: Movie,
  sports: SportsSoccer,
  random: QuestionMark,

  // Social
  email: Email,
  facebook: Facebook,
  git_hub: GitHub,
  instagram: Instagram,
  linked_in: LinkedIn,
  whatsapp: WhatsApp,
  youtube: YouTube,

  // Categories
  back_end_frameworks: IntegrationInstructions,
  coding: Code,
  database: Storage,
  front_end_frameworks: IntegrationInstructions,
  markup: Code,
  methodical: Engineering,
  operative_systems: LaptopChromebook,
  personal: SelfImprovement,
  scripting: Code,
  social: Group,
  testing: BugReport,
  version_control: GitHub,

  // Soft
  adaptability: Group,
  clean_code: Engineering,
  communication: Group,
  proactivity: SelfImprovement,
  problem_solving: Engineering,
  teamwork: Group,
  willingness_to_learn: SelfImprovement,

  // Misc
  under_development: ConstructionIcon,
}

const devIcons: DevIcons = {
  // Tech
  angularjs: getDevIconURL('angularjs/angularjs-original.svg'),
  appium: '/images/icons/appium.svg',
  bash: getDevIconURL('bash/bash-original.svg'),
  bitbucket: getDevIconURL('bitbucket/bitbucket-original.svg'),
  bootstrap: getDevIconURL('bootstrap/bootstrap-original.svg'),
  chef: '/images/icons/chef.png',
  csharp: getDevIconURL('csharp/csharp-original.svg'),
  css3: getDevIconURL('css3/css3-original.svg'),
  cypress: '/images/icons/cypress.svg',
  django_rest: getDevIconURL('django/django-plain.svg'),
  django: getDevIconURL('django/django-plain.svg'),
  flexbox: getDevIconURL('html5/html5-original.svg'),
  git: getDevIconURL('git/git-original.svg'),
  github: getDevIconURL('github/github-original.svg'),
  gitlab: getDevIconURL('gitlab/gitlab-original.svg'),
  html5: getDevIconURL('html5/html5-original.svg'),
  jasmine: getDevIconURL('jasmine/jasmine-plain.svg'),
  javascript: getDevIconURL('javascript/javascript-original.svg'),
  jquery: getDevIconURL('jquery/jquery-original.svg'),
  linux: getDevIconURL('linux/linux-original.svg'),
  material_ui: getDevIconURL('materialui/materialui-original.svg'),
  nextjs: getDevIconURL('nextjs/nextjs-original.svg'),
  osx: getDevIconURL('apple/apple-original.svg'),
  php: getDevIconURL('php/php-original.svg'),
  postgresql: getDevIconURL('postgresql/postgresql-original.svg'),
  puppeteer: '/images/icons/puppeteer.svg',
  pwa: '/images/icons/pwa.png',
  python: getDevIconURL('python/python-original.svg'),
  react_native: getDevIconURL('react/react-original.svg'),
  react: getDevIconURL('react/react-original.svg'),
  sass: getDevIconURL('sass/sass-original.svg'),
  selenium: getDevIconURL('selenium/selenium-original.svg'),
  sqlite: getDevIconURL('sqlite/sqlite-original.svg'),
  typescript: getDevIconURL('typescript/typescript-original.svg'),
  unity: getDevIconURL('unity/unity-original.svg'),
  vuforia: '/images/icons/vuforia.png',
}

export const getIcon: GetIcon = label => icons[getKeyFromLabel(label)] || QuestionMark

export const getDevIconSrc: GetDevIconSrc = label => devIcons[getKeyFromLabel(label)]
