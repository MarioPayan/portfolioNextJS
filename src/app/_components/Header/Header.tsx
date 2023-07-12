'use client'
// React
import {createElement, useEffect, useState} from 'react'
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
import {Image, images} from '@/utils/images'
import {getIcon} from '@/utils/icons'
// Styles
import styles from './Header.module.css'

const Header: React.FC<HeadProps> = ({
  section,
  mode,
  onChangeSection,
  onChangeMode,
}) => {
  const [tabSections, setTabSections] = useState<Section[]>(
    DATA.BUSINESS_SECTIONS
  )
  const [tab, setTab] = useState<string>(DATA.BUSINESS_SECTIONS[0].key)
  const [coverImage, setCoverImage] = useState<string>(images.businessCover)
  const [changeExperienceIcon, setChangeExperienceIcon] = useState<string>(
    getIcon(MODES.CHILL)
  )
  const [animationTrigger, setAnimationTrigger] = useState<boolean>(false)

  useEffect(() => {
    const animationTime = animationTrigger ? 250 : 0
    if (mode === MODES.BUSINESS) {
      setTimeout(() => setTabSections(DATA.BUSINESS_SECTIONS), animationTime)
      const idx = DATA.BUSINESS_SECTIONS.findIndex(s => s.key === section)
      const defKey = DATA.BUSINESS_SECTIONS[0].key
      setTab(idx !== -1 ? DATA.BUSINESS_SECTIONS[idx].key : defKey)
      setTimeout(() => setCoverImage(images.businessCover), animationTime)
      setChangeExperienceIcon(getIcon(MODES.CHILL))
    } else if (mode === MODES.CHILL) {
      setTimeout(() => setTabSections(DATA.CHILL_SECTIONS), animationTime)
      const idx = DATA.CHILL_SECTIONS.findIndex(s => s.key === section)
      const defKey = DATA.CHILL_SECTIONS[0].key
      setTab(idx !== -1 ? DATA.CHILL_SECTIONS[idx].key : defKey)
      setTimeout(() => setCoverImage(images.chillCover), animationTime)
      setChangeExperienceIcon(getIcon(MODES.BUSINESS))
    } else {
      setTabSections([])
      setTab('')
      setCoverImage(images.notFound)
      setChangeExperienceIcon(getIcon(''))
    }
  }, [section, mode, animationTrigger])

  const alternateMode = () => {
    const newMode = mode === MODES.BUSINESS ? MODES.CHILL : MODES.BUSINESS
    setAnimationTrigger(true)
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
          className={`${styles.card_background_image} ${
            animationTrigger ? styles.fade_animation : ''
          }`}
          fill
          priority
          alt='Background'/>
      </Box>

      {/* Profile */}
      <Box className={styles.card_profile}>
        <Box className={styles.card_profile_avatar}>
          <Box className={styles.card_profile_avatar_container}>
            <Fade in={mode === MODES.BUSINESS} timeout={600}>
              <Avatar
                src={images.profile}
                className={styles.card_profile_avatar_container_img}
                alt={DATA.PERSONAL.name}
                variant='circular'/>
            </Fade>
          </Box>
          <Box className={styles.card_profile_avatar_container}>
            <Fade in={mode === MODES.CHILL} timeout={600}>
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
          {createElement(changeExperienceIcon, {
            fontSize: 'large',
            color: 'primary',
            className: styles.mode_icon,
          })}
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
          onAnimationEnd={() => setAnimationTrigger(false)}
          className={`${styles.card_tabs_container} ${
            animationTrigger ? styles.slide_animation : ''
          }`}>
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

export default Header
