import _ from 'lodash';

export const addToCart = (product, cart) => {
  let cartItems = cart;
  const foundIndex = _.findIndex(cart, function(o) { return o.id === product.id; });
  if(cart.length === 0){
    product.count = 1;
    cartItems = [product];
  } 
  else if (foundIndex >= 0) { 
    cartItems[foundIndex].count = cartItems[foundIndex].count + 1;
  } 
  else {
    product.count = 1;
    cartItems = [...cart, product];
  }
  localStorage.setItem('cart', JSON.stringify(cartItems));
  return {
    type: 'UPDATE_CART',
    payload: cartItems,
  };
};

export const removeFromCart = (product, cart) => {
  let cartItems = cart;
  const foundIndex = _.findIndex(cart, function(o) { return o.id === product.id; });
  if (foundIndex >= 0) { 
    if(cartItems[foundIndex].count === 1){
      _.remove(cartItems, {
          id: product.id
      });
    } else {
      cartItems[foundIndex].count = cartItems[foundIndex].count - 1;
    }
  } 
  else {
    console.log('product not found')
  }
  localStorage.setItem('cart', JSON.stringify(cartItems));
  return {
    type: 'UPDATE_CART',
    payload: cartItems,
  };
};
