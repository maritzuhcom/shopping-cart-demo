import { OPEN, CLOSE } from '../actions/modals';

const defaultState = {
  checkoutModal: false,
};

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case OPEN: {
      return { ...state, checkoutModal: true };
    }
    case CLOSE: {
      return { ...state, checkoutModal: false };
    }
    default: {
      return { ...state };
    }
  }
}
