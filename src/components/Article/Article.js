import React, { Component } from 'react';

class Article extends Component {
  // 1) title - a string
  // 2) created_date - a string
  // 3) abstract - a string
  // 4) byline - a string (optional)
  // 5) image - a url string (optional)

  render() {
    return (
      <div>
      <h1>{this.props.title}</h1> 
      <p>{this.props.created_date}</p> 
      <p>{this.props.abstract}</p> 
      {this.props.byline && <h2>{this.props.byline}</h2>}
      {this.props.image && <img src={this.props.image} alt='imagexyz'></img>}
      </div>
    )
  }
}

export default Article;