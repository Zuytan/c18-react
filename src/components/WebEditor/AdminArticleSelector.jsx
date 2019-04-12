// Global imports
import React from 'react'
import { useArticleName } from '../../hooks/articlesHooks';

// Local imports

// Component Rendering
const AdminArticleSelector = (props) => {
  const { changePage } = props
  const articles = useArticleName()
  const displayableArticles = articles.map(article => (
    <div key={article.id} className="uk-card uk-card-default uk-card-body uk-margin-auto uk-text-center">
      <h3 className="uk-card-title">{article.title}</h3>
      <div className="uk-text-center uk-flex" >
        <button className="uk-button uk-button-danger" >Supprimer</button>
        <button className="uk-button uk-button-primary" onClick={() => changePage(article.id)}>Modifier</button>
      </div>
    </div>
  ))
  return (
    <div className="uk-container uk-section uk-flex uk-align-center" uk-grid="true">
      {displayableArticles}
      <div className="uk-card uk-card-default uk-card-body uk-margin-auto">
        <h3 className="uk-card-title">Ajouter un article</h3>
        <div className="uk-align-center uk-cover uk-flex" >
          <button className="uk-button uk-button-primary">Ajouter</button>
        </div>
      </div>
    </div>
  )
}

export default AdminArticleSelector


