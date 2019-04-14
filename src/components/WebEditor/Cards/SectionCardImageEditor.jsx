import React, {Fragment, useState } from 'react'
import PicSlider from '../../WebView/PicSlider'
import PicEditor from '../PicEditor';

const SectionCardImageEditor = (props) => {
  const { section, idx, size/*, setSection*/ } = props
  const [editing, setEditing] = useState(false)
  const [currSection, setCurrSection] = useState(section)
  const { pictures, text, side } = currSection
  const imgSide = (side === 'right' || size === 'S') ? 'right' : 'left'
  const txtSide = (side === 'right' || size === 'S') ? 'left' : 'right'
  return (
    <div className="uk-container" key={idx}>
      <hr className="uk-margin-small-bottom uk-divider-icon uk-margin-medium-top" />
      <div className="uk-panel uk-margin-small-left@s uk-margin-small-right@s stdSection">
        <div className="uk-margin-large">
          <div className="uk-position-top-right positionnable">
            {!editing ? (
              <button className="editionButton" uk-icon="pencil" onClick={() => { setEditing(true) }} />
            ) : (
              <button className="validationButton" uk-icon="check" onClick={() => { setEditing(false);  /*setSection(idx, currSection)*/ }}/>
            )}
            <button className="removeButton" uk-icon="close" onClick={() => { }} />
          </div>
        </div>
        {pictures.length > 0 && (
          <Fragment>
            {editing ? (
              <div className={`align-${imgSide} onEditing`}>
                <PicEditor pictures={pictures} />
              </div>
            ) : (
              <div className={`align-${imgSide} uk-width-1-2@l`}>
                <PicSlider pictures={pictures} />
              </div>
            )}
          </Fragment>
        )}
        { editing && (
          <button
            className="switchButton"
            uk-icon="icon: refresh; ratio: 2"
            onClick={() => {
              const { side } = currSection
              const newCurrSection = { ...currSection }
              newCurrSection.side = (side === 'right') ? 'left' : 'right'
              setCurrSection(newCurrSection)
            }}
          />
        )}
        { editing ? (
          <textarea
            className={`align-${txtSide} uk-textarea onEditing`}
            onChange={(value) => {
              currSection.text = value
              setCurrSection(currSection)
            }}
            value={text}
          />
          ) : (<span className={`align-${txtSide} uk-width-1-2@l`} >{text}</span>) }
        
        
      </div>
    </div>
  )
}

export default SectionCardImageEditor

