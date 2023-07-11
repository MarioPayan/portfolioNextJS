interface Images {
  readonly [key: string]: string
}

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  quality?: number
  priority?: boolean
  title?: string
  className?: string
}
