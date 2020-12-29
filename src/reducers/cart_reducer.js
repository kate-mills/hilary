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
      console.log('already in cart.')
      }else{
        console.log('item in reducer', item)
      const newItem = {
        id: id+color,
        name:item.name,
        color,
        quantity,
        image:item.images[0].fluid,
        wholePrice: item.wholePrice,
        price:item.price,
        max:item.stockQuantity
      }
        console.log('newItem', newItem);
      return {...state, cart:[...state.cart, newItem]}
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
