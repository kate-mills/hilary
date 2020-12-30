import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import AniLink from "gatsby-plugin-transition-link/AniLink/Fade"
import Image from 'gatsby-image'

const Product = (props) => {
  const {
    description:{ description },
    images,
    name,
    price,
    slug,
  } = props
  return (
    <Wrapper>
      <div className="container">
        <AniLink fade to={`/shop/${slug}`}>
          <Image fluid={images[0].fluid} alt={description}/>
        </AniLink>
        <AniLink fade to={`/shop/${slug}`} className="link"><FaSearch/></AniLink>
      </div>
      <footer>
        <h5>{name.substring(0, 21)}...</h5>
        {/* Reminder: Use cents for safer calculations */}
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: contain;
    background: var(--clr-white);
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`
export default Product
