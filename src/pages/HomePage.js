import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleList from '../components/ArticleList/ArticleList.js';
import { fetchAllArticles } from '../modules/articles.module';

const mapStateToProps = state => ({
  allArticles: state.allArticles,
});

const mapDispatchToProps = dispatch => ({
  fetchAllArticles: () => dispatch(fetchAllArticles()),
});

class HomePage extends Component {

  componentDidMount() {
    this.props.fetchAllArticles();
  }

  render() {
    return (
      <div>
        <ArticleList articles={this.props.allArticles} 
          handleTitleClick={(articleID) => this.props.history.push(`/article/${articleID}`) } />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
