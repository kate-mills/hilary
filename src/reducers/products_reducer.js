import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  //GET_ITEMS_BEGIN,
  //GET_ITEMS_SUCCESS,
  //GET_ITEMS_ERROR,
  //GET_SINGLE_ITEM_BEGIN,
  //GET_SINGLE_ITEM_SUCCESS,
  //GET_SINGLE_ITEM_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
