export enum COOKIES {
  WIP_ES = 'wip_es',
  WIP_EN = 'wip_en',
  MODE = 'mode',
  SECTION = 'section',
}

// TODO: Bad practices, NextJS 13 doesn't support SSR cookies

export const getCookie = (key: string): string =>
  Object.fromEntries(
    document.cookie.split(';').map(cookie => cookie.trim().split('='))
  )[key] || ''

export const setCookie = (key: string, value: string): string =>
  (document.cookie = `${key}=${value}`)
