import React from 'react'
import styled from 'styled-components'
import {
  SEO,
  Layout,
  //Filters, ProductList, Sort, PageHero
} from '../components'

import { useProductsContext } from '../context/products_context'

const ProductsPage = () => {
  const { all_items, featured_items, onSale_items } = useProductsContext()
  console.log('allItems', all_items, featured_items, onSale_items)
  return (
    <Layout>
      <SEO title="Shop Jewelry" />
      <Wrapper>
        <h4>products page</h4>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
