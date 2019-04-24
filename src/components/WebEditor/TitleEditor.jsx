import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TitleEditor = (props) => {
  const { title, updateField } = props
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(title)
  return (
    <div>
      { !editing ? (
        <button
          type="button"
          className="uk-float-right editionButton smallRoundButton"
          uk-icon="pencil"
          onClick={() => { setEditing(true); setValue(title) }}
        />
      ) : (
        <button
          type="button"
          className="uk-float-right validationButton smallRoundButton"
          uk-icon="check"
          onClick={() => {
            setEditing(false)
            updateField(value)
          }}
        />
      )}
      <h1 className="uk-text-center uk-text-uppercase uk-text-bold">
        { editing ? (
          <input
            type="text"
            value={value}
            onChange={(val) => {
              setValue(val.target.value)
            }}
          />
        ) : title}
      </h1>
    </div>
  )
}

TitleEditor.propTypes = {
  title: PropTypes.string.isRequired,
  updateField: PropTypes.func.isRequired,
}

export default TitleEditor
