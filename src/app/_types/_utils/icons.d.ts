// TODO: Look for a better way to type this
type Icon = any // eslint-disable-line @typescript-eslint/no-explicit-any

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
