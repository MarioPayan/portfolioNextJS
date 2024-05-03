'use client'
// React
import React, {createElement, useContext} from 'react'
// Components
import {DataContext} from '@/components/LayoutWrapper'
// Data
import {MODES} from '@/data/data'
// Material UI
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import FormatQuote from '@mui/icons-material/FormatQuote'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import WorkIcon from '@mui/icons-material/Work'
// Utils
import {getIcon} from '@/utils/icons'
import {openInNewTab} from '@/utils/misc'
import {sortFrom} from '@/utils/dates'
import {Image, images} from '@/utils/images'
// Styles
import styles from './About.module.css'

const Inline: React.FC<InlineProps> = ({children}) => (
  <Box className={styles.inline}>{children}</Box>
)

const About: React.FC<AboutProps> = ({mode}) => {
  const {data, misc} = useContext(DataContext)
  const profileImages = {
    BUSINESS: images.profileNoBG,
    CHILL: images.profileChillNoBG,
  }

  return (
    <Box>
      <Paper className={styles.container}>
        <Box className={styles.info}>
          <Typography variant='h4' color='primary' fontWeight='bold'>
            {`${misc.intro} ${data.PERSONAL.name}`}
          </Typography>
          <Typography>{data.PERSONAL.description[mode]}</Typography>
          <Box className={styles.inline}>
            {mode === MODES.BUSINESS && (
              <>
                <WorkIcon color='secondary' />
                <Typography>
                  <b>{data.EXPERIENCE.sort(sortFrom)[0].position}</b> {`${misc.at}`}{' '}
                  <b>{data.EXPERIENCE.sort(sortFrom)[0].where}</b>
                </Typography>
              </>
            )}
            {mode === MODES.CHILL && (
              <>
                <FormatQuote color='secondary' />
                <Typography fontWeight='bold'>&quot;{data.PERSONAL.quote}&quot;</Typography>
              </>
            )}
          </Box>
          <Box className={styles.inline}>
            <LocationOnIcon color='secondary' />
            <Typography fontWeight='bold'>{data.PERSONAL.location}</Typography>
          </Box>

          <Typography variant='h5' fontWeight='bold'>
            {`${misc.contact}`}
          </Typography>
          {data.CONTACTS.filter(c => c.mode === mode).map((contact, index) => (
            <Box className={styles.inline} key={index}>
              <ButtonBase onClick={() => openInNewTab(contact.url)} sx={{width: 'fit-content'}}>
                <Inline>
                  {createElement(getIcon(contact.label), {color: 'secondary'})}
                  <Typography fontWeight='bold'>{contact.name}</Typography>
                </Inline>
              </ButtonBase>
            </Box>
          ))}
        </Box>

        <Box className={styles.image}>
          <Image src={profileImages[mode]} fill alt='Profile' />
        </Box>
      </Paper>
    </Box>
  )
}

export default About

// TODO: Mejorar botones
