'use client'
import NextImage from 'next/image'
import {useState} from 'react'
import imagesDimensions from '@/data/images_dimensions.json'

export const image404 = '/images/404.png'

export const images: Images = {
  get favicon() {
    return '/images/favicon.png'
  },
  get profilePixel() {
    return '/images/profile_pixel_LQ.png'
  },
  get profile() {
    return '/images/profile_LQ.jpg'
  },
  get profilePixelNoBG() {
    return '/images/profile_pixel_LQ_no_bg.png'
  },
  get profileNoBG() {
    return '/images/profile_LQ_no_bg.png'
  },
  get profileChillNoBG() {
    return '/images/profile_chill_no_bg.png'
  },
  get businessCover() {
    return '/images/cover.jpg'
  },
  get chillCover() {
    return '/images/cover_chill.jpg'
  },
  get notFound() {
    return image404
  },
}

const getBlurDataURL: GetBlurDataURL = src => `blurred_images/${src}`

export const Image = (imageProps: ImageProps) => {
  const [error, setError] = useState(false)
  const {keepRatio, noPlaceHolder, ...props} = imageProps
  const dimensions = (imagesDimensions as ImagesDimensions)[props.src]
  if (dimensions && !props.fill) {
    props.width = dimensions.width
    props.height = dimensions.height
  }
  return (
    <NextImage
      {...props}
      src={error ? image404 : props.src}
      loading='lazy'
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' // TODO: check if this is correct
      placeholder={!noPlaceHolder ? 'blur' : 'empty'}
      blurDataURL={getBlurDataURL(props.src)}
      style={{objectFit: keepRatio === undefined || keepRatio ? 'contain' : 'cover'}}
      onError={() => setError(true)}></NextImage>
  )
}
