import React from 'react'
import Card from '../Cards/ArticleCard';
import { useAllArticle } from '../../hooks/articlesHooks';

const ListArticle = (props) => {
  const { onChange, size } = props
  const listArticles = useAllArticle([])
  const displayableListArticle = listArticles.map((article, idx) => (
    <Card 
      id={idx}
      title={article.title}
      description={article.description}
      pictures={article.pictures}
      onClick={onChange} 
      left={idx%2 !== 0}
      size={size}
    />
  ))
  return (
    <div className="uk-container uk-width-1-1@m uk-width-4-5@l uk-offcanvas-content">
      {displayableListArticle}
		</div>
  )
}
export default ListArticle

