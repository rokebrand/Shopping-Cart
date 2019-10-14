import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ onClick, product }) => (
  <li className='col-6 col-md'>
    <div className='py-4'>
      <div><img src={`https://place-hold.it/200x200?text=${product.name}&font`} alt={product.name} className='img-fluid' /></div>
      <h5 className='py-1'>{product.name}</h5>
      <p>$ {parseFloat(product.price).toFixed(2)}</p>
      <div><button onClick={onClick} className='btn-primary'>Add to Cart</button></div>
    </div>

  </li>
)

Product.propTypes = {
  onClick: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}

export default Product
