import React, { Component } from 'react';
import Article from '../components/Article/Article.js';
import ArticlesAPI from '../api/ArticlesAPI.js'
// import News from '../data/news.json';
       
class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_article:{},
      articleLoaded: false
    }
  }
  componentDidMount() {
      ArticlesAPI.fetchArticleByID(this.props.match.params.articleId).then((json) => {
        console.log(json);
        this.setState({
          current_article: json,
          articleLoaded: true
        })
      })
  }
  render() {
  const newsArticle = this.state.current_article;
    return (
    <div>
      {this.state.articleLoaded === true &&
        <Article title={newsArticle.title} 
          created_date={newsArticle.created_date} 
          abstract={newsArticle.abstract} 
          byline={newsArticle.byline} 
          image={newsArticle.image} />
      }
    </div>
    );
  }
}
       
export default ArticlePage;