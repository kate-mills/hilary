import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_QUANTITY,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

import {checkWindow} from '../utils/helpers'

const getLocalStorage = () => {
  if(checkWindow()){
    let cart = localStorage.getItem('cart');
    if(cart){
      return JSON.parse(localStorage.getItem('cart'));
    }else{
      return [];
    }
  }
  return [];
}
const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_price: 0,
  shipping_fee: 534,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // Add To Cart
  const addToCart = (id, color, quantity, item)=>{
    dispatch({type: ADD_TO_CART, payload:{id, color, quantity, item}})
  }
  // Remove item from cart
  const removeItem = (id)=>{
    dispatch({type: REMOVE_CART_ITEM, payload: id})
  }

  //Toggle number of items
  const toggleQuantity = (id, value)=>{
    dispatch({type: TOGGLE_CART_ITEM_QUANTITY})
  }

  // Remove all items from cart
  const clearCart = ()=>{
    dispatch({type: CLEAR_CART})
  }

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider value={{...state, addToCart, removeItem, toggleQuantity, clearCart}}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
