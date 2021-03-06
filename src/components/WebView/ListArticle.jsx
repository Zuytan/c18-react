import React from 'react'
import PropTypes from 'prop-types'
import Card from './Cards/ArticleCard'
import { useAllArticle } from '../../hooks/articlesHooks'

const ListArticle = (props) => {
  const { onChange, size } = props
  const listArticles = useAllArticle([])
  const displayableListArticle = listArticles.map((article, idx) => (
    <Card
      key={article.id}
      id={article.id}
      title={article.title}
      description={article.description}
      pictures={article.pictures}
      onClick={onChange} 
      left={idx % 2 !== 0}
      size={size}
    />
  ))
  return (
    <div className="uk-container uk-width-1-1@m uk-width-4-5@l uk-offcanvas-content">
      {displayableListArticle}
    </div>
  )
}

ListArticle.propTypes = {
  onChange: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
}

export default ListArticle

