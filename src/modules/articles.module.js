import ArticlesAPI from '../api/ArticlesAPI';

//ACTION TYPES
const SET_ALL_ARTICLES = 'SET_ALL_ARTICLES';
const SET_CURRENT_ARTICLE = 'SET_CURRENT_ARTICLE';
//error handling not necessary for solution
const SET_ERROR = 'SET_ERROR';


//ACTION CREATORS
const setAllArticles = (articles) => ({
  type: SET_ALL_ARTICLES,
  articles,
});

const setCurrentArticle = (article) => ({
  type: SET_CURRENT_ARTICLE,
  article,
});

//error handling not necessary for solution
const setError = (error) => ({
  type: SET_ERROR,
  error,
});


//THUNKS
export const fetchAllArticles = () => {
  return (dispatch) => {
    ArticlesAPI.fetchArticles()
      .then(articlesJson => {
        dispatch(setAllArticles(articlesJson));
      })
      //error handling not necessary for solution
      .catch(error => {
        dispatch(setError(error));
      })
  }
};

export const fetchCurrentArticle = (articleID) => {
  return (dispatch) => {
    ArticlesAPI.fetchArticleByID(articleID)
      .then(articleJson => {
        dispatch(setCurrentArticle(articleJson));
      })
      //error handling not necessary for solution
      .catch(error => {
        dispatch(setError(error));
      })
  }
};


//INITIAL STATE
const initialState = {
  allArticles: [],
  currentArticle: {},
  //error handling not necessary for solution
  error: null,
};


//REDUCER
const reducer = (prevState = initialState, action) => {
  let newState = {...prevState};

  switch (action.type) {
    case SET_ALL_ARTICLES:
      newState.allArticles = action.articles;
      return newState;
    case SET_CURRENT_ARTICLE:
      newState.currentArticle = action.article;
      return newState;
    //error handling not necessary for solution
    case SET_ERROR:
      newState.error = action.error;
      return newState;
    default:
      return prevState;
  }
}

export default reducer;