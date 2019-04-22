import React from 'react'
import { DropTarget } from 'react-dnd'

const separatorTarget = {
  drop: (props, monitor, component) => {
    if(monitor.didDrop()) return
    const previewItem = monitor.getItem()
    props.addCard(previewItem)
  }
}
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  }
}

const Separator = (props) => {
    const { connectDropTarget, isOver } = props
    const classes = `uk-margin-small-bottom uk-divider-icon uk-margin-medium-top ${isOver && 'uk-margin-large-bottom'}`
    const style = { backgroundColor: isOver ? '#AFA' : '#FFF'}
    return connectDropTarget(
        <hr className={classes} style={style}/>
    )
}

export default DropTarget('preview', separatorTarget, collect)(Separator)