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
import {dateDiff, changeDateFormat} from '@/utils/dates'
import {rbgToRgba} from '@/utils/misc'
// Styles
import styles from './Education.module.css'

const Card: React.FC<EducationCardProps> = ({education}) => {
  const {language} = useContext(DataContext)

  return (
    <Paper
      className={styles.card}
      sx={{
        background: `linear-gradient(-15deg, ${rbgToRgba(
          education.rgbColor,
          0.7
        )}, rgba(0,0,0,1) 80%, rgba(0,0,0,0.2) 95%)`,
      }}>
      <Box className={styles.card_header}>
        <Typography variant='h5' className={styles.card_title}>
          {education.position}
        </Typography>
        <Typography variant='subtitle1' className={styles.card_subtitle}>
          {education.where}
        </Typography>
      </Box>
      <Box className={styles.card_divider}>
        <Divider />
      </Box>
      <List dense className={styles.card_list}>
        {education.achievements.map((achievement: string, index: number) => (
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
            {`${changeDateFormat(education.from, language)} - \
            ${education.to ? changeDateFormat(education.to, language) : 'present'}`}
          </Typography>
          <Typography variant='subtitle1' className={styles.card_dateDuration}>
            {dateDiff(education.from, education.to || '')}
          </Typography>
        </Box>
      </Box>
      <Image
        src={education.image}
        alt={education.where}
        fill
        className={styles.card_backgroundImg}></Image>
    </Paper>
  )
}

const Education: React.FC = () => {
  const {data} = useContext(DataContext)
  const sortFrom = (a: Education, b: Education): number =>
    new Date(b.from).getTime() - new Date(a.from).getTime()

  return (
    <Box className={styles.container}>
      {data.EDUCATION.sort(sortFrom).map((education: Education, index: number) => (
        <Card key={index} education={education} />
      ))}
    </Box>
  )
}

export default Education
