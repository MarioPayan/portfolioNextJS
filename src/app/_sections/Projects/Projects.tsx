'use client'
// React
import React, {createElement, useMemo} from 'react'
// NextJS
import Image from 'next/image'
// Data
import DATA from '@/data/data'
// Material UI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import {keyframes} from '@mui/system'
import Paper from '@mui/material/Paper'
import Lock from '@mui/icons-material/Lock'
import styled from '@mui/system/styled'
import Typography from '@mui/material/Typography'
// Utils
import {getAssetURL} from '@/utils/images'
import {getDevIconSrc, getIcon} from '@/utils/icons'
// Styles
import styles from './Projects.module.css'

const Container: React.FC<ContainerProps> = ({children, offset, className}) => {
  const animation = (offset: number) =>
    keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-100% - ${offset * 25}px)); }`

  const StyledDiv = styled('div')({
    animation: `${animation(offset)} 10s linear infinite`,
  })

  return <StyledDiv className={className}>{children}</StyledDiv>
}

const InfinityCarousel: React.FC<InfinityCarouselProps> = ({children}) => {
  const {repetition, offset} = useMemo(() => {
    const numberElements = children.length
    const repetition = numberElements ? Math.ceil(10 / children.length) * 2 : 0
    const remainder = (repetition * numberElements) % 5
    const offset = {0: 0, 1: -1, 2: 1, 4: 2, 6: -1}[remainder]
    return {repetition, offset}
  }, [children.length])

  return (
    <Box className={styles.infinityCarousel}>
      <Box className={styles.infinityCarousel_mask}></Box>
      <Container
        className={styles.infinityCarousel_container}
        offset={offset || 0}>
        {Array.from({length: repetition}).map(() => children)}
      </Container>
    </Box>
  )
}

const Project: React.FC<ProjectProps> = ({project}) => (
  <Paper className={styles.project}>
    <Box className={styles.project_info}>
      <Typography variant='h5' className={styles.project_text}>
        {project.label}
      </Typography>
      <Typography variant='body1' className={styles.project_text}>
        {project.description}
      </Typography>

      <Box display='flex' gap={1} className={styles.iconBar}>
        <InfinityCarousel>
          {project.stack.map((tech, index) =>
            (getDevIconSrc(tech) ? (
              <Image
                key={index}
                src={getDevIconSrc(tech)}
                title={tech}
                alt={tech}
                height={20}
                width={20}
                className={styles.infinityCarousel_icon}></Image>
            ) : (
              createElement(getIcon(tech), {
                title: tech,
                className: styles.infinityCarousel_icon,
                key: index,
              })
            ))
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
        Visit
      </Button>
    </Box>
    <Box
      display='flex'
      position='relative'
      width={200}
      height={200}
      alignSelf='center'>
      <Image
        src={getAssetURL(project.image)}
        fill
        priority
        alt={project.label}
        style={{borderRadius: '12px'}}/>
    </Box>
  </Paper>
)

const Projects: React.FC = () => (
  <Box className={styles.container}>
    {DATA.PROJECTS.map((project, index) => (
      <Project key={index} project={project} />
    ))}
  </Box>
)

export default Projects

// TODO: add descriptions for moving skills
