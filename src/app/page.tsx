'use client'
// React
import {Suspense, useState, useContext, useEffect} from 'react'
// Components
import {Header, Modal, CopyRight, QueryParams, DataContext} from '@/components'
// Sections
import {
  About,
  Education,
  Experience,
  Hobbies,
  Projects,
  Skills
} from '@/sections'
import {SECTIONS, MODES, LANGUAGES} from '@/data/data'
// Material UI
import Box from '@mui/material/Box'
// Styles
import styles from '@/app/page.module.css'

const Home: React.FC<{language: LANGUAGES}> = ({language: urlLanguage}) => {
  const {data, misc, setLanguage} = useContext(DataContext)

  // TODO: Work in progress
  useEffect(() => {
    setLanguage(urlLanguage as LANGUAGES)
  }, [urlLanguage, setLanguage])

  const [section, setSection] = useState<SECTIONS>(SECTIONS.ABOUT_ME_BUSINESS)
  const [mode, setMode] = useState<MODES>(MODES.BUSINESS)
  const [swipeAnimation, setSwipeAnimation] = useState<-1 | 0 | 1>(0)

  const onChangeSection: OnChangeSection = newSection => {
    const sectionKeys = [
      ...data.BUSINESS_SECTIONS.map(s => s.key),
      ...data.CHILL_SECTIONS.map(s => s.key),
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
      <h1 className={styles.hiddenTitle}>{data.PERSONAL.meta_title}</h1>
      <h2 className={styles.hiddenTitle}>{data.PERSONAL.meta_title}</h2>
      <h3 className={styles.hiddenTitle}>{data.PERSONAL.meta_title}</h3>
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
          {section === SECTIONS.MUSIC && <Hobbies section={data.MUSIC} />}
          {section === SECTIONS.TRAVELING && (
            <Hobbies section={data.TRAVELING} />
          )}
          {section === SECTIONS.DOGS && <Hobbies section={data.DOGS} />}
          {section === SECTIONS.GEEK && <Hobbies section={data.GEEK} />}
          {section === SECTIONS.ROLES && <Hobbies section={data.ROLES} />}
          {section === SECTIONS.FILMS && <Hobbies section={data.FILMS} />}
          {section === SECTIONS.SPORTS && <Hobbies section={data.SPORTS} />}
          {section === SECTIONS.RANDOM && <Hobbies section={data.RANDOM} />}
        </Box>
      </Box>
      <Modal {...(misc.underDevelopment as unknown as ModalProps)} />
      {false && <Modal {...(misc.workInProgress as unknown as ModalProps)} />}
      <CopyRight />
      <Suspense fallback={<></>}>
        <QueryParams setMode={setMode} setSection={setSection} />
      </Suspense>
    </main>
  )
}

export default Home
