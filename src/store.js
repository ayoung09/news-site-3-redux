import createStore from 'redux';
import reducer from './modules/articles.module';

const store = createStore(reducer);

export default store;