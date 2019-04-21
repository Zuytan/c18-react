import React, { useState } from 'react'

const TitleEditor = (props) => {
  const { title, updateField } = props
  const [ editing, setEditing ] = useState(false)
  const [ value, setValue ] = useState(title)
  return (
    <div>
      { !editing ? (
        <button className="uk-float-right editionButton smallRoundButton" uk-icon="pencil" onClick={() => { setEditing(true); setValue(title) }} />
      ) : (
        <button className="uk-float-right validationButton smallRoundButton" uk-icon="check" onClick={() => { setEditing(false);  updateField(value)}}/>
      )}
      <h1 className="uk-text-center uk-text-uppercase uk-text-bold">
        { editing ? (
          <input type='text' value={value} onChange={(val) => {
            setValue(val.target.value)
          }}/>
        ) : title}
      </h1>
    </div>
  )
}
export default TitleEditor