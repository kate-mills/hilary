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
      filtler_items: [...action.payload],
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
