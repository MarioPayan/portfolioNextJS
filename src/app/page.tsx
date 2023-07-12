'use client'
// React
import {useEffect, useState} from 'react'
// NextJS
import NextHead from 'next/head'
import {useSearchParams} from 'next/navigation'
// Components
import {Header, Head, UnderDevModal, CopyRight} from '@/components'
// Sections
import {
  About,
  Education,
  Experience,
  Hobbies,
  Projects,
  Skills
} from '@/sections'
// Data
import DATA, {SECTIONS, MODES} from '@/data/data'
// Material UI
import Box from '@mui/material/Box'
// Styles
import styles from '@/app/page.module.css'

export default function Home() {
  const [section, setSection] = useState<SECTIONS>(SECTIONS.ABOUT_ME_BUSINESS)
  const [mode, setMode] = useState<MODES>(MODES.BUSINESS)
  const [swipeAnimation, setSwipeAnimation] = useState<-1 | 0 | 1>(0)
  const searchParams = useSearchParams()

  useEffect(() => {
    const urlMode = searchParams.get('mode')?.toUpperCase()
    const urlSection = searchParams.get('section')?.toUpperCase()

    if (
      !urlSection && urlMode && Object.values(MODES).includes(urlMode as MODES)
    ) {
      setMode(urlMode as MODES)
      if (!urlSection) {
        if (urlMode === MODES.BUSINESS) {
          setSection(SECTIONS.ABOUT_ME_BUSINESS)
        } else if (urlMode === MODES.CHILL) {
          setSection(SECTIONS.ABOUT_ME_CHILL)
        }
      }
    }
    if (
      urlSection && Object.values(SECTIONS).includes(urlSection as SECTIONS)
    ) {
      setSection(urlSection as SECTIONS)
      if (DATA.BUSINESS_SECTIONS.map(s => s.key).includes(urlSection)) {
        setMode(MODES.BUSINESS)
      }
      if (DATA.CHILL_SECTIONS.map(s => s.key).includes(urlSection)) {
        setMode(MODES.CHILL)
      }
    }
  }, [searchParams])

  const onChangeSection: OnChangeSection = newSection => {
    const sectionKeys = [
      ...DATA.BUSINESS_SECTIONS.map(s => s.key),
      ...DATA.CHILL_SECTIONS.map(s => s.key),
    ]
    const newSectionIdx = sectionKeys.findIndex(s => s === newSection)
    const currentSectionIdx = sectionKeys.findIndex(s => s === section)
    const goLeft = newSectionIdx > currentSectionIdx
    const goRight = newSectionIdx < currentSectionIdx
    setSwipeAnimation(goLeft ? -1 : goRight ? 1 : 0)
    setTimeout(() => setSection(newSection), 200)
  }

  const getSwipeAnimation = () => {
    if (swipeAnimation === -1) {
      return styles.swipe_left_animation
    }
    if (swipeAnimation === 1) {
      return styles.swipe_right_animation
    }
    return ''
  }

  return (
    <main className={styles.main}>
      <NextHead>
        <Head />
      </NextHead>
      <h1 className={styles.hiddenTitle}>{DATA.PERSONAL.name}</h1>
      <h2 className={styles.hiddenTitle}>{DATA.PERSONAL.name}</h2>
      <h3 className={styles.hiddenTitle}>{DATA.PERSONAL.name}</h3>
      <Box className={styles.container}>
        <Header
          section={section}
          onChangeSection={onChangeSection}
          mode={mode}
          onChangeMode={setMode}/>
        <Box
          className={getSwipeAnimation()}
          onAnimationEnd={() => setSwipeAnimation(0)}>
          {/* Business sections */}
          {section === SECTIONS.ABOUT_ME_BUSINESS && (
            <About mode={MODES.BUSINESS} />
          )}
          {section === SECTIONS.SKILLS && <Skills />}
          {section === SECTIONS.EXPERIENCE && <Experience />}
          {section === SECTIONS.PROJECTS && <Projects />}
          {section === SECTIONS.EDUCATION && <Education />}
          {/* Chill sections */}
          {section === SECTIONS.ABOUT_ME_CHILL && <About mode={MODES.CHILL} />}
          {section === SECTIONS.MUSIC && <Hobbies section={DATA.MUSIC} />}
          {section === SECTIONS.TRAVELING && (
            <Hobbies section={DATA.TRAVELING} />
          )}
          {section === SECTIONS.DOGS && <Hobbies section={DATA.DOGS} />}
          {section === SECTIONS.GEEK && <Hobbies section={DATA.GEEK} />}
          {section === SECTIONS.ROLES && <Hobbies section={DATA.ROLES} />}
          {section === SECTIONS.FILMS && <Hobbies section={DATA.FILMS} />}
          {section === SECTIONS.SPORTS && <Hobbies section={DATA.SPORTS} />}
          {section === SECTIONS.RANDOM && <Hobbies section={DATA.RANDOM} />}
        </Box>
      </Box>
      <UnderDevModal />
      <CopyRight />
    </main>
  )
}
