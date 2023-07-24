interface SkillIconCardProps {
  skill: Skill
  grow?: boolean
}

interface SkillStackProps {
  skillStack: SkillCategory[]
  toggleShowedCategory: (category: string) => void
  isCategoryShowed: (category: string) => boolean
}

interface CategoryIconBackgroundProps {
  Icon: Icon
}

interface CategoryIconCardProps {
  category: SkillCategory
  onHover: () => void
  onLeave: () => void
  onClick: () => void
}
