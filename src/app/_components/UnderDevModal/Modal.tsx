'use client'
// React
import {createElement, useEffect, useState} from 'react'
// Utils
import {getIcon} from '@/utils/icons'
// Material UI
import Box from '@mui/material/Box'
import ModalMUI from '@mui/material/Modal'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
// Styles
import styles from './Modal.module.css'

const Modal: React.FC<ModalProps> = ({
  open = true,
  onClose,
  icon,
  title,
  description,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(open)

  useEffect(() => {
    setModalOpen(open)
  }, [open])

  const onCloseModal = () => {
    setModalOpen(false)
    if (onClose) onClose()
  }

  return (
    <ModalMUI
      open={modalOpen}
      onClose={onCloseModal}
      className={styles.container}>
      <Box>
        <Paper className={styles.paper}>
          <Typography variant='h4' color='primary' className={styles.title}>
            {icon && createElement(getIcon(icon), {
              className: styles.icon,
            })}
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Paper>
      </Box>
    </ModalMUI>
  )
}

export default Modal
