interface HeadProps {
  section: typeof SECTIONS
  mode: typeof MODES
  onChangeSection: (section: typeof SECTIONS) => void
  onChangeMode: (section: typeof MODES) => void
}
