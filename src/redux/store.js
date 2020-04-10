import { createStore, applyMiddleware } from 'redux';

// m-Ware
// import thunk from 'redux-thunk';
import logger from 'redux-logger';

//
import rootReducer from './rootReducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
