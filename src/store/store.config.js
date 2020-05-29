import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import nameReducer from './reducers/name.reducer.js';

const store = createStore(nameReducer, undefined, applyMiddleware(thunkMiddleware));

export default store;