import React, {Fragment, useState, useEffect } from 'react'
import PicSlider from '../../WebView/PicSlider'
import PicEditor from '../PicEditor';

const SectionCardImageEditor = (props) => {
  const { section, idx, size, updatecard, removecard } = props
  if(!section) return null
  const [editing, setEditing] = useState(false)
  const [currSection, setCurrSection] = useState(section)
  useEffect(() => {
    setCurrSection(section)
  }, [section])
  const { pictures, text, side } = currSection
  const imgSide = (side === 'right' || size === 'S') ? 'right' : 'left'
  const txtSide = (side === 'right' || size === 'S') ? 'left' : 'right'
  return (
    <div className="uk-container" key={idx}>
      <div className="uk-panel uk-margin-small-left@s uk-margin-small-right@s stdSection">
        <div className="uk-margin-large">
          <div className="uk-position-top-right positionnable">
            {!editing ? (
              <button
                type="button"
                className="editionButton smallRoundButton"
                uk-icon="pencil"
                onClick={() => {
                  setEditing(true)
                }}
              />
            ) : (
              <button
                type="button"
                className="validationButton smallRoundButton"
                uk-icon="check"
                onClick={() => {
                  setEditing(false)
                  updatecard(idx, currSection)
                }}
              />
            )}
            <button
              type="button"
              className="removeButton smallRoundButton"
              uk-icon="close"
              onClick={() => {
                setEditing(false)
                removecard(idx)
              }}
            />
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
            type="button"
            className="switchButton"
            uk-icon="icon: refresh; ratio: 2"
            onClick={() => {
              const { side: currSide } = currSection
              const newCurrSection = { ...currSection }
              newCurrSection.side = (currSide === 'right') ? 'left' : 'right'
              setCurrSection(newCurrSection)
            }}
          />
        )}
        { editing ? (
          <textarea
            className={`align-${txtSide} uk-textarea onEditing`}
            onChange={(evt) => {
              const newSection = { ...currSection }
              newSection.text = evt.target.value
              setCurrSection(newSection)
            }}
            value={text}
          />
        ) : (
          <span className={`align-${txtSide} uk-width-1-2@l`}>{text}</span>
        )}
      </div>
    </div>
  )
}

export default SectionCardImageEditor
