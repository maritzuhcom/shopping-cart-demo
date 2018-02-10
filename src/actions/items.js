import jsonData from '../assets/jsonData';

export const GOT_ITEMS = 'GOT_ITEMS';

export const getItems = () => async (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: GOT_ITEMS,
      payload: jsonData,
    });
  }, 300);
};
