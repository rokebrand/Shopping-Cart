
const storagevals = localStorage.getItem('cart');
const cartitems = storagevals != null ? JSON.parse(storagevals) : [];

const cartItems = (state = cartitems, action) => {
    switch (action.type) {
      case 'UPDATE_CART':
        return [...action.payload]
      default:
        return state
    }
  }

export default cartItems
