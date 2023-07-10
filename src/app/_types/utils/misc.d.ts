interface RbgToRgba {
  (rgbColor: [number, number, number], alpha: number): string
}

interface GetKeyFromLabel {
  (label: string): string
}

interface OpenInNewTab {
  (url: string): void
}

interface RandomSort {
  (): number
}
