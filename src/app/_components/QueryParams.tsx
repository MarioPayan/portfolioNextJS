'use client'
// React
import {useEffect, useContext} from 'react'
// NextJS
import {useSearchParams} from 'next/navigation'
// Components
import {DataContext} from '@/components/LayoutWrapper'
// Data
import {SECTIONS, MODES} from '@/data/data'

enum QUERY_PARAMS {
  MODE = 'mode',
  SECTION = 'section',
}

const QueryParams: React.FC<QueryParamsProps> = ({
  mode,
  setMode,
  section,
  setSection,
}) => {
  const searchParams = useSearchParams()
  const {data} = useContext(DataContext)

  useEffect(() => {
    const urlMode = searchParams.get(QUERY_PARAMS.MODE)?.toUpperCase()
    const urlSection = searchParams.get(QUERY_PARAMS.SECTION)?.toUpperCase()

    if (
      urlSection && Object.values(SECTIONS).includes(urlSection as SECTIONS)
    ) {
      setSection(urlSection as SECTIONS)
      if (data.BUSINESS_SECTIONS.map(s => s.key).includes(urlSection)) {
        setMode(MODES.BUSINESS)
      }
      if (data.CHILL_SECTIONS.map(s => s.key).includes(urlSection)) {
        setMode(MODES.CHILL)
      }
    } else if (
      !urlSection && urlMode && Object.values(MODES).includes(urlMode as MODES)
    ) {
      setMode(urlMode as MODES)
      if (!urlSection) {
        if (urlMode === MODES.BUSINESS) {
          setSection(SECTIONS.ABOUT_ME_BUSINESS)
        } else if (urlMode === MODES.CHILL) {
          setSection(SECTIONS.ABOUT_ME_CHILL)
        }
      }
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
