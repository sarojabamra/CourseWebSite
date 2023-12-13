
import { createStore } from 'redux';
import likeReducer from './reducers';

const store = createStore(likeReducer);

export default store;
