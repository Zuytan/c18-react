import React, { Fragment, useState } from 'react'
import { useArticleById } from '../../hooks/articlesHooks';
import TitleEditor from './TitleEditor';
import SidePanel from './SidePanel';

const ArticleEditor = (props) => {
  const { article, sections } = useArticleById({ id: props.currentPage, editor: true })
  const { currentForm, updateField } = useArticleForm(article)
  console.log(currentForm)
  return (
    <Fragment>
      
      
      <div className="contentPanel">
        <div className="contentEditorPanel">
          <div className="uk-container uk-section uk-section-default uk-width-5-6@l ">
            <TitleEditor title={currentForm.title || ''} updateField={(value) => { updateField('title', value)}} />
            {sections}
          </div>
        </div>
        <SidePanel />
      </div>
      <div className="contentHeader">
        <span uk-icon="icon:chevron-left; ratio: 5" className="backButton" />
        <h1 className="uk-text-primary uk-text-center uk-text-uppercase">Editeur d'articles</h1>
      </div>
    </Fragment>
  )
}

export default ArticleEditor

const useArticleForm = (initialArticle = {}) => {
  const [currentForm, setCurrentForm] = useState(initialArticle)
  if (Object.keys(initialArticle).length > 0 && Object.keys(currentForm).length === 0) {
    console.log(initialArticle)
    setCurrentForm(initialArticle)
  }

  const updateField = (field, value) => {
    const newForm = {...currentForm}
    newForm[field] = value
    setCurrentForm(newForm)
  }
  return { currentForm, updateField }
}