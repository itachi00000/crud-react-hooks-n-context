import { ADD_ITEM, DELETE_ITEM, SEARCH_QUERY } from '../actionTypes';

const nextItemId = 0;

export function addItem(item) {
  return {
    type: ADD_ITEM,
    id: nextItemId + 1,
    payload: item
  };
}

export function searchQuery(query) {
  return {
    type: SEARCH_QUERY,
    payload: query
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    payload: id
  };
}
