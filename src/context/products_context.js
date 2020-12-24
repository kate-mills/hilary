import {graphql, useStaticQuery} from 'gatsby'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'


const query = graphql`
  {
    allContentfulHilaryJewelry {
      edges {
        node {
          name
          stockQuantity
          slug
          id
          description {
            description
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          price
          colors
          category
          featured
          onSale
        }
      }
    }
  }
`

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  all_items: [],
  featured_items: [],
  sale_items: [],
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const { allContentfulHilaryJewelry } = useStaticQuery(query);

  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = ()=>{
    dispatch({type: SIDEBAR_OPEN})
  }
  const closeSidebar = ()=>{
    dispatch({type: SIDEBAR_CLOSE})
  }


  return (
    <ProductsContext.Provider value={{
      ...state,
      openSidebar,
      closeSidebar,
      all_items: allContentfulHilaryJewelry,
      }}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}

