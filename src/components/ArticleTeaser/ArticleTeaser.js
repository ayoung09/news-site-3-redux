import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ArticleTeaser extends Component {
  // <a href='#' onClick={(event)=>{
  //   event.preventDefault();
  //   this.props.handleTitleClick(this.props.id)}}>{this.props.title}</a>

  // id={this.state.article.id}
  // title={this.state.article.title}
  // date_created={this.state.article.date_created}
  // handleTitleClick={(articleID) => console.log(articleID)}
  render() {
    return (
      <div>
      <Link to={`/article/${this.props.id}`}>{this.props.title}</Link>
      
      <p>{this.props.created_date}</p>

      </div>
    )
  }
}

export default ArticleTeaser;