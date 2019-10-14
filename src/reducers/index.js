import { combineReducers } from 'redux'
import productItems from './products'
import cartItems from './cart'

const AppReducer = combineReducers({
  products: productItems,
  cart: cartItems
});

export default AppReducer;