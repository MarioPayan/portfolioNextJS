// TODO: Bad practices, NextJS 13 doesn't handle languages on client gratefully
const getBrowserLanguage = () => window.navigator.language
// TODO: Bad practices, NextJS 13 doesn't support updating the URL on the client side
const getBrowserURL = () => window.location.href

export {getBrowserLanguage, getBrowserURL}
