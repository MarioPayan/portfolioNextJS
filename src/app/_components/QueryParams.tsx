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

enum QUERY_PARAMS {
  MODE = 'mode',
  SECTION = 'section',
}

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

    const urlMode = searchParams.get(QUERY_PARAMS.MODE)?.toUpperCase()
    const urlSection = searchParams.get(QUERY_PARAMS.SECTION)?.toUpperCase()

    const modeCookie = getCookie(COOKIES.MODE)
    const sectionCookie = getCookie(COOKIES.SECTION)

    if (!urlMode && !urlSection) {
      setExperience(modeCookie as MODES, sectionCookie as SECTIONS)
    } else if (urlMode || urlSection) {
      setExperience(urlMode as MODES, urlSection as SECTIONS)
    }
  }, [data, searchParams, setMode, setSection])

  useEffect(() => {
    // TODO: Bad practices, NextJS 13 doesn't support updating the URL on the client side
    const currentURL = window.location.href.split('?')[0]
    const newMode = mode.toLowerCase()
    const newSection = section.toLowerCase()
    const newURL = `${currentURL}?${QUERY_PARAMS.MODE}=${newMode}&${QUERY_PARAMS.SECTION}=${newSection}`
    window.history.replaceState(null, '', newURL)
  }, [mode, section])

  return <></>
}

export default QueryParams
