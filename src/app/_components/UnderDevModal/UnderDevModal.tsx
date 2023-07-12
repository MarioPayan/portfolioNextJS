'use client'
// React
import {useState} from 'react'
// Material UI
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ConstructionIcon from '@mui/icons-material/Construction'
// Styles
import styles from './UnderDevModal.module.css'

const UnderDevModal: React.FC = () => {
  const [open, setOpen] = useState(true)
  const title = 'Under Development'
  const text = 'Welcome to my website! I appreciate your visit. While the site is currently under development, feel free to explore and check back anytime you\'d like'

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      className={styles.container}>
      <Box>
        <Paper className={styles.paper}>
          <Typography variant='h4' color='primary' className={styles.title}>
            <ConstructionIcon /> {title}
          </Typography>
          <Typography>{text}</Typography>
        </Paper>
      </Box>
    </Modal>
  )
}

export default UnderDevModal
