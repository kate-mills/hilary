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
    const {sort, filtered_items} = state
    let tempItems = [...filtered_items];
    if(sort === 'price-lowest'){
      tempItems = tempItems.sort(
        (a, b) => a.node.price - b.node.price
      ) 
    }
    if(sort === 'price-highest'){
      tempItems = tempItems.sort(
        (a, b) => b.node.price - a.node.price
      ) 
    }
    if(sort === 'name-a'){
      tempItems = tempItems.sort((a, b) => {
         return  a.node.name.localeCompare(b.node.name)
      })
    }
    if(sort === 'name-z'){
      tempItems = tempItems.sort((a, b) => {
         return  b.node.name.localeCompare(a.node.name)
      })
    }
    return {...state, filtered_items: tempItems}
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
