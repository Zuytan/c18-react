import { useState, useEffect } from 'react'
import { getAllArticlesName, getAllArticles, getArticleById } from '../api/ArticlesAPI'

const useArticleName = (defaultList = []) =>{
  const [listItem, setListItem] = useState(defaultList)
  useEffect(() => {
    const handleListModification = (newList) => {
      setListItem(newList)
    }
    getAllArticlesName(handleListModification)
  }, [])
  return listItem
}

const useAllArticle = (defaultList) => {
  const [listArticles, setListArticles] = useState(defaultList)
  useEffect(() => {
    getAllArticles(setListArticles)
  }, [])
  return listArticles
}

const useArticleById = (props) => {
  const [article, setArticle] = useState({})

  useEffect(() => {
      const onArticleGot = (newArticle) => {
        setArticle(newArticle)
      }
      getArticleById(props.id, onArticleGot)
      
  }, [props.id])

  return { article }
}

export {useAllArticle, useArticleName, useArticleById}