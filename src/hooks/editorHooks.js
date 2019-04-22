import { useState, useEffect } from 'react'
import { useArticleById } from "./articlesHooks";
import { getCardEditorByName } from '../components/WebEditor/Cards/CardEditorSelector';
import defaultCards from '../components/WebEditor/Cards/defaultCardsObject';

const useSectionCards = (props) => {
  const { articleId } = props
  const { article } = useArticleById({id: articleId})
  const [currForm, setCurrForm] = useState(article)
  const [currSections, setCurrSections] = useState([])
  const sectionCards = currSections

  const updateCard = (idx, newCardDatas) => {
    const newForm = { ...currForm }
    newForm.sections[idx] = newCardDatas
    setCurrForm(newForm)
  }
  const removeCard = (idx) => {
    const newForm = { ...currForm}
    newForm.sections.splice(idx, 1)
    setCurrForm(newForm)
    setCurrSections(newForm.sections)
  }
  const updateField = (field, value) => {
    const newForm = {...currForm}
    newForm[field] = value
    setCurrForm(newForm)
  }
  const addCard = (idx, cardName) => {
    const newForm = { ...currForm }
    const defCards = defaultCards[cardName.card]
    newForm.sections.splice(idx, 0, defCards)
    setCurrForm(newForm)
  }
  useEffect(() => {
    if(article && article.sections){
      setCurrForm(article)
    }
  }, [article])
  
  useEffect(() => {
    console.log(currForm)
    if(currForm && currForm.sections) {
      console.log(currForm)
      const cardArr = []
      const promArr = []
      currForm.sections.forEach((section) => {
        const promSect = new Promise((resolve) => {
          getCardEditorByName(section.card).then((Result)=>{
            cardArr.push({card: Result.default, datas: section})
            resolve()
          })
        })
        promArr.push(promSect)
      })
      Promise.all(promArr).then(() => {
        setCurrSections(cardArr)
      })
    }
  }, [currForm])
  return {currForm, sectionCards, updateField, updateCard, removeCard, addCard}
}

export { useSectionCards }