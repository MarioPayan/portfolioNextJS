'use client'
// React
import {useEffect, useContext} from 'react'
// NextJS
import {useSearchParams} from 'next/navigation'
// Components
import {DataContext} from '@/components/LayoutWrapper'
// Data
import {SECTIONS, MODES, LANGUAGES} from '@/data/data'
// Utils
import {getCookie, COOKIES} from '@/utils/cookies'

const queryParamMap: QueryParamsMap = [
  // Language
  {value: LANGUAGES.ENGLISH, key: 'e'},
  {value: LANGUAGES.SPANISH, key: 's'},
  // Mode
  {value: MODES.BUSINESS, key: 'b'},
  {value: MODES.CHILL, key: 'c'},
  // Section
  {value: SECTIONS.ABOUT_ME_BUSINESS, key: 'a'},
  {value: SECTIONS.SKILLS, key: 'k'},
  {value: SECTIONS.EXPERIENCE, key: 'x'},
  {value: SECTIONS.PROJECTS, key: 'p'},
  {value: SECTIONS.EDUCATION, key: 'd'},
  {value: SECTIONS.ABOUT_ME_CHILL, key: 'h'},
  {value: SECTIONS.MUSIC, key: 'm'},
  {value: SECTIONS.TRAVELING, key: 't'},
  {value: SECTIONS.DOGS, key: 'o'},
  {value: SECTIONS.GEEK, key: 'g'},
  {value: SECTIONS.ROLES, key: 'r'},
  {value: SECTIONS.FILMS, key: 'f'},
  {value: SECTIONS.SPORTS, key: 'z'},
  {value: SECTIONS.RANDOM, key: 'n'},
]

export const codeParams: CodeQueryParams = (language: string, mode: string, section: string) => {
  const languageParam = queryParamMap.find(p => p.value === language)?.key
  const modeParam = queryParamMap.find(p => p.value === mode)?.key
  const sectionParam = queryParamMap.find(p => p.value === section)?.key
  return `${languageParam}${modeParam}${sectionParam}`
}

export const decodeParams: DecodeQueryParams = (params: string) => {
  if (params?.length !== 3) return {language: null, mode: null, section: null}
  const [languageParam, modeParam, sectionParam] = params.split('')
  const language = queryParamMap.find(p => p.key === languageParam)?.value
  const mode = queryParamMap.find(p => p.key === modeParam)?.value
  const section = queryParamMap.find(p => p.key === sectionParam)?.value
  return {language, mode, section}
}

export const queryParamsKey = 'q'

const QueryParams: React.FC<QueryParamsProps> = ({
  language,
  setLanguage,
  mode,
  setMode,
  section,
  setSection,
}) => {
  const searchParams = useSearchParams()
  const {data} = useContext(DataContext)

  useEffect(() => {
    const setExperience = (language: LANGUAGES, mode: MODES, section: SECTIONS) => {
      if (language && Object.values(LANGUAGES).includes(language)) {
        setLanguage(language)
      }
      if (section && Object.values(SECTIONS).includes(section)) {
        if (data.BUSINESS_SECTIONS.map(s => s.key).includes(section)) {
          setMode(MODES.BUSINESS)
        }
        if (data.CHILL_SECTIONS.map(s => s.key).includes(section)) {
          setMode(MODES.CHILL)
        }
        setSection(section)
      } else if (!section && mode && Object.values(MODES).includes(mode)) {
        setMode(mode)
        if (mode === MODES.BUSINESS) {
          setSection(SECTIONS.ABOUT_ME_BUSINESS)
        } else if (mode === MODES.CHILL) {
          setSection(SECTIONS.ABOUT_ME_CHILL)
        }
      }
    }

    const queryParams = searchParams.get(queryParamsKey) || ''
    const {language, mode, section} = decodeParams(queryParams)

    const languageCookie = getCookie(COOKIES.LANGUAGE)
    const modeCookie = getCookie(COOKIES.MODE)
    const sectionCookie = getCookie(COOKIES.SECTION)

    const defaultLanguage = LANGUAGES.ENGLISH // TODO: Detect
    const defaultMode = MODES.BUSINESS
    const defaultSection = SECTIONS.ABOUT_ME_BUSINESS

    const newLanguage = language || languageCookie || defaultLanguage
    const newMode = mode || modeCookie || defaultMode
    const newSection = section || sectionCookie || defaultSection

    setExperience(newLanguage, newMode, newSection)
  }, [data, searchParams, setLanguage, setMode, setSection])

  useEffect(() => {
    // TODO: Bad practices, NextJS 13 doesn't support updating the URL on the client side
    const currentURL = window.location.href.split('?')[0]
    const newURL = `${currentURL}?${queryParamsKey}=${codeParams(language, mode, section)}`
    window.history.replaceState(null, '', newURL)
  }, [language, mode, section])

  return <></>
}

export default QueryParams
