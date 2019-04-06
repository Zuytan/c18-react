import {useState, useEffect} from 'react'
import { getAllArticlesName, getAllArticles } from '../api/ArticlesAPI';

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


export {useAllArticle, useArticleName}