import { ADD_ITEM, REMOVE_ITEM } from '../actions/cart';

const defaultState = {
  items: {},
};

// TODO left off here
export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case ADD_ITEM: {
      return { ...state };
    }
    case REMOVE_ITEM: {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}
