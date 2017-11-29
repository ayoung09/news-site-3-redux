import React, { Component } from 'react';
import ArticleTeaser from '../../components/ArticleTeaser/ArticleTeaser.js'

class ArticleList extends Component {
  render() {
    const stories= this.props.articles.map(
      (article, index) => {
        return (
          <ArticleTeaser
            key={index} 
            handleTitleClick={this.props.handleTitleClick}
            title={article.title}
            created_date={article.created_date}
            id={article.id}/>
        )
      }
    )
    return (
      <div>
        {stories}
      </div>
    );
  }
}

export default ArticleList;