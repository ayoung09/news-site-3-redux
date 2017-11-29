import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from '../components/Article/Article.js';
import { fetchCurrentArticle } from '../modules/articles.module';

const mapStateToProps = state => ({
  currentArticle: state.currentArticle,
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentArticle: (articleID) => dispatch(fetchCurrentArticle(articleID)),
});

class ArticlePage extends Component {
  
  componentDidMount() {
     this.props.fetchCurrentArticle(this.props.match.params.articleId);
  }

  render() {
  const newsArticle = this.props.currentArticle;
    return (
    <div>
      <Article title={newsArticle.title} 
        created_date={newsArticle.created_date} 
        abstract={newsArticle.abstract} 
        byline={newsArticle.byline} 
        image={newsArticle.image} />
    </div>
    );
  }
}
       
export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);