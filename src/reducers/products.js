
import { products } from '../static/products'

products.map((product, i) => (product.id = i));

const productItems = (state = products, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default productItems
