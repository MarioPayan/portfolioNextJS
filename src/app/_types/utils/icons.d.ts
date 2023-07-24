type Icon = any

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
