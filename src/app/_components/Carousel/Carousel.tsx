'use client'
// React
import React, {useCallback, useEffect, useState} from 'react'
import {flushSync} from 'react-dom'
// Embla
import useEmblaCarousel from 'embla-carousel-react'
import {EmblaOptionsType} from 'embla-carousel'
import Autoplay, {AutoplayOptionsType} from 'embla-carousel-autoplay'
// Material UI
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import NavigateBefore from '@mui/icons-material/NavigateBefore'
import NavigateNext from '@mui/icons-material/NavigateNext'
// Utils
import {randomSort} from '@/utils/misc'
import {Image} from '@/utils/images'
// Styles
import styles from './Carousel.module.css'

const Carousel: React.FC<CarouselProps> = ({images, random = false}) => {
  const [carouselImages, setCarouselImages] = useState<string[]>(images)

  useEffect(() => {
    if (random) {
      setCarouselImages(images.sort(randomSort))
    }
  }, [images, random])

  const emblaOptions: EmblaOptionsType = {
    loop: true,
    dragFree: true,
  }

  const autoPlayOptions: AutoplayOptionsType = {
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  }

  const [tweenValues, setTweenValues] = useState<number[]>([])
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [Autoplay(autoPlayOptions)])

  const TWEEN_FACTOR = 7 / (images.length + 1)

  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const tweenStyles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach(loopItem => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      return diffToTarget * (-1 / TWEEN_FACTOR) * 100
    })
    setTweenValues(tweenStyles)
  }, [emblaApi, setTweenValues, TWEEN_FACTOR])

  useEffect(() => {
    if (!emblaApi) return
    onScroll()
    emblaApi.on('scroll', () => flushSync(() => onScroll()))
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <Box className={styles.container}>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {carouselImages.map((image, index) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__parallax}>
                  <div
                    className={styles.embla__parallax__layer}
                    style={{
                      ...(tweenValues.length && {
                        transform: `translateX(${tweenValues[index]}%)`,
                      }),
                    }}>
                    <Image
                      src={image}
                      width={400}
                      height={300}
                      loading='lazy'
                      className={`
                      ${styles.embla__slide__img} 
                      ${styles.embla__parallax__img} 
                      ${styles.frontImage}`}
                      alt='photo'
                    />
                    <Image
                      src={image}
                      fill
                      quality={1}
                      loading='lazy'
                      keepRatio={false}
                      className={`
                      ${styles.embla__slide__img} 
                      ${styles.embla__parallax__img} 
                      ${styles.backgroundImage}`}
                      alt='background photo'
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Box className={`${styles.arrows_container} ${styles.left_arrow}`}>
        <Box className={styles.arrow_container}>
          <Box className={styles.arrow_background}></Box>
          <IconButton onClick={scrollPrev} disableRipple size='large'>
            <NavigateBefore className={styles.arrow} />
          </IconButton>
        </Box>
      </Box>
      <Box className={`${styles.arrows_container} ${styles.right_arrow}`}>
        <Box className={styles.arrow_container}>
          <Box className={styles.arrow_background}></Box>
          <IconButton onClick={scrollNext} disableRipple size='large'>
            <NavigateNext className={styles.arrow} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Carousel
