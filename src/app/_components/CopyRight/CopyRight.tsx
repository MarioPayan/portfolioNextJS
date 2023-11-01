'use client'
// Data
import Data from '@/data/data'
// Material UI
import Typography from '@mui/material/Typography'
// Styles
import styles from './CopyRight.module.css'

const CopyRight: React.FC = () => {
  const text = `© ${Data().PERSONAL.name} ${new Date().getFullYear()}`

  return (
    <Typography variant='h5' color='primary' className={styles.copyRight}>
      {text}
    </Typography>
  )
}

export default CopyRight
