import React from 'react'

const CardPreview = (props) => {
  const { title } = props
  return (
    <div className="uk-card uk-card-default uk-card-body uk-width-5-6@l uk-align-center">
      <h4 className=" uk-text-center">{title}</h4>
    </div>
  )
}

export default CardPreview