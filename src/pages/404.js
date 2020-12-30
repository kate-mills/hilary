import React from 'react'
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink/Fade"
import { SEO, Layout } from '../components'

const ErrorPage = () => {
  return (
    <Layout>
      <SEO title="Oops" />
      <Wrapper className="page-100">
        <section>
          <h1>Oops!</h1>
          <h3>Sorry, the page you tried cannot be found.</h3>
          <AniLink fade to="/" className="btn">
            Back to Homepage
          </AniLink>
        </section>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
