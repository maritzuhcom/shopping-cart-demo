import { combineReducers } from 'redux';
import items from './items';
import cart from './cart';
import modals from './modals';

export default combineReducers({
  items,
  cart,
  modals,
});
