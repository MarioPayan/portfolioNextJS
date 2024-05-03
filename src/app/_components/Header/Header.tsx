'use client'
// React
import {createElement, useEffect, useState, useContext} from 'react'
// NextJS
import Link from 'next/link'
// Components
import {DataContext} from '@/components/LayoutWrapper'
import {codeParams, queryParamsKey} from '@/components/QueryParams'
import Modal from '@/components/Modal/Modal'
// Data
import {SECTIONS, MODES, LANGUAGES, PALETTE} from '@/data/data'
// Material UI
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import DarkMode from '@mui/icons-material/DarkMode'
import Fade from '@mui/material/Fade'
import TranslateIcon from '@mui/icons-material/Translate'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'
import IconButton from '@mui/material/IconButton'
import LightMode from '@mui/icons-material/LightMode'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
// Utils
import {getIcon} from '@/utils/icons'
import {Image, images} from '@/utils/images'
// Styles
import styles from './Header.module.css'

const Header: React.FC<HeadProps> = ({section, mode, onChangeSection, onChangeMode}) => {
  const ANIMATION_TIME = 500
  const {data, misc, language, palette, setPalette} = useContext(DataContext)
  const [tabSections, setTabSections] = useState<Section[]>(data.BUSINESS_SECTIONS)
  const [tab, setTab] = useState<string>(data.BUSINESS_SECTIONS[0].key)
  const [coverImage, setCoverImage] = useState<string>(images.businessCover)
  const [changingMode, setChangingMode] = useState<boolean>(false)
  const [changingLanguage, setChangingLanguage] = useState<boolean>(false)
  const [changingPalette, setChangingPalette] = useState<boolean>(false)
  const [clickedPaletteButton, setClickedPaletteButton] = useState<boolean>(false)
  const [languageLinkProps, setLanguageLinkProps] = useState<LinkProps>({
    href: '/',
    locale: LANGUAGES.EN,
  })

  const atAnimationHalf = (callback: () => void) => {
    setTimeout(() => callback(), ANIMATION_TIME / 2)
  }

  useEffect(() => {
    const queryParams = codeParams(mode, section)
    const changeLanguageObj: {[key in LANGUAGES]: LANGUAGES} = {
      EN: LANGUAGES.ES,
      ES: LANGUAGES.EN,
    }
    const nextLanguage = (changeLanguageObj[language] || LANGUAGES.EN).toLowerCase()
    if (language) {
      setLanguageLinkProps({
        href: `/${nextLanguage}?${queryParamsKey}=${queryParams}`,
        locale: nextLanguage as LANGUAGES,
      })
    }
  }, [language, mode, section])

  const changeMode = () => {
    const newMode = mode === MODES.BUSINESS ? MODES.CHILL : MODES.BUSINESS
    onChangeMode(newMode)
    onChangeSection(
      newMode === MODES.BUSINESS ? SECTIONS.ABOUT_ME_BUSINESS : SECTIONS.ABOUT_ME_CHILL
    )
    setChangingMode(true)
    atAnimationHalf(() => {
      if (newMode === MODES.BUSINESS) {
        setTabSections(data.BUSINESS_SECTIONS)
        setTab(data.BUSINESS_SECTIONS[0].key)
        setCoverImage(images.businessCover)
      } else if (newMode === MODES.CHILL) {
        setTabSections(data.CHILL_SECTIONS)
        setTab(data.CHILL_SECTIONS[0].key)
        setCoverImage(images.chillCover)
      } else {
        setTabSections([])
        setTab('')
        setCoverImage(images.notFound)
      }
    })
  }

  const changePalette = () => {
    if (PALETTE.DARK === palette) {
      // TODO: This if will prevent changing the palette until
      // this feature is fully implemented
      // return
    }
    setChangingPalette(true)
    const changePaletteObj: {[key in PALETTE]: PALETTE} = {
      light: PALETTE.DARK,
      dark: PALETTE.LIGHT,
    }
    atAnimationHalf(() => setPalette(changePaletteObj[palette]))
    setClickedPaletteButton(true)
  }

  return (
    <Card className={styles.card}>
      {/* Background */}
      <Box className={styles.card_background}>
        <Box className={styles.card_background_filter} />
        <Image
          src={coverImage}
          className={`${styles.card_background_image} ${changingMode ? styles.fade_animation : ''}`}
          fill
          keepRatio={false}
          alt='Background'/>
      </Box>

      {/* Profile */}
      <Box className={styles.card_profile}>
        <Box className={styles.card_profile_avatar}>
          <Box className={styles.card_profile_avatar_container}>
            <Fade in={mode === MODES.BUSINESS} timeout={ANIMATION_TIME}>
              <Avatar
                src={images.profile}
                className={styles.card_profile_avatar_container_img}
                alt={data.PERSONAL.name}
                variant='circular'/>
            </Fade>
          </Box>
          <Box className={styles.card_profile_avatar_container}>
            <Fade in={mode === MODES.CHILL} timeout={ANIMATION_TIME}>
              <Avatar
                src={images.profilePixel}
                className={styles.card_profile_avatar_container_img}
                alt={data.PERSONAL.name}
                variant='circular'/>
            </Fade>
          </Box>
        </Box>
        <Box className={styles.card_profile_text}>
          <Typography variant='h4' color='whitesmoke' fontWeight='bold'>
            {data.PERSONAL.name}
          </Typography>
          <Typography variant='h5' color='whitesmoke' className={styles.card_profile_text_role}>
            {data.PERSONAL.role}
          </Typography>
        </Box>
      </Box>

      {/* Modes */}
      <Box className={styles.mode_container}>
        <IconButton
          onClick={() => changeMode()}
          className={`${changingMode ? styles.rotate_animation : ''}`}
          onAnimationEnd={() => setChangingMode(false)}
          aria-label='Change experience'>
          <TheaterComedyIcon fontSize='large' color='primary' className={styles.mode_icon} />
        </IconButton>
        <Link {...languageLinkProps} aria-label='Change language'>
          <IconButton
            onClick={() => setChangingLanguage(true)}
            className={`${changingLanguage ? styles.flip_animation : ''}`}
            onAnimationEnd={() => setChangingLanguage(false)}
            aria-label='Change language'>
            <TranslateIcon fontSize='large' color='primary' />
          </IconButton>
        </Link>
        <IconButton
          onClick={() => changePalette()}
          className={`${changingPalette ? styles.rotate_animation : ''}`}
          onAnimationEnd={() => setChangingPalette(false)}
          aria-label='Change theme'>
          {palette === PALETTE.DARK && <LightMode fontSize='large' color='primary' />}
          {palette === PALETTE.LIGHT && <DarkMode fontSize='large' color='primary' />}
        </IconButton>
      </Box>

      {/* Tabs */}
      <Box
        className={`${styles.card_tabs} ${{dark: styles.card_tabs_dark, light: styles.card_tabs_light}[palette]}`}>
        <Tabs
          allowScrollButtonsMobile
          variant='scrollable'
          scrollButtons='auto'
          value={tab}
          onChange={(_, tab) => {
            setTab(tab)
            onChangeSection(tab)
          }}
          className={`${styles.card_tabs_container} ${changingMode ? styles.slide_animation : ''}`}>
          {tabSections.map((tab, i) => (
            <Tab
              disableRipple
              key={i}
              value={tab.key}
              label={
                <Typography textTransform='capitalize' className={styles.card_tabs_label}>
                  {tab.label}
                </Typography>
              }
              icon={createElement(getIcon(tab.key), {
                className: styles.card_tabs_tab_icon,
              })}
              iconPosition='start'
              className={styles.card_tabs_tab}
              aria-label={tab.label}/>
          ))}
        </Tabs>
      </Box>
      {clickedPaletteButton && (
        <Modal {...(misc.featureUnderDevelopment as unknown as ModalProps)} />
      )}
    </Card>
  )
}

export default Header

// TODO: Add transition for texts (Just a random guy in the role)
// TODO: Change header background images
// TODO: Avatar image and about image should not be the same
