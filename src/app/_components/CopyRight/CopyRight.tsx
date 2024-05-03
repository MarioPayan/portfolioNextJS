'use client'
// React
import {useContext} from 'react'
// Components
import {DataContext} from '@/components/LayoutWrapper'

// Data
import Data from '@/data/data'
// Material UI
import Typography from '@mui/material/Typography'
// Styles
import styles from './CopyRight.module.css'

const CopyRight: React.FC = () => {
  const {palette} = useContext(DataContext)
  const text = `© ${Data().PERSONAL.name} ${new Date().getFullYear()}`

  return (
    <Typography
      variant='h5'
      color={{dark: 'primary', light: 'secondary'}[palette]}
      className={styles.copyRight}>
      {text}
    </Typography>
  )
}

export default CopyRight
