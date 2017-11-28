import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js';
import ArticlesAPI from '../api/ArticlesAPI';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles:[]
    }
  }
  componentDidMount() {
      ArticlesAPI.fetchArticles().then((json) => {
        this.setState({
          articles: json
        })
      })
  }
  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles} 
          handleTitleClick={(articleID) => this.props.history.push(`/article/${articleID}`) } />
      </div>
    );
  }
}

export default HomePage;
