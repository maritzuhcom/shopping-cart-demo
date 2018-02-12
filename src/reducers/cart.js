import { ADD_ITEM, REMOVE_ITEM } from '../actions/cart';

const defaultState = {
  items: [],
  price: 0,
  itemCount: 0,
};

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case ADD_ITEM: {
      // handles items
      const items = [...state.items];
      items.push(action.payload);

      // handles new price
      const nextItemPrice = action.payload.price + state.price;
      return {
        ...state,
        items,
        price: nextItemPrice,
        itemCount: state.itemCount + 1, // handles item count
      };
    }
    case REMOVE_ITEM: {
      const items = [...state.items];

      items.splice(action.payload.key, 1);

      return {
        ...state,
        items,
        price: state.price - action.payload.price,
        itemCount: state.itemCount - 1,
      };
    }
    default: {
      return { ...state };
    }
  }
}
