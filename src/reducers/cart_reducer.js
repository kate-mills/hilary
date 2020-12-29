import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {

  if(action.type == ADD_TO_CART){
    const {id, color, quantity, item} = action.payload
    const tempItem = state.cart.find((i) => i.id === id+color)

    if(tempItem){
      const tempCart = state.cart.map((cartItem) =>{
        // Double check id 
        if(cartItem.id === id + color){
          // Check stock quantity
          let newQuantity = cartItem.quantity + quantity
          if(newQuantity > cartItem.max) {
            newQuantity = cartItem.max 
          }
          // End Check stock quantity
          return {...cartItem, quantity: newQuantity}
        } else{
          // cart id does not match id + color
          return cartItem
        }
      })
      }else{
        const newCartItem = {
          id: id+color,
          name:item.name,
          color,
          quantity,
          image:item.images[0].fluid,
          wholePrice: item.wholePrice,
          price:item.price,
          max:item.stockQuantity, }
      return {...state, cart:[...state.cart, newCartItem]}
    }
    return {...state}
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
