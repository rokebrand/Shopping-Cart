
import React from 'react'
import PropTypes from 'prop-types'
import CartProduct from './CartProduct'

const calculateTotal = (cart) => {
  let totalamount = 0;
  cart.map(itm => (totalamount = totalamount + (itm.price * itm.count)));
  return totalamount.toFixed(2);
} 

const CartList = ({ products, cart, addToCart, removeFromCart }) => (
  <div className='container'>
    <h1>Shopping Cart</h1>
    <ul className='list-unstyled'>
      {cart.map((product, i) =>
        <CartProduct
          key={i}
          product={product}
          addClick={() => addToCart(product, cart)}
          removeClick={() => removeFromCart(product, cart)}
        />
      )}
    </ul>
    {cart.length === 0 && <div>
      <p>Your cart is currently empty</p>
    </div>}
    {cart.length > 0 && <div className='text-right mb-5'>
      <p>Total: <b>$ {cart.length > 0 ? calculateTotal(cart) : 0.00}</b></p>
    </div>}
  </div>
)

CartList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
}

export default CartList
