import { ADD_ITEM, SEARCH_QUERY, DELETE_ITEM } from '../actionTypes';

import robotData from '../../robots';

const initState = {
  items: robotData,
  query: '',
  currentId: null // no use yet
};

export function itemReducer(state = initState, action = {}) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case SEARCH_QUERY:
      return { ...state, query: action.payload };
    default:
      return state;
  }
}

export function otherReducer(state, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// case SEARCH_ITEM:
//       return { ...state, query: action.payload };
