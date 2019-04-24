import React, { Fragment, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { InternationalContext } from '../HOC/internationalContext'

const PicEditor = (props) => {
  const { pictures } = props
  const [currPictures /*, setCurrPictures*/] = useState(pictures)
  const { lang } = useContext(InternationalContext)
  const dispPictures = currPictures.map(picture => (
    <Fragment key={picture.url}>
      <img
        className="uk-width-3-4"
        data-src={picture.url}
        uk-img="true"
        alt={picture.alt || 'An amazing picture'}
      />
      <button
        type="button"
        className="removeImg"
        uk-icon="close"
        onClick={() => {}}
      />
    </Fragment>
  ))

  return (
    <Fragment>
      <div className="picEditor-sect uk-display-inline-block">
        {dispPictures}
      </div>
      <div className="addPic">
        <button
          type="button"
          className="uk-button uk-button-primary uk-width-1-1"
        >
          {lang.add || 'add'}
        </button>
      </div>
    </Fragment>
  )
}

PicEditor.propTypes = { pictures: PropTypes.arrayOf(PropTypes.object).isRequired }

export default PicEditor
