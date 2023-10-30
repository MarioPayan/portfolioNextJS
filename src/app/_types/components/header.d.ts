interface HeadProps {
  section: SECTIONS
  mode: MODES
  onChangeSection: (section: SECTIONS) => void
  onChangeMode: (section: MODES) => void
}

interface LinkProps {
  href: string
  locale: LANGUAGES
}
