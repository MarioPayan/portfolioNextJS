'use client'
// React
import {createElement, useEffect, useState, useContext} from 'react'
// NextJS
import {useRouter} from 'next/navigation'
// Components
import {DataContext} from '@/components/LayoutWrapper'
// Data
import {SECTIONS, MODES, LANGUAGES} from '@/data/data'
// Material UI
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Fade from '@mui/material/Fade'
import GTranslateIcon from '@mui/icons-material/GTranslate'
import LoopIcon from '@mui/icons-material/Loop'
import IconButton from '@mui/material/IconButton'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
// Utils
import {getIcon} from '@/utils/icons'
import {Image, images} from '@/utils/images'
import {getQueryParamsStr} from '@/utils/misc'
// Styles
import styles from './Header.module.css'

const Header: React.FC<HeadProps> = ({
  section,
  mode,
  onChangeSection,
  onChangeMode,
}) => {
  const {data, language} = useContext(DataContext)
  const [tabSections, setTabSections] = useState<Section[]>(
    data.BUSINESS_SECTIONS
  )
  const [tab, setTab] = useState<string>(data.BUSINESS_SECTIONS[0].key)
  const [coverImage, setCoverImage] = useState<string>(images.businessCover)
  const [changingMode, setChangingMode] = useState<boolean>(false)
  const [changingLanguage, setChangingLanguage] = useState<boolean>(false)
  const [animationTrigger, setAnimationTrigger] = useState<boolean>(false)

  const router = useRouter()

  useEffect(() => {
    const animationTime = animationTrigger ? 250 : 0
    if (mode === MODES.BUSINESS) {
      setTimeout(() => setTabSections(data.BUSINESS_SECTIONS), animationTime)
      const idx = data.BUSINESS_SECTIONS.findIndex(s => s.key === section)
      const defKey = data.BUSINESS_SECTIONS[0].key
      setTab(idx !== -1 ? data.BUSINESS_SECTIONS[idx].key : defKey)
      setTimeout(() => setCoverImage(images.businessCover), animationTime)
    } else if (mode === MODES.CHILL) {
      setTimeout(() => setTabSections(data.CHILL_SECTIONS), animationTime)
      const idx = data.CHILL_SECTIONS.findIndex(s => s.key === section)
      const defKey = data.CHILL_SECTIONS[0].key
      setTab(idx !== -1 ? data.CHILL_SECTIONS[idx].key : defKey)
      setTimeout(() => setCoverImage(images.chillCover), animationTime)
    } else {
      setTabSections([])
      setTab('')
      setCoverImage(images.notFound)
    }
  }, [data, section, mode, animationTrigger])

  const changeMode = () => {
    const newMode = mode === MODES.BUSINESS ? MODES.CHILL : MODES.BUSINESS
    setAnimationTrigger(true)
    onChangeMode(newMode)
    onChangeSection(
      newMode === MODES.BUSINESS ? SECTIONS.ABOUT_ME_BUSINESS : SECTIONS.ABOUT_ME_CHILL
    )
    setChangingMode(true)
  }

  const changeLanguage = () => {
    setChangingLanguage(true)
    const queryParams = getQueryParamsStr({mode, section})
    if (language === LANGUAGES.ES) {
      router.replace(`/${LANGUAGES.EN.toLowerCase()}/${queryParams}`)
    } else if (language === LANGUAGES.EN) {
      router.replace(`/${LANGUAGES.ES.toLowerCase()}/${queryParams}`)
    }
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
                alt={data.PERSONAL.name}
                variant='circular'/>
            </Fade>
          </Box>
          <Box className={styles.card_profile_avatar_container}>
            <Fade in={mode === MODES.CHILL} timeout={600}>
              <Avatar
                src={images.profilePixel}
                className={styles.card_profile_avatar_container_img}
                alt={data.PERSONAL.name}
                variant='circular'/>
            </Fade>
          </Box>
        </Box>
        <Box className={styles.card_profile_text}>
          <Typography variant='h4' color='whitesmoke'>
            {data.PERSONAL.name}
          </Typography>
          <Typography
            variant='h5'
            color='whitesmoke'
            className={styles.card_profile_text_role}>
            {data.PERSONAL.role}
          </Typography>
        </Box>
      </Box>

      {/* Modes */}
      <Box className={styles.mode_container}>
        <IconButton
          onClick={() => changeMode()}
          className={`${changingMode ? styles.rotate_animation : ''}`}
          onAnimationEnd={() => setChangingMode(false)}>
          <LoopIcon
            fontSize='large'
            color='primary'
            className={styles.mode_icon}/>
        </IconButton>
        <IconButton
          onClick={() => changeLanguage()}
          className={`${changingLanguage ? styles.flip_animation : ''}`}
          onAnimationEnd={() => setChangingLanguage(false)}>
          <GTranslateIcon fontSize='large' color='primary' />
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
