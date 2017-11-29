const fetchArticleByID = (articleID) => {
  return fetch(`http://localhost:3001/api/articles/${articleID}`)
  .then(function(response) {
    return response.json();
  });
}
         
const fetchArticlesBySection = (section) => {
  var filterArgs = {
    "where": {
      "section": section 
    }
  };
  return fetchArticles(filterArgs);
}
         
const fetchArticles = (filters = null) => {
  let url = 'http://localhost:3001/api/articles'
  if (filters) {
    url += `?filter=${JSON.stringify(filters)}`
  }
  return fetch(url).then((response) => response.json());
}		  


export default {
  fetchArticleByID: fetchArticleByID,
  fetchArticles: fetchArticles,
  fetchArticlesBySection: fetchArticlesBySection
}
