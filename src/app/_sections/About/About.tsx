'use client'
// React
import React, {createElement} from 'react'
// NextJS
import Image from 'next/image'
// Data
import DATA from '@/data/data'
// Material UI
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WorkIcon from '@mui/icons-material/Work'
// Utils
import {getIcon} from '@/utils/icons'
import {openInNewTab} from '@/utils/misc'
import {sortFrom} from '@/utils/dates'
import images from '@/utils/images'
// Styles
import styles from './About.module.css'

const Inline: React.FC<InlineProps> = ({children}) => (
  <Box className={styles.inline}>{children}</Box>
)

const About: React.FC<AboutProps> = ({mode}) => {
  const profileImages = {
    BUSINESS: images.profileNoBG,
    CHILL: images.profileChillNoBG,
  }

  return (
    <Box>
      <Paper className={styles.container}>
        <Box className={styles.info}>
          <Typography variant='h4' color='primary' className={styles.title}>
            Hi! I&apos;m {DATA.PERSONAL.name}
          </Typography>
          <Typography>{DATA.PERSONAL.description[mode]}</Typography>
          <Box className={styles.inline}>
            <WorkIcon color='secondary' />
            <Typography>
              {DATA.EXPERIENCE.sort(sortFrom)[0].position} At{' '}
              {DATA.EXPERIENCE.sort(sortFrom)[0].where}
            </Typography>
          </Box>
          <Box className={styles.inline}>
            <LocationOnIcon color='secondary' />
            <Typography>{DATA.PERSONAL.location}</Typography>
          </Box>

          <Typography variant='h5' className={styles.title}>
            Contact
          </Typography>
          {DATA.CONTACTS.filter(c => c.mode === mode).map((contact, index) => (
            <Box className={styles.inline} key={index}>
              <ButtonBase
                onClick={() => openInNewTab(contact.url)}
                sx={{width: 'fit-content'}}>
                <Inline>
                  {createElement(getIcon(contact.label), {color: 'secondary'})}
                  <Typography>{contact.name}</Typography>
                </Inline>
              </ButtonBase>
            </Box>
          ))}
        </Box>

        <Box className={styles.image}>
          <Image src={profileImages[mode]} fill priority alt='Profile' />
        </Box>
      </Paper>
    </Box>
  )
}

export default About
