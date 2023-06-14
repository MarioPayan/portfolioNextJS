export const getKeyFromLabel: GetKeyFromLabel = label =>
  label.toLowerCase().split(' ').join('_').replace(/-/g, '_')

export const rbgToRgba: RbgToRgba = (rgbColor, alpha) => {
  const [r, g, b] = rgbColor
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const openInNewTab: OpenInNewTab = url => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}
