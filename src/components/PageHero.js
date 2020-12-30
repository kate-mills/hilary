import React from 'react'
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink/Fade"
const PageHero = ({ title, item }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3> <AniLink fade to="/">Home</AniLink>
          { item && <AniLink to="/items">/ Shop</AniLink> }
          / {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero
