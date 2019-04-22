import React from 'react'
import { DragSource } from 'react-dnd';

const previewSource = {
  beginDrag: (props) => {
    return {card: props.title}
  }
}
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}
const CardPreview = (props) => {
  const { title, connectDragSource, isDragging } = props
  return connectDragSource(
    <div className={`uk-card uk-card-default uk-card-body uk-width-5-6@l uk-align-center ${isDragging ? 'dragging' : 'draggable'}`}>
      <h4 className=" uk-text-center">{title}</h4>
    </div>
  )
}

export default DragSource('preview', previewSource, collect)(CardPreview)