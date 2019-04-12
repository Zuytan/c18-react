// Global Imports
import React, { Fragment } from 'react'

// Local Imports
import Logo from '../Logo';
import { useArticleName } from '../../hooks/articlesHooks'

// Component rendering
const Menu = (props) => {
  const { onLogoClick, onItemClick, size } = props
  const listItem = useArticleName([{title: 'test'}])
  const menuItemClass = (size === 'S') ? 'mobileMenu' : 'stdMenu'
  const displayableListItem = listItem.map(item => 
    <li key={item.title} className={menuItemClass} onClick={() => onItemClick(item.id)}>{item.title}</li>
  )
  return (
    <Fragment>
      <div uk-sticky="show-on-up : true; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
        <nav className="uk-navbar-container" uk-navbar="true">
          <div uk-toggle="target: #mobile-menu" className="uk-navbar-toggle uk-hidden@m menuContainer uk-textCenter" ><div className='menu' /><div className='menu' /><div className='menu' /></div>
          <div className="uk-navbar-left uk-visible@m">
            <ul className="uk-navbar-nav">
              <li>
                <Logo onClick={onLogoClick} />
              </li>
            </ul>
          </div>
          <div className="uk-navbar-right uk-visible@m">
            <ul className="uk-navbar-nav">
              {displayableListItem}
            </ul>
          </div>
          <div className="uk-navbar-content uk-navbar-center uk-navbar-brand uk-hidden@m">
            <Logo onClick={onLogoClick} />
          </div>
        </nav>
      </div>
      <div id="mobile-menu" uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">
          <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
          <h3 className="uk-text-center uk-align-center">Menu</h3>
          <ul className="uk-nav uk-nav-default">
            {displayableListItem}
          </ul>
        </div>
      </div>
    </Fragment>
    
  )
}
export default Menu
