export const DELETE_ITEM = 'DELETE_ITEM';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const ADD_CARD = 'ADD_CARD';
export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    payload: id
});
export const setSearchTerm = (term) => ({
    type: SET_SEARCH_TERM,
    payload: term
});
export const editItem = (item) => ({
    type: EDIT_ITEM,
    payload: item
});


export const handleADD = (newItem) => {
    return {
      type: ADD_CARD,
      payload: newItem,
    };
  };