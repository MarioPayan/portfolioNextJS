'use client'
// React
import {createElement, useEffect, useState} from 'react'
// NextJS
import Image from 'next/image'
// Data
import DATA, {SECTIONS, MODES} from '@/data/data'
// Material UI
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Fade from '@mui/material/Fade'
import IconButton from '@mui/material/IconButton'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
// Utils
import images from '@/utils/images'
import {getIcon} from '@/utils/icons'
// Styles
import styles from './Head.module.css'

const Head: React.FC<HeadProps> = ({
  section,
  mode,
  onChangeSection,
  onChangeMode,
}) => {
  const [tabSections, setTabSections] = useState(DATA.BUSINESS_SECTIONS)
  const [tab, setTab] = useState(DATA.BUSINESS_SECTIONS[0].key)
  const [coverImage, setCoverImage] = useState(images.businessCover)
  const [changeExperienceIcon, setChangeExperienceIcon] = useState(
    getIcon(MODES.CHILL)
  )

  useEffect(() => {
    if (mode === MODES.BUSINESS) {
      setTabSections(DATA.BUSINESS_SECTIONS)
      const idx = DATA.BUSINESS_SECTIONS.findIndex(s => s.key === section)
      const defKey = DATA.BUSINESS_SECTIONS[0].key
      setTab(idx !== -1 ? DATA.BUSINESS_SECTIONS[idx].key : defKey)
      setCoverImage(images.businessCover)
      setChangeExperienceIcon(getIcon(MODES.CHILL))
    } else if (mode === MODES.CHILL) {
      setTabSections(DATA.CHILL_SECTIONS)
      const idx = DATA.CHILL_SECTIONS.findIndex(s => s.key === section)
      const defKey = DATA.CHILL_SECTIONS[0].key
      setTab(idx !== -1 ? DATA.CHILL_SECTIONS[idx].key : defKey)
      setCoverImage(images.chillCover)
      setChangeExperienceIcon(getIcon(MODES.BUSINESS))
    } else {
      setTabSections([])
      setTab('')
      setCoverImage(images.notFound)
      setChangeExperienceIcon(getIcon(''))
    }
  }, [section, mode])

  const alternateMode = () => {
    const newMode = mode === MODES.BUSINESS ? MODES.CHILL : MODES.BUSINESS
    onChangeMode(newMode)
    onChangeSection(
      newMode === MODES.BUSINESS ? SECTIONS.ABOUT_ME_BUSINESS : SECTIONS.ABOUT_ME_CHILL
    )
  }

  return (
    <Card className={styles.card}>
      {/* Background */}
      <Box className={styles.card_background}>
        <Box className={styles.card_background_filter} />
        <Image
          src={coverImage}
          className={styles.card_background_image}
          fill
          priority
          alt='Background'/>
      </Box>

      {/* Profile */}
      <Box className={styles.card_profile}>
        <Box className={styles.card_profile_avatar}>
          <Box className={styles.card_profile_avatar_container}>
            <Fade in={mode === MODES.BUSINESS} timeout={800}>
              <Avatar
                src={images.profile}
                className={styles.card_profile_avatar_container_img}
                alt={DATA.PERSONAL.name}
                variant='circular'/>
            </Fade>
          </Box>
          <Box className={styles.card_profile_avatar_container}>
            <Fade in={mode === MODES.CHILL} timeout={800}>
              <Avatar
                src={images.profilePixel}
                className={styles.card_profile_avatar_container_img}
                alt={DATA.PERSONAL.name}
                variant='circular'/>
            </Fade>
          </Box>
        </Box>
        <Box className={styles.card_profile_text}>
          <Typography variant='h4' color='whitesmoke'>
            {DATA.PERSONAL.name}
          </Typography>
          <Typography
            variant='h5'
            color='whitesmoke'
            className={styles.card_profile_text_role}>
            {DATA.PERSONAL.role}
          </Typography>
        </Box>
      </Box>

      {/* Modes */}
      <Box className={styles.mode_container}>
        <IconButton onClick={() => alternateMode()}>
          {createElement(changeExperienceIcon, {fontSize: 'large'})}
        </IconButton>
      </Box>

      {/* Tabs */}
      <Box className={styles.card_tabs}>
        <Tabs
          allowScrollButtonsMobile
          variant='scrollable'
          scrollButtons='auto'
          value={tab}
          onChange={(_, tab) => {
            setTab(tab)
            onChangeSection(tab)
          }}
          className={styles.card_tabs_container}>
          {tabSections.map((tab, i) => (
            <Tab
              disableRipple
              key={i}
              value={tab.key}
              label={
                <Typography
                  textTransform='capitalize'
                  className={styles.card_tabs_label}>
                  {tab.label}
                </Typography>
              }
              icon={createElement(getIcon(tab.key), {
                className: styles.card_tabs_tab_icon,
              })}
              iconPosition='start'
              className={styles.card_tabs_tab}/>
          ))}
        </Tabs>
      </Box>
    </Card>
  )
}

export default Head
