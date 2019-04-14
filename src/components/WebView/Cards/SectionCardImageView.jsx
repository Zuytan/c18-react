import React, { Fragment } from 'react'
import PicSlider from '../PicSlider'

const SectionImageCardView = (props) => {
    const { section, idx, size } = props
    const { pictures, text, side } = section
    return (
      <Fragment key={idx}>
        <hr className="uk-margin-large uk-divider-icon" />
        <div className="uk-panel uk-margin-small-left@s uk-margin-small-right@s">
          {pictures.length > 0 && (
            <div className={`uk-align-${(side === 'right' || size === 'S') ? 'right': 'left'} uk-cover-container uk-width-1-2@l`}>
              <PicSlider pictures={pictures} />
            </div>
          )}
          <span className="uk-text-middle ">{text}</span>
        </div>
      </Fragment>
    )
}

export default SectionImageCardView