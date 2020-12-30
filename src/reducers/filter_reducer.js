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
    let maxPrice = action.payload.map(({node}) => node.price)
    maxPrice = Math.max(...maxPrice)
    return {
      ...state,
      all_items: [...action.payload],
      filtered_items: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      }
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
  if(action.type === UPDATE_FILTERS){
    const {name, value} = action.payload
    return {...state, filters: {...state.filters, [name]:value}}
  }
  if(action.type === FILTER_ITEMS){
    const {all_items} = state
    const {category, color,  max_price, onSale, price, text}= state.filters
    let tempItems = [...all_items]

    // SEARCH BOX
    if(text){
      tempItems = tempItems.filter(({node})=>{
        //return node.name.toLowerCase().startsWith(text) // search name
        return (node.name.toLowerCase().indexOf(text.toLowerCase()) >= 0); // fuzzy search
      })
    }
    // CATEGORIES - ex: braceletes, earrings
    if(category!=='all'){
      tempItems = tempItems.filter(({node}) =>{
        return (node.category.toLowerCase() === category)
      })
    }
    // COLORS
    if(color !== 'all'){
      tempItems = tempItems.filter(({node})=>{
        return node.colors.find((c) => c === color)
      })
    }
    // PRICE - in component price is set to the greatest price as default
    if(price < max_price){ 
      tempItems = tempItems.filter(({node}) => node.price <= price)
    }
    // ON SALE
    if(onSale){
      tempItems = tempItems.filter(({node}) => node.onSale === true)
    }
    return {...state, filtered_items: tempItems}
  }
  if(action.type === CLEAR_FILTERS){
    return {
      ...state,
      filters:{
        ...state.filters,
        text: '',
        category: 'all',
        color: 'all',
        price: state.filters.max_price,
        onSale: false,
      }
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer


// SEARCH TEST
//console.log("text = ",text, "name = ", node.name, node.name.toLowerCase().indexOf(text))
