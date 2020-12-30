import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if(action.type === ADD_TO_CART){
    const { id, color, quantity, item } = action.payload
    const tempItem = state.cart.find(i => i.id === id + color)
    if(tempItem){
      const tempCart = state.cart.map(cartItem => {
        // Double check id
        if(cartItem.id === id + color){
          // Check stock quantity
          let newQuantity = cartItem.quantity + quantity
          if(newQuantity > cartItem.max){
            newQuantity = cartItem.max
          }
          // End Checks - increase quantity
          return { ...cartItem, quantity: newQuantity }
        }
        // cart id does not match id + color - therefore NOT already in cart
        return cartItem
      })
    }else{
      const newCartItem = {
        id: id + color,
        name: item.name,
        color,
        quantity,
        image: item.images[0].fluid,
        wholePrice: item.wholePrice,
        price: item.price,
        max: item.stockQuantity,
      }
      return { ...state, cart: [...state.cart, newCartItem] }
    }
  }
  if(action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter(item => item.id !== action.payload)
    return { ...state, cart: tempCart }
  }
  if(action.type === CLEAR_CART){
    return {...state, cart:[]}
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
