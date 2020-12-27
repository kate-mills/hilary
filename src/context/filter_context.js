import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_ITEMS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_ITEMS,
  UPDATE_FILTERS,
  FILTER_ITEMS,
  CLEAR_FILTERS,
} from '../actions'

import { useProductsContext } from './products_context'


const initialState = {
  all_items: [],
  filtered_items: [],
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const {all_items, featured_items, onSale_items} = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    dispatch({type: LOAD_ITEMS, payload: all_items})

  }, [all_items])
  return (
    <FilterContext.Provider value={{...state}}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
