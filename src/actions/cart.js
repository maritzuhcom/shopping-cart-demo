export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = itemData => ({
  type: ADD_ITEM,
  payload: itemData,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: id,
});
