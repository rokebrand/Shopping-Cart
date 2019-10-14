
import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductList = ({ products, cart, addToCart }) => (
  <div className='container pt-5'>
    <h1>Products</h1>
    <ul className='row list-unstyled'>
      {products.map((product, i) =>
        <Product
          key={i}
          product={product}
          onClick={() => addToCart(product, cart)}
        />
      )}
    </ul>
  </div>
)

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired).isRequired,
    cart: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired).isRequired,
    addToCart: PropTypes.func.isRequired
}

export default ProductList
