// Global Imports
import React from 'react'
import { useSectionCards } from '../../hooks/viewHooks'

// Component rendering
const ArticleHandler = (props) => {
  const { size } = props
  const { article, sectionCards } = useSectionCards({articleId: props.currentArticleId, size})
  return article ? (
    <div className="uk-container uk-section uk-section-default  uk-width-4-5@l">
      <div className="uk-container">
        <h1 className="uk-text-center uk-text-uppercase uk-text-bold">{article.title}</h1>
        {sectionCards}
      </div>
    </div>
    ):null
}

export default ArticleHandler



