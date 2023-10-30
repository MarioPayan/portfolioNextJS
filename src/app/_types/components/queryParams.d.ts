interface QueryParamsProps {
  mode: MODES
  setMode: (mode: MODES) => void
  section: SECTIONS
  setSection: (section: SECTIONS) => void
}

type QueryParamsMap = {value: MODES | SECTIONS; key: string}[]

interface CodeQueryParams {
  (mode: MODES, section: SECTIONS): string
}

interface DecodeQueryParams {
  (params: string): {mode?: MODES; section?: SECTIONS}
}
