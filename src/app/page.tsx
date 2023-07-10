'use client'
// React
import {useEffect, useState} from 'react'
// NextJS
import {useSearchParams} from 'next/navigation'
// Components
import {Head, UnderDevModal, CopyRight} from '@/components'
// Sections
import {
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Hobbies
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

  return (
    <main className={styles.main}>
      <h1 className={styles.hiddenTitle}>{DATA.PERSONAL.name}</h1>
      <h2 className={styles.hiddenTitle}>{DATA.PERSONAL.name}</h2>
      <h3 className={styles.hiddenTitle}>{DATA.PERSONAL.name}</h3>
      <Box className={styles.container}>
        <Head
          section={section}
          onChangeSection={setSection}
          mode={mode}
          onChangeMode={setMode}/>
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
        {section === SECTIONS.TRAVELING && <Hobbies section={DATA.TRAVELING} />}
        {section === SECTIONS.DOGS && <Hobbies section={DATA.DOGS} />}
        {section === SECTIONS.GEEK && <Hobbies section={DATA.GEEK} />}
        {section === SECTIONS.ROLES && <Hobbies section={DATA.ROLES} />}
        {section === SECTIONS.FILMS && <Hobbies section={DATA.FILMS} />}
        {section === SECTIONS.SPORTS && <Hobbies section={DATA.SPORTS} />}
        {section === SECTIONS.RANDOM && <Hobbies section={DATA.RANDOM} />}
      </Box>
      <UnderDevModal />
      <CopyRight />
    </main>
  )
}
