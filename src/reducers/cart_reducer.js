import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_QUANTITY,
} from '../actions'

const cart_reducer = (state, action) => {

  if(action.type === ADD_TO_CART){
    const { id, color, quantity, item } = action.payload
    const tempItem = state.cart.find(i => i.id === id + color)
    if(tempItem){
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newQuantity = cartItem.quantity + quantity
          if (newQuantity > cartItem.max) {
            newQuantity = cartItem.max
          }
          return { ...cartItem, quantity: newQuantity }
        } else {
          return cartItem
        }
      })

      return { ...state, cart: tempCart }
    } else {
      const newItem = {
        id: id + color,
        name: item.name,
        color,
        quantity,
        image: item.images[0].fluid,
        wholePrice: item.wholePrice,
        price: item.price,
        max: item.stockQuantity,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }

  if(action.type === REMOVE_CART_ITEM){
    const tempCart = state.cart.filter(item => item.id !== action.payload)
    return { ...state, cart: tempCart }
  }

  if(action.type === CLEAR_CART){
    return {...state, cart:[]}
  }

  if(action.type === TOGGLE_CART_ITEM_QUANTITY){
    const {id, value} = action.payload
    const tempCart = state.cart.map((item) =>{
      if(item.id === id){
        if(value === 'inc'){
          let newQuantity = item.quantity + 1
          if (newQuantity > item.max){
            newQuantity = item.max
          }
          return {...item, quantity: newQuantity}
        }
        if(value === 'dec'){
          let newQuantity = item.quantity - 1
          if(newQuantity < 1){
            newQuantity = 1
          }
          return {...item, quantity: newQuantity}
        }
      }
      return item
    })
    return { ...state, cart: tempCart }
  }

  if(action.type === COUNT_CART_TOTALS){
    const {total_quantity, total_price} = state.cart.reduce((total, cartItem) => {
      const { quantity, wholePrice } = cartItem
      total.total_quantity += quantity
      total.total_price += (wholePrice * quantity)
      return total;
    }, {
      total_quantity: 0,
      total_price: 0
    })
    return {...state, total_quantity, total_price}
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
