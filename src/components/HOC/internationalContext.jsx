import React, { useState } from 'react'
const lang = require('../../locales/lang.json')
const availableLang = Object.keys(lang)
const InternationalContext = React.createContext({ lang: 'fr-FR', changeLanguage: null, availableLang})


const withInternationalDatas = (WrappedComponent) => {
  return () => {
    const [ currLanguage, setLanguage ] = useState(window.navigator.language)
    const currJSON = lang[currLanguage] || lang['fr-FR']
    return (
      <WrappedComponent {...WrappedComponent.props} lang={currJSON} changeLanguage={setLanguage} availableLang={availableLang}/>
    )
  }
  
}

export default withInternationalDatas

export { InternationalContext }