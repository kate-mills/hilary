import {
  LOAD_ITEMS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_ITEMS,
  UPDATE_FILTERS,
  FILTER_ITEMS,
  CLEAR_FILTERS,
} from '../actions'


const filter_reducer = (state, action) => {
  if(action.type === LOAD_ITEMS){
    return {
      ...state,
      all_items: [...action.payload],
      filtered_items: [...action.payload],
    }
  }
  if(action.type === SET_GRIDVIEW){
    return{ ...state, grid_view: true, }
  }
  if(action.type === SET_LISTVIEW){
    return { ...state, grid_view: false, }
  }
  if(action.type === UPDATE_SORT){
    return {...state, sort: action.payload}
  }
  if(action.type === SORT_ITEMS){
    return {...state}
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
