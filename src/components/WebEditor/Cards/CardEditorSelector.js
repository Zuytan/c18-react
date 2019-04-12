const getCardEditorByName = (name) => {
  switch (name) {
    case 'SectionCardImage': 
      return import('./SectionCardImageEditor')
    default:
      return import('./SectionCardImageEditor')
  }
}

const activeCardView = ['SectionCardImage']
export { getCardEditorByName, activeCardView }