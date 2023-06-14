import {getKeyFromLabel} from '@/utils/misc'

const getDevIconURL: GetDevIconURL = url =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${url}`

import BugReport from '@mui/icons-material/BugReport'
import Business from '@mui/icons-material/Business'
import Code from '@mui/icons-material/Code'
import Coffee from '@mui/icons-material/Coffee'
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
  chill: Coffee,
  business: Business,
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
  linked_in: LinkedIn,
  git_hub: GitHub,
  whatsapp: WhatsApp,
  facebook: Facebook,
  instagram: Instagram,
  youtube: YouTube,

  // Categories
  coding: Code,
  front_end_frameworks: IntegrationInstructions,
  back_end_frameworks: IntegrationInstructions,
  markup: Code,
  database: Storage,
  version_control: GitHub,
  testing: BugReport,
  operative_system: LaptopChromebook,
  personal: SelfImprovement,
  methodical: Engineering,
  social: Group,
  scripting: Code,

  // Soft
  willingness_to_learn: SelfImprovement,
  proactivity: SelfImprovement,
  problem_solving: Engineering,
  clean_code: Engineering,
  communication: Group,
  teamwork: Group,
  adaptability: Group,
}

const devIcons: DevIcons = {
  // Tech
  python: getDevIconURL('python/python-original.svg'),
  javascript: getDevIconURL('javascript/javascript-original.svg'),
  typescript: getDevIconURL('typescript/typescript-original.svg'),
  react: getDevIconURL('react/react-original.svg'),
  nextjs: getDevIconURL('nextjs/nextjs-original.svg'),
  django: getDevIconURL('django/django-plain.svg'),
  django_rest: getDevIconURL('django/django-plain.svg'),
  angularjs: getDevIconURL('angularjs/angularjs-original.svg'),
  html5: getDevIconURL('html5/html5-original.svg'),
  css3: getDevIconURL('css3/css3-original.svg'),
  sass: getDevIconURL('sass/sass-original.svg'),
  pwa: '/images/icons/pwa.png',
  material_ui: getDevIconURL('materialui/materialui-original.svg'),
  bootstrap: getDevIconURL('bootstrap/bootstrap-original.svg'),
  flexbox: getDevIconURL('html5/html5-original.svg'),
  postgresql: getDevIconURL('postgresql/postgresql-original.svg'),
  sqlite: getDevIconURL('sqlite/sqlite-original.svg'),
  git: getDevIconURL('git/git-original.svg'),
  github: getDevIconURL('github/github-original.svg'),
  gitlab: getDevIconURL('gitlab/gitlab-original.svg'),
  bitbucket: getDevIconURL('bitbucket/bitbucket-original.svg'),
  cypress: 'images/icons/cypress.svg',
  jasmine: getDevIconURL('jasmine/jasmine-plain.svg'),
  selenium: getDevIconURL('selenium/selenium-original.svg'),
  puppeteer: 'images/icons/puppeteer.svg',
  appium: 'images/icons/appium.svg',
  osx: getDevIconURL('apple/apple-original.svg'),
  linux: getDevIconURL('linux/linux-original.svg'),
  bash: getDevIconURL('bash/bash-original.svg'),
}

export const getIcon: GetIcon = label =>
  icons[getKeyFromLabel(label)] || QuestionMark

export const getDevIconSrc: GetDevIconSrc = label =>
  devIcons[getKeyFromLabel(label)]

// TODO: Add PHP, Chef, React Native, jQuery, Vuforia, Unity, C#
