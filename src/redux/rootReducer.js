import { combineReducers } from 'redux';

import { itemReducer } from './item/itemReducer';

export default combineReducers({
  itemsRx: itemReducer
});
