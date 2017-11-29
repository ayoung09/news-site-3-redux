import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './modules/articles.module';

const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;