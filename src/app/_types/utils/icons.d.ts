type Icon = any // TODO: typeof QuestionMark

interface GetDevIconURL {
  (url: string): string
}

interface GetIcon {
  (label: string): Icon
}

interface GetDevIconSrc {
  (label: string): string
}

interface DevIcons {
  [key: string]: string
}

interface Icons {
  [key: string]: Icon
}
