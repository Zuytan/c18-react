import React, { useState, useEffect } from 'react'
import { useArticleById } from "./articlesHooks";
import { getCardViewByName } from '../components/WebView/Cards/CardViewSelector';

const useSectionCards = (props) => {
  const { articleId, size } = props
  const { article } = useArticleById({id: articleId})
  const [sectionCards, setSectionCards] = useState([])
  useEffect(() => {
    const cardArr = []
    const promArr = []
    article.sections.forEach((section, idx) => {
      const promSect = new Promise((resolve) => {
        getCardViewByName(section.card).then((Result)=>{
          cardArr.push(<Result.default key={idx} section={section} size={size} idx={idx} />)
          resolve()
        })
      })
      promArr.push(promSect)
    })
    Promise.all(promArr).then(() => {
      setSectionCards(cardArr)
    })
  }, [article.sections])
  
  return {article, sectionCards}
}

export { useSectionCards }