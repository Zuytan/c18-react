import React, { Fragment, useContext } from 'react'
import TitleEditor from './TitleEditor'
import SidePanel from './SidePanel'
import { InternationalContext } from '../HOC/internationalContext'
import { useSectionCards } from '../../hooks/editorHooks';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Separator from './Separator';

const ArticleEditor = (props) => {
  const { backHome, size } = props
  const { currForm, sectionCards, updateField, updateCard, removeCard, addCard } = useSectionCards({ id: props.currentPage, size })
  const { lang, changeLanguage, availableLang} = useContext(InternationalContext)
  console.log('render')
  const dispLanguageOpt = availableLang.map((currLang) => (
    <option key={currLang} value={currLang} style={{
      backgroundImage: `url("/flags/${currLang}.png")`,
      backgroundSize: "10px 10px"
    }}>{currLang}</option>
  ))
  const dispCards = sectionCards.map((Section, idx) => {
    return (
      <Fragment key={idx}>
        <Separator addCard={(cardName) => addCard(idx, cardName)} />
        <Section.card section={Section.datas} size={size} idx={idx} updatecard={updateCard} removecard={removeCard} />
      </Fragment>
    )
  })
  return (
    <Fragment>
        <div className="contentPanel">
          <div className="contentEditorPanel">
            <div className="uk-container uk-section-default uk-width-5-6@l uk-margin-large-bottom">
              <TitleEditor title={currForm.title || ''} updateField={(value) => { updateField('title', value)}} />
              {dispCards}
              <Separator addCard={(cardName) => addCard(sectionCards.length, cardName)} />
            </div>
            <button className="validationButton largeRoundButton fixedBottomRight" uk-icon="icon: check; ratio: 2"/>
          </div>
          <SidePanel />
        </div>
        <div className="contentHeader">
          <span uk-icon="icon:chevron-left; ratio: 5" className="backButton" onClick={backHome}/>
          <select className="selectLang uk-select" onChange={(event) => changeLanguage(event.target.value)}>
            {dispLanguageOpt}
          </select>
          <h1 className="uk-text-primary uk-text-center uk-text-uppercase">{lang['admin.article.editor'] || 'Article Editor'}</h1>
        </div>
    </Fragment>
  )
}

export default DragDropContext(HTML5Backend)(ArticleEditor)
