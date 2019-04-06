import React from 'react'

const PicSlider = (props) => {
  const { pictures } = props
  console.log(pictures)
  const displayablePic = pictures.map(picture => (
    <li key={picture.url}>
      <img data-src={picture.url} alt={picture.alt} uk-img="target: !.uk-slideshow-items" style={{maxHeight: '100vh'}} />
    </li>
  ))
  return (
    <div uk-slideshow="autoplay:true; autoplay-interval: 3000;" >
      <ul className="uk-slideshow-items"> {displayablePic}</ul>
    </div>
  )
}

export default PicSlider