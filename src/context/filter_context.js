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
  grid_view: true,
  sort: 'name-a',
  filters: {
    category: 'all',
    color: 'all',
    max_price: 0,
    min_price: 0,
    onSale: false,
    price: 0,
    text: '',
  }
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const {all_items} = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    dispatch({type: LOAD_ITEMS, payload: all_items})
  }, [all_items])

  useEffect(()=>{
    dispatch({type: FILTER_ITEMS})
    dispatch({type: SORT_ITEMS})
  }, [all_items, state.sort, state.filters])


  const setGridView = () => {
    dispatch({type: SET_GRIDVIEW})
  }
  const setListView = () => {
    dispatch({type: SET_LISTVIEW})
  }

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({type:  UPDATE_SORT, payload: value})
  }
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if(name==='category'){
      value = e.target.textContent
    }
    if(name==='color'){
      value = e.target.dataset.color
    }
    if(name==='price'){
      value = Number(value)
    }
    if(name==='onSale'){
      value = e.target.checked
    }
    dispatch({type: UPDATE_FILTERS, payload: {name, value}})
  }
  const clearFilters = () => {
    dispatch({type: CLEAR_FILTERS})
  }

  return (
    <FilterContext.Provider value={{
      ...state,
      setGridView,
      setListView,
      updateSort,
      updateFilters,
      clearFilters,
      }}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
