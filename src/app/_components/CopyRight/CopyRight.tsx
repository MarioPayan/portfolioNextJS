'use client'
// Data
import DATA from '@/data/data'
// Material UI
import Typography from '@mui/material/Typography'
// Styles
import styles from './CopyRight.module.css'

const UnderDevModal: React.FC = () => {
  const text = `© ${DATA.PERSONAL.name} ${new Date().getFullYear()}`

  return (
    <Typography variant='h5' color='primary' className={styles.copyRight}>
      {text}
    </Typography>
  )
}

export default UnderDevModal
