import ArticlesAPI from '../api/ArticlesAPI';

//ACTION TYPES
const FETCH_ALL_ARTICLES = 'FETCH_ALL_ARTICLES';
const SET_ALL_ARTICLES = 'SET_ALL_ARTICLES';
const FETCH_CURRENT_ARTICLE = 'FETCH_CURRENT_ARTICLE';
const SET_CURRENT_ARTICLE = 'SET_CURRENT_ARTICLE';
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
      .catch(error => {
        dispatch(setError(error));
      })
  }
};


//INITIAL STATE
const initialState = {
  allArticles: [],
  currentArticle: {},
  error: null,
};


//REDUCER
const reducer = (prevState = initialState, action) => {
  let newState = {...prevState};

  switch (action.type) {
    case SET_ALL_ARTICLES:
      newState.allArticles = action.articles;
      newState.error = null;
      return newState;
    case SET_CURRENT_ARTICLE:
      newState.currentArticle = action.article;
      newState.error = null;
      return newState;
    case SET_ERROR:
      newState.error = action.error;
      return newState;
    default:
      return prevState;
  }
}

export default reducer;