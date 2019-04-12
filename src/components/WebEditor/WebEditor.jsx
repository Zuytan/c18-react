import React, { Fragment, useState } from 'react'
import '../../css/winterTheme.css'
import '../../css/global.css'
import '../../css/editor.css'
import AdminArticleSelector from './AdminArticleSelector';
import ArticleEditor from './ArticleEditor';

const WebEditor = () => {
  const { currentPage, updateCurrentPage } = usePageManager() 
  return (
    <Fragment>
      {currentPage === 'home' ? (
        <Fragment>
          <div className="uk-container uk-section uk-section-primary">
            <h1 className="uk-text-uppercase uk-text-bold uk-text-center">Page d'Administration</h1>
          </div>
          <div className="uk-container uk-margin-medium-top uk-section uk-section-secondary uk-preserve-color">
            <h2 className="uk-text-uppercase uk-text-bold uk-text-center uk-light">administrer les pages</h2>
            <AdminArticleSelector changePage={updateCurrentPage} />
          </div>
        </Fragment>
      ) : (
        <ArticleEditor currentPage={currentPage} />
      )}
      
      
    </Fragment>
  )
}

export default WebEditor

const usePageManager = () => {
  const [currentPage, setCurrentPage] = useState('home')

  const updateCurrentPage = (newPage) => {
    setCurrentPage(newPage)
  }
  return {currentPage, updateCurrentPage}
}