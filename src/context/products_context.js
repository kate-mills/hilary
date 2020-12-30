import { graphql, useStaticQuery } from 'gatsby'
import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
} from '../actions'

const query = graphql`
  {
    allItems:allContentfulHilaryJewelry(sort: {order: ASC, fields: name}) {
      edges {
        node {
          colors
          category
          description { description }
          featured
          id
          images { 
            fluid(resizingBehavior: SCALE){
              ...GatsbyContentfulFluid
            }
          }
          name
          onSale
          price
          reviewCount
          slug
          stars
          stockQuantity
          wholePrice
        }
      }
    }
    featuredItems: allContentfulHilaryJewelry(sort: {order: ASC, fields: name},
      filter: { featured: { eq: true } }
    ) {
      edges {
        node {
          colors
          category
          description { description }
          featured
          id
          images { 
            fluid(resizingBehavior: SCALE){
              ...GatsbyContentfulFluid
            }
          }
          name
          onSale
          price
          reviewCount
          slug
          stars
          stockQuantity
          wholePrice
        }
      }
    }
    onSaleItems: allContentfulHilaryJewelry(filter: { onSale: { eq: true } }) {
      edges {
        node {
          colors
          category
          description { description }
          featured
          id
          images { 
            fluid(resizingBehavior: SCALE){
              ...GatsbyContentfulFluid
            }
          }
          name
          onSale
          price
          reviewCount
          slug
          stars
          stockQuantity
          wholePrice
        }
      }
    }
  }
`

const initialState = { isSidebarOpen: false, products_loading: false, products_error: false, all_items: [], featured_items: [], onSale_items: [] };

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const { allItems, featuredItems, onSaleItems } = useStaticQuery(query);

  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar =  () => { dispatch({ type: SIDEBAR_OPEN }) };
  const closeSidebar = () => { dispatch({ type: SIDEBAR_CLOSE }) };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        all_items: allItems.edges,
        featured_items: featuredItems.edges,
        onSale_items: onSaleItems.edges,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
};

export const useProductsContext = () => {
  return useContext(ProductsContext)
};
