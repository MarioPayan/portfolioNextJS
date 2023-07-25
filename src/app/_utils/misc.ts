export const getKeyFromLabel: GetKeyFromLabel = label =>
  label
    .toLowerCase()
    .split(' ')
    .join('_')
    .replace(/-/g, '_')
    .replace(/#/g, 'sharp')

export const rbgToRgba: RbgToRgba = (rgbColor, alpha) => {
  const [r, g, b] = rgbColor
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const openInNewTab: OpenInNewTab = url => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export const randomSort: RandomSort = () => 0.5 - Math.random()

export const getQueryParamsStr: GetQueryParamsStr = ({mode, section}) =>
  '?mode=' + (mode as string).toLowerCase() + '&section=' + (section as string).toLowerCase()
