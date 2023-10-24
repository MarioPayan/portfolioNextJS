'use client'
// React
import {useContext} from 'react'
// Components
import {DataContext} from '@/components/LayoutWrapper'
// Material UI
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import StarRateIcon from '@mui/icons-material/StarRate'
import Typography from '@mui/material/Typography'
// Utils
import {Image} from '@/utils/images'
import {dateDiff, changeDateFormat, sortFrom} from '@/utils/dates'
import {rbgToRgba} from '@/utils/misc'
// Styles
import styles from './Experience.module.css'

const Card: React.FC<ExperienceCardProps> = ({experience}) => {
  const {language} = useContext(DataContext)

  return (
    <Paper
      className={styles.card}
      sx={{
        background: `linear-gradient(-15deg, ${rbgToRgba(
          experience.rgbColor,
          0.7,
        )}, transparent 80%, rgba(0,0,0,0.2) 95%)`,
      }}>
      <Box className={styles.card_header}>
        <Box className={styles.card_header_text}>
          <Typography variant='h5'>{experience.position}</Typography>
          <Typography variant='subtitle1' className={styles.card_subtitle}>
            {experience.where}
          </Typography>
        </Box>
        <Box className={styles.card_background}>
          <Image src={experience.image} alt='company' fill />
        </Box>
      </Box>
      <Box className={styles.card_divider}>
        <Divider />
      </Box>
      <List dense className={styles.card_list}>
        {experience.achievements.map((achievement: string, index: number) => (
          <ListItem key={index} disablePadding disableGutters>
            <ListItemIcon className={styles.card_achievementIcon}>
              <StarRateIcon />
            </ListItemIcon>
            <ListItemText primary={achievement} />
          </ListItem>
        ))}
      </List>
      <Box className={styles.card_date}>
        <Box className={styles.card_bottomText}>
          <Typography variant='subtitle2' className={styles.card_dateInfo}>
            {`${changeDateFormat(experience.from, language)} - \
            ${experience.to ? changeDateFormat(experience.to, language) : 'present'}`}
          </Typography>
          <Typography variant='subtitle1' className={styles.card_dateDuration}>
            {dateDiff(experience.from, experience.to || '')}
          </Typography>
        </Box>
      </Box>
    </Paper>
  )
}

const Experience: React.FC = () => {
  const {data} = useContext(DataContext)

  return (
    <Box className={styles.container}>
      {data.EXPERIENCE.sort(sortFrom).map((experience: Experience, index: number) => (
        <Card key={index} experience={experience} />
      ))}
    </Box>
  )
}

export default Experience
