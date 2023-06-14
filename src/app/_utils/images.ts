export const image404 = 'images/404.jpg'

export const getAssetURL: GetAssetURL = url => url || image404
// TODO: check for url existence

const image: Images = {
  get favicon() {
    return getAssetURL('/images/favicon.png')
  },
  get profilePixel() {
    return getAssetURL('/images/profile_pixel_LQ.png')
  },
  get profile() {
    return getAssetURL('/images/profile_LQ.jpg')
  },
  get profilePixelNoBG() {
    return getAssetURL('/images/profile_pixel_LQ_no_bg.png')
  },
  get profileNoBG() {
    return getAssetURL('/images/profile_LQ_no_bg.png')
  },
  get profileChillNoBG() {
    return getAssetURL('/images/profile_chill_no_bg.png')
  },
  get businessCover() {
    return getAssetURL('/images/cover.jpg')
  },
  get chillCover() {
    return getAssetURL('/images/cover_chill.jpg')
  },
  get notFound() {
    return getAssetURL('/images/404.jpg')
  },
}

export default image
