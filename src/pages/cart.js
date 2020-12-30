import React from 'react'
import styled from 'styled-components'
import { useCartContext } from "../context/cart_context"
import AniLink from "gatsby-plugin-transition-link/AniLink/Fade"
import {
  SEO,
  Layout,
  CartContent, PageHero
} from '../components'

const CartPage = () => {
  const {cart} = useCartContext();
  return (
    <Layout>
      <SEO title="Cart" />
      {
        (cart.length >= 1) && (
          <main>
            <PageHero title="cart"/>
            <Wrapper className="page">
              <CartContent/>
            </Wrapper>
          </main>
        )
      }
      {
        (cart.length < 1) ? 
          <Wrapper className="page-100">
            <div className="empty">
              <h2>Your cart is empty</h2>
              <AniLink fade to='/shop' className='btn'>Go Shopping</AniLink>
            </div>
          </Wrapper>
          :null
      }
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
