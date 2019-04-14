import React, { Fragment, useState } from 'react'
import '../../css/winterTheme.css'
import '../../css/global.css'
import '../../css/editor.css'
import AdminArticleSelector from './AdminArticleSelector';
import ArticleEditor from './ArticleEditor';
import withInternationalDatas, { InternationalContext } from '../HOC/internationalContext';

const WebEditor = (props) => {
  const { currentPage, updateCurrentPage } = usePageManager()
  const { lang, changeLanguage, availableLang } = props 
  return (
    <InternationalContext.Provider value={{lang, changeLanguage, availableLang}}>
      {currentPage === 'home' ? (
        <Fragment>
          <div className="uk-container uk-section uk-section-primary">
            <h1 className="uk-text-uppercase uk-text-bold uk-text-center">{lang["admin.page"]}</h1>
          </div>
          <div className="uk-container uk-margin-medium-top uk-section uk-section-secondary uk-preserve-color">
            <h2 className="uk-text-uppercase uk-text-bold uk-text-center uk-light">{lang["admin.page.action"]}</h2>
            <AdminArticleSelector changePage={updateCurrentPage} />
          </div>
        </Fragment>
      ) : (
        <ArticleEditor currentPage={currentPage} backHome={() => updateCurrentPage('home')} />
      )}
    </InternationalContext.Provider>
  )
}

export default withInternationalDatas(WebEditor)

const usePageManager = () => {
  const [currentPage, setCurrentPage] = useState('home')

  const updateCurrentPage = (newPage) => {
    setCurrentPage(newPage)
  }
  return {currentPage, updateCurrentPage}
}