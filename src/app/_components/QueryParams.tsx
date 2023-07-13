'use client'
// React
import {useEffect} from 'react'
// NextJS
import {useSearchParams} from 'next/navigation'
// Data
import DATA, {SECTIONS, MODES} from '@/data/data'

const QueryParams: React.FC<QueryParamsProps> = ({setMode, setSection}) => {
  const searchParams = useSearchParams()

  useEffect(() => {
    const urlMode = searchParams.get('mode')?.toUpperCase()
    const urlSection = searchParams.get('section')?.toUpperCase()

    if (
      urlSection && Object.values(SECTIONS).includes(urlSection as SECTIONS)
    ) {
      setSection(urlSection as SECTIONS)
      if (DATA.BUSINESS_SECTIONS.map(s => s.key).includes(urlSection)) {
        setMode(MODES.BUSINESS)
      }
      if (DATA.CHILL_SECTIONS.map(s => s.key).includes(urlSection)) {
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
  }, [searchParams, setMode, setSection])

  return <></>
}

export default QueryParams
