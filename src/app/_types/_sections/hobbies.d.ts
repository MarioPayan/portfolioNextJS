interface HobbiesProps {
  section: Hobbies
}

interface AlternateGradient {
  (index: number): string
}

interface AlternateFlexDirection {
  (index: number): 'row' | 'row-reverse'
}

interface SocialIconButtonProps {
  label: string
  url: string
  iconKey: string
}

interface SocialIconButtonsProps {
  subSection: HobbySection
}
