'use client'
// React
import React, {createElement, useEffect, useMemo, useState} from 'react'
// NextJS
import Image from 'next/image'
// Data
import DATA from '@/data/data'
// Material UI
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
// Utils
import {getDevIconSrc, getIcon} from '@/utils/icons'
import {rbgToRgba} from '@/utils/misc'
// Styles
import styles from './Skills.module.css'

const SkillIconCard: React.FC<SkillIconCardProps> = ({skill, grow = false}) => (
  <Box className={`${styles.skillIcon} ${grow ? styles.grow : ''}`}>
    <Box className={styles.skillIcon_icon_container}>
      {getDevIconSrc(skill.title) ? (
        <Image src={getDevIconSrc(skill.title)} alt={skill.title} fill></Image>
      ) : (
        createElement(getIcon(skill.title), {
          className: styles.skillIcon_icon,
        })
      )}
    </Box>
    <Box className={styles.skillIcon_text_container}>
      <Typography
        variant='h6'
        className={styles.skillIcon_text}
        textTransform='capitalize'>
        {skill.title}
      </Typography>
    </Box>
  </Box>
)

const CategoryIconCard: React.FC<CategoryIconCardProps> = ({
  category,
  onHover,
  onLeave,
  onClick,
}) => {
  const categoryBackgroundColor = rbgToRgba(category.rgbColor, 0.7)
  return (
    <Paper
      className={styles.categoryIcon_paper}
      sx={{
        boxShadow: `inset 0px 0px 5px ${categoryBackgroundColor}, \
        0px 0px 20px ${categoryBackgroundColor}, \
        inset -7px -2px 4px ${categoryBackgroundColor}`,
      }}>
      <ButtonBase
        className={styles.categoryIcon}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onClick}
        disableTouchRipple>
        <Box className={styles.categoryIcon_container}>
          {getDevIconSrc(category.title) ? (
            <Image
              src={getDevIconSrc(category.title)}
              alt={category.title}
              fill></Image>
          ) : (
            createElement(getIcon(category.title), {
              className: styles.categoryIcon_icon,
            })
          )}
          <Typography
            variant='h6'
            className={styles.categoryIcon_text}
            textTransform='capitalize'>
            {category.title}
          </Typography>
        </Box>
      </ButtonBase>
    </Paper>
  )
}

const CategoryIconBackground: React.FC<CategoryIconBackgroundProps> = ({
  Icon,
}) => (
  <Box className={styles.categoryIconBackground}>
    <Box className={styles.categoryIconBackground_container}>
      <Icon className={styles.categoryIconBackground_icon} />
    </Box>
  </Box>
)

const SkillStack: React.FC<SkillStackProps> = ({
  skillStack,
  toggleShowedCategory,
  isCategoryShowed,
}) => {
  const [zoomedCategory, setZoomedCategory] = useState('')

  return (
    <Box className={styles.container}>
      {skillStack.map((category, cIndex) => (
        // Each child in a list should have a unique "key" prop.
        <>
          <CategoryIconCard
            category={category}
            key={cIndex}
            onHover={() => setZoomedCategory(category.title)}
            onLeave={() => setZoomedCategory('')}
            onClick={() => toggleShowedCategory(category.title)}/>
          {category.skills.map((skill, sIndex) => (
            <Box
              key={`${cIndex}-${sIndex}`}
              className={` ${styles.category_container} ${
                isCategoryShowed(category.title) ? '' : styles.collapsed
              }`}>
              <Paper
                className={styles.category}
                sx={{
                  background: `linear-gradient(70deg, ${rbgToRgba(
                    category.rgbColor,
                    0.7
                  )}, rgba(0,0,0,0) 70%, rgba(0,0,0,0.2) 95%)`,
                }}>
                <CategoryIconBackground Icon={getIcon(category.title)} />
                <SkillIconCard
                  skill={skill}
                  grow={category.title === zoomedCategory}/>
                <Typography
                  className={styles.category_title}
                  variant='subtitle1'
                  textTransform='capitalize'
                  noWrap>
                  {category.title}
                </Typography>
              </Paper>
            </Box>
          ))}
        </>
      ))}
    </Box>
  )
}

const Skills: React.FC = () => {
  const allCategories = useMemo(
    () => [
      ...DATA.TECH_SKILLS.map(category => category.title),
      ...DATA.SOFT_SKILLS.map(category => category.title),
    ],
    []
  )

  const [showedCategories, setShowedCategories] = useState(allCategories)
  const [isShowingAllCategories, setIsShowingAllCategories] = useState(true)
  const [isShowingNoCategories, setIsShowingNoCategories] = useState(false)

  const toggleShowedCategory = (category: string) => {
    const categoryIndex = showedCategories.indexOf(category)
    if (categoryIndex === -1) {
      setShowedCategories([...showedCategories, category])
    } else {
      setShowedCategories(
        showedCategories.filter(showedCategory => showedCategory !== category)
      )
    }
  }

  useEffect(() => {
    setIsShowingAllCategories(showedCategories.length === allCategories.length)
    setIsShowingNoCategories(showedCategories.length === 0)
  }, [showedCategories, allCategories])

  const isCategoryShowed = (category: string) =>
    showedCategories.indexOf(category) !== -1
  return (
    <Box className={styles.container}>
      <Box className={styles.action_buttons}>
        {!isShowingAllCategories && (
          <Button
            variant='outlined'
            color='secondary'
            size='large'
            className={styles.buttons}
            startIcon={<UnfoldMoreIcon />}
            onClick={() => setShowedCategories(allCategories)}>
            Show All
          </Button>
        )}
        {!isShowingNoCategories && (
          <Button
            variant='outlined'
            color='secondary'
            size='large'
            className={styles.buttons}
            startIcon={<UnfoldLessIcon />}
            onClick={() => setShowedCategories([])}>
            Hide All
          </Button>
        )}
      </Box>
      <SkillStack
        skillStack={DATA.TECH_SKILLS}
        toggleShowedCategory={toggleShowedCategory}
        isCategoryShowed={isCategoryShowed}/>
      <SkillStack
        skillStack={DATA.SOFT_SKILLS}
        toggleShowedCategory={toggleShowedCategory}
        isCategoryShowed={isCategoryShowed}/>
    </Box>
  )
}

export default Skills
