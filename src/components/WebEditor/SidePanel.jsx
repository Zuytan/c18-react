import React, {useContext} from 'react'
import { activeCardView } from './Cards/CardEditorSelector'
import CardPreview from './CardPreview'
import { InternationalContext } from '../HOC/internationalContext';

const SidePanel = (props) => {
  const listCardView = activeCardView
  const { lang } = useContext(InternationalContext)
  const displayableCardList = listCardView.map(cardTitle => (
    <CardPreview key={cardTitle} title={cardTitle} />
  )) 
  return (
    <div className="sidePanel">
      <h2 className="uk-text-primary uk-text-center uk-text-uppercase">{lang["card.available"] || "Available Card"}</h2>
      {displayableCardList}
    </div>
  )
}
export default SidePanel