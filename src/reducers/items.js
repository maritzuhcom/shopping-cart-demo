import { GOT_ITEMS } from '../actions/items';

const defaultState = {
  products: [],
};

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case GOT_ITEMS: {
      return { ...state, products: [...action.payload.products] };
    }
    default: {
      return { ...state };
    }
  }
}
