'use client'
// React
import {useEffect, useContext} from 'react'
// NextJS
import {useSearchParams} from 'next/navigation'
// Components
import {DataContext} from '@/components/LayoutWrapper'
// Data
import {SECTIONS, MODES} from '@/data/data'
// Utils
import {getCookie, COOKIES} from '@/utils/cookies'

const queryParamMap: QueryParamsMap = [
  {value: MODES.BUSINESS, key: 'b'},
  {value: MODES.CHILL, key: 'c'},
  {value: SECTIONS.ABOUT_ME_BUSINESS, key: 'a'},
  {value: SECTIONS.SKILLS, key: 's'},
  {value: SECTIONS.EXPERIENCE, key: 'e'},
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

export const codeParams: CodeQueryParams = (mode: string, section: string) => {
  const modeParam = queryParamMap.find(p => p.value === mode)?.key
  const sectionParam = queryParamMap.find(p => p.value === section)?.key
  return `${modeParam}${sectionParam}`
}

export const decodeParams: DecodeQueryParams = (params: string) => {
  if (params?.length !== 2) return {mode: null, section: null}
  const [modeParam, sectionParam] = [params?.charAt(0), params?.charAt(1)]
  const mode = queryParamMap.find(p => p.key === modeParam)?.value
  const section = queryParamMap.find(p => p.key === sectionParam)?.value
  return {mode, section}
}

export const queryParamsKey = 'q'

const QueryParams: React.FC<QueryParamsProps> = ({mode, setMode, section, setSection}) => {
  const searchParams = useSearchParams()
  const {data} = useContext(DataContext)

  useEffect(() => {
    const setExperience = (mode: MODES, section: SECTIONS) => {
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
    const {mode, section} = decodeParams(queryParams)

    const modeCookie = getCookie(COOKIES.MODE)
    const sectionCookie = getCookie(COOKIES.SECTION)

    if (!mode && !section) {
      setExperience(modeCookie as MODES, sectionCookie as SECTIONS)
    } else if (mode || section) {
      setExperience(mode as MODES, section as SECTIONS)
    }
  }, [data, searchParams, setMode, setSection])

  useEffect(() => {
    // TODO: Bad practices, NextJS 13 doesn't support updating the URL on the client side
    const currentURL = window.location.href.split('?')[0]
    const newURL = `${currentURL}?${queryParamsKey}=${codeParams(mode, section)}`
    window.history.replaceState(null, '', newURL)
  }, [mode, section])

  return <></>
}

export default QueryParams
