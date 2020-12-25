import React from 'react'
import styled from 'styled-components'
//import { useCartContext } from "../context/cart_context"
//import { Link } from "gatsby"
import {
  SEO,
  Layout,
  //CartContent, PageHero
} from '../components'

const CartPage = () => {
  return (
    <Layout>
      <SEO title="Cart" />
      <Wrapper>
        <h4>cart page</h4>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage
