interface QueryParamsProps {
  language: LANGUAGES
  setLanguage: (language: LANGUAGES) => void
  mode: MODES
  setMode: (mode: MODES) => void
  section: SECTIONS
  setSection: (section: SECTIONS) => void
}

type QueryParamsMap = {value: MODES | SECTIONS; key: string}[]

interface CodeQueryParams {
  (mode: MODES, section: SECTIONS, language: LANGUAGES): string
}

interface DecodeQueryParams {
  (params: string): {language?: LANGUAGES; mode?: MODES; section?: SECTIONS}
}
