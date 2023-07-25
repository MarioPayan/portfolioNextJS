export const dateDiff: DateDiff = (dateA, dateB, onlyYears = false) => {
  const getTime = (date: string): number =>
    (date ? new Date(date).getTime() : new Date().getTime())

  const daysDiff = Math.floor(
    (getTime(dateB) - getTime(dateA)) / (1000 * 60 * 60 * 24)
  )
  let timeDiff = 'Just started'
  const years = Math.floor(daysDiff / 365)
  const yearsDiff = years >= 1 ? `${years} ${years === 1 ? 'year' : 'years'}` : ''
  const months = Math.floor(daysDiff / 30) % 12
  const monthsDiff = months >= 1 ? `${months} ${months === 1 ? 'month' : 'months'}` : ''
  if (onlyYears) {
    return `${years}${months >= 1 ? '+' : ''} ${years === 1 ? 'year' : 'years'}`
  }
  if (yearsDiff && monthsDiff) timeDiff = `${yearsDiff}, ${monthsDiff}`
  else if (yearsDiff || monthsDiff) timeDiff = `${yearsDiff}${monthsDiff}`
  return `${timeDiff}`
}

export const changeDateFormat: ChangeDateFormat = (date, language = 'es') => {
  // From AAAA-MM to Month Year
  // EG: 2000-01 Jan 2000
  const [year, month] = date.split('-')

  const format = {
    en: 'en-US',
    es: 'es-CO',
  }[language.toLowerCase()]

  return `${new Date(parseInt(year), parseInt(month) - 1).toLocaleString(
    format,
    {month: 'short'}
  )} ${year}`
}

export const sortFrom = (a: Experience, b: Experience): number =>
  new Date(b.from).getTime() - new Date(a.from).getTime()
