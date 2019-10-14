import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../actions'
import CartList from '../components/CartList'

const mapStateToProps = (state, ownProps) => {
  const products = state.products
  const cart = state.cart
  return {
    products,
    cart
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: (product, productlist) => dispatch(addToCart(product, productlist)),
  removeFromCart: (product, productlist) => dispatch(removeFromCart(product, productlist))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList)
