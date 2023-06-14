'use client'
// React
import React, {createElement} from 'react'
// Components
import {Carousel} from '@/components'
// Material UI
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
// Utils
import {openInNewTab} from '@/utils/misc'
import {getIcon} from '@/utils/icons'
// Styles
import styles from './Hobbies.module.css'

const Hobbies: React.FC<HobbiesProps> = ({section}) => {
  const alternateGradient: AlternateGradient = index =>
    (index % 2 === 0 ? '-45deg' : '135deg')

  const alternateFlexDirection: AlternateFlexDirection = index =>
    (index % 2 === 0 ? 'row' : 'row-reverse')

  const SocialIconButtons: React.FC<SocialIconButtonsProps> = ({
    subSection,
  }) => {
    const SocialIconButton: React.FC<SocialIconButtonProps> = ({
      label,
      url,
      iconKey,
    }) => (
      <IconButton
        aria-label={label}
        color='secondary'
        onClick={() => openInNewTab(url)}>
        {createElement(getIcon(iconKey), {
          className: styles.social_icon,
        })}
      </IconButton>
    )

    if (!subSection.social) return <></>

    return (
      <Box className={styles.social_container}>
        {subSection.social.youtube && (
          <SocialIconButton
            label='Youtube'
            url={subSection.social.youtube}
            iconKey='Youtube'/>
        )}
        {subSection.social?.facebook && (
          <SocialIconButton
            label='Facebook'
            url={subSection.social.facebook}
            iconKey='Facebook'/>
        )}
        {subSection.social?.instagram && (
          <SocialIconButton
            label='Youtube'
            url={subSection.social.instagram}
            iconKey='Instagram'/>
        )}
      </Box>
    )
  }

  return (
    <Box className={styles.container}>
      <Paper className={styles.section}>
        <Box className={styles.section_info}>
          <Typography variant='h4' color='primary' className={styles.title}>
            {section.title}
          </Typography>
          <Typography>{section.description}</Typography>
        </Box>
      </Paper>
      {section.sections.map((subSection, index) => (
        <Paper
          key={index}
          className={styles.subsection}
          sx={{
            background: `linear-gradient(${alternateGradient(
              index
            )},rgba(255, 255, 255, 1) 0%,rgba(0, 0, 0, 0.5) 40%)`,
          }}>
          <Box
            className={styles.subsection_container}
            flexDirection={alternateFlexDirection(index)}>
            <Box className={styles.subsection_info}>
              <Typography variant='h4' color='primary' className={styles.title}>
                {subSection.title}
              </Typography>
              <Typography>{subSection.description}</Typography>
              <SocialIconButtons subSection={subSection} />
            </Box>
            <Box className={styles.carousel_container}>
              <Carousel images={subSection.images} random />
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  )
}

export default Hobbies
