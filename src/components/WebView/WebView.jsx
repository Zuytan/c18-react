import React, { Component } from 'react'
import '../../css/winterTheme.css'
import '../../css/global.css'
import Menu from './Menu'
import ListArticle from './ListArticle'
import ArticleHandler from './ArticleHandler'
import Utilities from '../../utilities/pageUtilities'

const { getCurrentSize } = Utilities
class WebView extends Component {
  state = {
    currentPage: 'home',
    size: 'L',
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  }

  onResize = () => {
    const { size } = this.state
    const currSize = getCurrentSize()
    if (size !== currSize) this.setState({ size: currSize })
  }

  handleChange = (newPage) => {
    this.setState({ currentPage: newPage })
  }

  render() {
    const { currentPage, size } = this.state
    return (
      <div className="App">
        <Menu onLogoClick={() => this.handleChange('home')} onItemClick={this.handleChange} size={size} />
        {currentPage === 'home' ? (
          <ListArticle onChange={this.handleChange} size={size} />
        ) : (
          <ArticleHandler currenArticleId={currentPage} size={size} />
        )}
      </div>
    )
  }
}

export default WebView
