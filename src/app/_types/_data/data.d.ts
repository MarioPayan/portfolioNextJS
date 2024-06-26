type Mode = 'BUSINESS' | 'CHILL'

interface Section {
  label: string
  key: string
}

interface Personal {
  name: string
  role: string
  chill_role: string
  url: string
  quote: string
  location: string
  keywords: string[]
  description: {[section in Mode]: string}
  meta_description: string
  meta_title: string
}

interface TechSkill {
  title: string
}

interface SoftSkill extends TechSkill {
  key: string
}

interface TechSkillCategory {
  key: string
  title: string
  skills: TechSkill[]
  rgbColor: [number, number, number]
}

interface SoftSkillCategory {
  key: string
  title: string
  skills: SoftSkill[]
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

interface Misc {
  [key: string]: string | {[key: string]: string}
}

interface Data {
  PERSONAL: Personal
  BUSINESS_SECTIONS: Section[]
  CHILL_SECTIONS: Section[]
  CONTACTS: {label: string; name: string; url: string; mode: Mode}[]
  TECH_SKILLS: TechSkillCategory[]
  SOFT_SKILLS: SoftSkillCategory[]
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
