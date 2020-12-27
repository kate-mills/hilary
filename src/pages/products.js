import React from 'react'
import styled from 'styled-components'
import {
  SEO,
  Layout,
  Filters,
  ProductList,
  Sort,
  PageHero,
} from '../components'

import { useProductsContext } from '../context/products_context'

const ProductsPage = () => {
  const { all_items, featured_items, onSale_items } = useProductsContext()
  return (
    <Layout>
      <SEO
        title="Shop Jewelry"
        description="Shop all of our hand cut designs that Hilary Molloy makes with love and natural elements in the beautiful Napa Valley."
      />
      <main>
        <PageHero title="products" />
        <Wrapper className="page">
          <div className="section-center products">
            <Filters />
            <div>
              <Sort />
              <ProductList />
            </div>
          </div>
        </Wrapper>
      </main>
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
