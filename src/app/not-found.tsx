// NextJS
import Link from 'next/link'
// Metadata
import appMetadata from '@/components/Metadata'
// Wrapper
import LayoutWrapper from '@/components/LayoutWrapper'
// Data
import {LANGUAGES, Misc} from '@/data/data'
// Material UI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
// Utils
import {Image, image404} from '@/utils/images'
// Styles
import styles from './notFound.module.css'

export const metadata = {...appMetadata, title: '404 | ¯\\_(ツ)_/¯'}

const NotFound: React.FC<{language: LANGUAGES}> = ({language}) => {
  const buttonText = Misc(language).goBackHome as string

  return (
    <LayoutWrapper>
      <Box className={styles.container}>
        <Box className={styles.imageContainer}>
          <Image src={image404} fill priority alt='404 | Not found' />
        </Box>
        <Link href='/'>
          <Button variant='contained' color='primary' endIcon={<HomeIcon />}>
            {buttonText}
          </Button>
        </Link>
      </Box>
    </LayoutWrapper>
  )
}

export default NotFound
