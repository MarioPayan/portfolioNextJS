export enum COOKIES {
  WIP_ES = 'wip_es',
  WIP_EN = 'wip_en',
  LANGUAGE = 'language',
  MODE = 'mode',
  SECTION = 'section',
}

// TODO: Bad practices, NextJS 13 doesn't support SSR cookies

export const getCookie: GetCookie = key =>
  Object.fromEntries(document.cookie.split(';').map(cookie => cookie.trim().split('=')))[key] || ''

export const setCookie: SetCookie = (key, value = 'true') => (document.cookie = `${key}=${value}`)
