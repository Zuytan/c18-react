// Global imports
import React, { useContext } from 'react'
import { useArticleName } from '../../hooks/articlesHooks';
import { InternationalContext } from '../HOC/internationalContext';

// Local imports

// Component Rendering
const AdminArticleSelector = (props) => {
  const { changePage } = props
  const articles = useArticleName()
  const { lang } = useContext(InternationalContext)
  const displayableArticles = articles.map(article => (
    <div key={article.id} className="uk-card uk-card-default uk-card-body uk-margin-auto uk-text-center">
      <h3 className="uk-card-title">{article.title}</h3>
      <div className="uk-text-center uk-flex" >
        <button className="uk-button uk-button-danger" >{ lang['delete'] || "Delete"}</button>
        <button className="uk-button uk-button-primary" onClick={() => changePage(article.id)}>{ lang["edit"] || "Edit"}</button>
      </div>
    </div>
  ))
  return (
    <div className="uk-container uk-section uk-flex uk-align-center" uk-grid="true">
      {displayableArticles}
      <div className="uk-card uk-card-default uk-card-body uk-margin-auto">
        <h3 className="uk-card-title">{lang["add.article"] || "Add an article"}</h3>
        <div className="uk-align-center uk-cover uk-flex" >
          <button className="uk-button uk-button-primary">{lang['add'] || "Add"}</button>
        </div>
      </div>
    </div>
  )
}

export default AdminArticleSelector


