import React, {useState, useEffect} from 'react'
import { getAllArticlesName, getAllArticles, getArticleById } from '../api/ArticlesAPI'
import {getCardEditorByName} from '../components/WebEditor/Cards/CardEditorSelector'
import { getCardViewByName } from '../components/WebView/Cards/CardViewSelector'

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
  const [sections, setSections] = useState([])
  const getCardByName = props.editor ? getCardEditorByName : getCardViewByName
  const updateSections = (newArticle) => {
    const newSections = []
    const promArr = []
    if (newArticle) {
      newArticle.sections.forEach((section, idx) => {
        const promSect = new Promise((resolve) => {
          getCardByName(section.card).then((Result)=>{
            newSections.push(<Result.default key={idx} section={section} size={props.size} idx={idx} editor={props.editor} />)
            resolve()
          })
        })
        promArr.push(promSect)
      })
      Promise.all(promArr).then(() => {
        setSections(newSections)
      })
    }
    
  }

  useEffect(() => {
      const onArticleGot = (newArticle) => {
        updateSections(newArticle)
        setArticle(newArticle)
      }
      getArticleById(props.id, onArticleGot)
      
  }, [props.id])

  return { article , sections}
}

export {useAllArticle, useArticleName, useArticleById}