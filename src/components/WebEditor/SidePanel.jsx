import React from 'react'
import { activeCardView } from './Cards/CardEditorSelector'
import CardPreview from './CardPreview'

const SidePanel = (props) => {
  const listCardView = activeCardView
  const displayableCardList = listCardView.map(cardTitle => (
    <CardPreview title={cardTitle} />
  )) 
  return (
    <div className="sidePanel">
      <h2 className="uk-text-primary uk-text-center uk-text-uppercase">Cartes Disponibles</h2>
      {displayableCardList}
    </div>
  )
}
export default SidePanel