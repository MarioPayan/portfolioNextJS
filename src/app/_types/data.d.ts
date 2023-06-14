type Mode = 'BUSINESS' | 'CHILL'

interface Personal {
  name: string
  role: string
  url: string
  location: string
  description: {[section in Mode]: string}
}

interface Skill {
  title: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
  rgbColor: [number, number, number]
}

interface Experience {
  where: string
  from: string
  to: string
  position: string
  rgbColor: [number, number, number]
  image: string
  achievements: string[]
}

type Education = Experience

interface HobbySection {
  title: string
  description: string
  images: string[]
  social?: {
    facebook?: string
    instagram?: string
    youtube?: string
    whatsapp?: string
  }
}

interface Hobbies {
  title: string
  description: string
  sections: HobbySection[]
}

interface Project {
  label: string
  description: string
  image: string
  stack: string[]
  link?: string
}

interface Data {
  PERSONAL: Personal
  BUSINESS_SECTIONS: {label: string; key: string}[]
  CHILL_SECTIONS: {label: string; key: string}[]
  CONTACTS: {label: string; name: string; url: string; mode: Mode}[]
  TECH_SKILLS: SkillCategory[]
  SOFT_SKILLS: SkillCategory[]
  EXPERIENCE: Experience[]
  EDUCATION: Education[]
  PROJECTS: Project[]
  MUSIC: Hobbies
  TRAVELING: Hobbies
  DOGS: Hobbies
  GEEK: Hobbies
  SPORTS: Hobbies
  ROLES: Hobbies
  FILMS: Hobbies
  RANDOM: Hobbies
}

interface RgbColors {
  [key: string]: {[key: string]: [number, number, number]}
}
