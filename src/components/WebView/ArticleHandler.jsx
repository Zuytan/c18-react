// Global Imports
import React, { useState, useEffect } from 'react'

// API Imports
import { getArticleById } from '../../api/ArticlesAPI'

// Local Imports
import { getCardViewByName } from '../Cards/CardViews/CardViewSelector';

// Component rendering
const ArticleHandler = (props) => {
  const { size } = props
  const { article, sections } = useArticle({id: props.currentArticleId, size})
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

// Hooks

const useArticle = (props) => {
    const [article, setArticle] = useState(props.id)
    const [sections, setSections] = useState([])
    
    const updateSections = (newArticle) => {
      const newSections = []
      const promArr = []
      console.log(newArticle)
      if (newArticle) {
        newArticle.sections.forEach((section, idx) => {
          const promSect = new Promise((resolve) => {
            getCardViewByName(section.card).then((Result)=>{
              newSections.push(<Result.default key={idx} section={section} size={props.size} idx={idx} />)
              resolve()
            })
          })
          promArr.push(promSect)
        })
        Promise.all(promArr).then(() => {
          console.log("resolved")
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
