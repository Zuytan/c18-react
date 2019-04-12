// Global Imports
import React from 'react'
import { useArticleById } from '../../hooks/articlesHooks';

// Component rendering
const ArticleHandler = (props) => {
  const { size } = props
  const { article, sections } = useArticleById({id: props.currentArticleId, size})
  console.log('sect', sections)
  return article ? (
    <div className="uk-container uk-section uk-section-default  uk-width-4-5@l">
      <div className="uk-container">
        <h1 className="uk-text-center uk-text-uppercase uk-text-bold">{article.title}</h1>
        {sections}
      </div>
    </div>
    ):null
}

export default ArticleHandler



