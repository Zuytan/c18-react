const getCardViewByName = (name) => {

  switch (name) {
    case 'SectionCardImage': 
			return import('./SectionCardImageView')
		default:
			return import('./SectionCardImageView')
  }
}

export { getCardViewByName }