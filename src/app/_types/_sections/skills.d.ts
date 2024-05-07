interface SkillIconCardProps {
  skill: Skill
  grow?: boolean
}

interface SkillStackProps {
  skillStack: TechSkillCategory[] | TechSkillCategory[]
  toggleShowedCategory: (category: string) => void
  isCategoryShowed: (category: string) => boolean
}

interface CategoryIconBackgroundProps {
  Icon: Icon
}

interface CategoryIconCardProps {
  category: TechSkillCategory | SoftSkillCategory
  onHover: () => void
  onLeave: () => void
  onClick: () => void
}
