import { connect } from 'react-redux'
import { addToCart } from '../actions'
import ProductList from '../components/ProductList'

const mapStateToProps = (state, ownProps) => {
  const products = state.products
  const cart = state.cart
  return {
    products,
    cart
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: (product, productlist) => dispatch(addToCart(product, productlist))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
