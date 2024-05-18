'use client'
// React
import React, {createElement, useMemo, useContext} from 'react'
// Components
import {DataContext} from '@/components/LayoutWrapper'
// Material UI
import {keyframes} from '@mui/system'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Lock from '@mui/icons-material/Lock'
import Paper from '@mui/material/Paper'
import styled from '@mui/system/styled'
import Typography from '@mui/material/Typography'
// Utils
import {getDevIconSrc, getIcon} from '@/utils/icons'
import {Image} from '@/utils/images'
import {randomSort} from '@/utils/misc'
// Styles
import styles from './Projects.module.css'

const InfinityCarousel: React.FC<InfinityCarouselProps> = ({children}) => {
  const {repetition, offset} = useMemo(() => {
    const numberElements = children.length
    const repetition = numberElements ? Math.ceil(10 / children.length) * 2 : 0
    const remainder = (repetition * numberElements) % 5
    const offset = {0: 0, 1: -1, 2: 1, 4: 2, 6: -1}[remainder]
    return {repetition, offset}
  }, [children.length])

  const Container: React.FC<ContainerProps> = ({children, offset, className}) => {
    const animation = (offset: number) =>
      keyframes`
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-100% - ${offset * 25}px)); }`

    const StyledDiv = styled('div')({
      animation: `${animation(offset)} 10s linear infinite`,
      '&:hover': {
        // TODO: Fix this
        animationPlayState: 'paused',
      },
    })
    return <StyledDiv className={className}>{children}</StyledDiv>
  }

  return (
    <Box className={styles.infinityCarousel}>
      <Box className={styles.infinityCarousel_mask}></Box>
      <Container className={styles.infinityCarousel_container} offset={offset || 0}>
        {Array.from({length: repetition}).map(() => children)}
      </Container>
    </Box>
  )
}

const Project: React.FC<ProjectProps> = ({project}) => {
  const {misc} = useContext(DataContext)

  return (
    <Paper className={styles.project}>
      <Box className={styles.project_info}>
        <Typography variant='h5' className={styles.project_text}>
          {project.label}
        </Typography>
        <Typography variant='body1' className={styles.project_text}>
          {project.description}
        </Typography>

        <Box className={styles.iconBar}>
          <InfinityCarousel>
            {project.stack.sort(randomSort).map((tech, index) =>
              getDevIconSrc(tech) ? (
                <Image
                  key={index}
                  src={getDevIconSrc(tech)}
                  title={tech}
                  alt={tech}
                  height={20}
                  width={20}
                  noPlaceHolder
                  className={styles.infinityCarousel_icon}></Image>
              ) : (
                createElement(getIcon(tech), {
                  title: tech,
                  className: styles.infinityCarousel_icon,
                  key: index,
                })
              ),
            )}
          </InfinityCarousel>
        </Box>
        <Button
          variant='contained'
          disabled={!project.link}
          endIcon={!project.link ? <Lock /> : null}
          onClick={() => {
            window.open(project.link, '_blank', 'noopener,noreferrer')
          }}>
          {`${misc.visit}`}
        </Button>
      </Box>
      <Box className={styles.project_image_container}>
        <Image
          src={project.image}
          fill
          loading='lazy'
          alt={project.label}
          className={styles.project_image}
        />
      </Box>
    </Paper>
  )
}

const Projects: React.FC = () => {
  const {data} = useContext(DataContext)

  return (
    <Box className={styles.container}>
      {data.PROJECTS.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </Box>
  )
}

export default Projects

// TODO: add collapsable with all skills with naes
