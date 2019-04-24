// Global Imports
import React from 'react'

// Component Rendering
const Logo = (props) => {
  const { onClick } = props
  return (
    <img data-src="/logo.png" width="65" height="60" alt='website-logo' uk-img="true" onClick={onClick} />
  )
}
export default Logo
