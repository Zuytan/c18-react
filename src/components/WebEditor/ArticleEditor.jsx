import React, { Fragment, useState, useContext } from 'react'
import { useArticleById } from '../../hooks/articlesHooks'
import TitleEditor from './TitleEditor'
import SidePanel from './SidePanel'
import { InternationalContext } from '../HOC/internationalContext'

const ArticleEditor = (props) => {
  const { backHome } = props
  const { article, sections } = useArticleById({ id: props.currentPage, editor: true })
  const { currentForm, updateField } = useArticleForm(article)
  const { lang, changeLanguage, availableLang} = useContext(InternationalContext)
  const dispLanguageOpt = availableLang.map((currLang) => (
    <option key={currLang} value={currLang} style={{
      backgroundImage: `url("/flags/${currLang}.png")`,
      backgroundSize: "10px 10px"
    }}>{currLang}</option>
  ))
  return (
    <Fragment>
      <div className="contentPanel">
        <div className="contentEditorPanel">
          <div className="uk-container uk-section-default uk-width-5-6@l uk-margin-large-bottom">
            <TitleEditor title={currentForm.title || ''} updateField={(value) => { updateField('title', value)}} />
            {sections}
            <hr className="uk-margin-medium-bottom uk-divider-icon uk-margin-medium-top" />
          </div>
        </div>
        <SidePanel />
      </div>
      <div className="contentHeader">
        <span uk-icon="icon:chevron-left; ratio: 5" className="backButton" onClick={backHome}/>
        <select className="selectLang uk-select" onChange={(event) => changeLanguage(event.target.value)}>
          {dispLanguageOpt}
        </select>
        <h1 className="uk-text-primary uk-text-center uk-text-uppercase">{lang['admin.article.editor'] || 'Article Editor'}</h1>
        
      </div>
    </Fragment>
  )
}

export default ArticleEditor

const useArticleForm = (initialArticle = {}) => {
  const [currentForm, setCurrentForm] = useState(initialArticle)
  if (Object.keys(initialArticle).length > 0 && Object.keys(currentForm).length === 0) {
    setCurrentForm(initialArticle)
  }

  const updateField = (field, value) => {
    const newForm = {...currentForm}
    newForm[field] = value
    setCurrentForm(newForm)
  }
  return { currentForm, updateField }
}