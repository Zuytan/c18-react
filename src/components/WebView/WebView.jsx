import React, { Component } from 'react';
import '../../css/winterTheme.css';
import '../../css/global.css'
import Menu from './Menu';
import ListArticle from './ListArticle';
import ArticleHandler from './ArticleHandler';

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
    const newSize = window.innerWidth
    const { size } = this.state
    if (newSize > 1400 && size !== 'L') {
      this.setState({ size: 'L' })
    } else if( newSize >= 1000 && newSize <= 1400 && size !== 'M') {
      this.setState({ size: 'M' })
    } else if( newSize < 1000 && size !== 'S') {
      this.setState({ size: 'S'})
    }
    console.log(size)
  }
  handleChange = (newPage) => {
    this.setState({currentPage: newPage})
  }
  render() {
    const { currentPage, size } = this.state
    return (
      <div className="App">
        <Menu onLogoClick={() => this.handleChange('home')} onItemClick={this.handleChange} size={size}/>
        {currentPage === 'home' ? (
          <ListArticle onChange={this.handleChange} size={size}/>
        ):(
          <ArticleHandler currenArticleId={currentPage} size={size}/>
        )}
      </div>
    );
  }
}

export default WebView;
