import React from 'react'
import PropTypes from 'prop-types'

const CartProduct = ({ addClick, removeClick, product }) => (
  <li>
    <div className='row py-3'>
        <div className='col-6 col-md-3'>{product.name}</div>
        <div className='col-6 col-md-3'>$ {(product.price).toFixed(2)}</div> 
        <div className='col-6 col-md-2'>
            <button onClick={removeClick}>-</button>
            <span className='px-2'>{product.count}</span>
            <button onClick={addClick}>+</button>
        </div> 
        <div className='col-6 col-md-4 text-right'> 
            $ { (product.price * product.count).toFixed(2) }
        </div> 
    </div>
  </li>
)

CartProduct.propTypes = {
  addClick: PropTypes.func.isRequired,
  removeClick: PropTypes.func.isRequired, 
  product: PropTypes.object.isRequired
}

export default CartProduct
