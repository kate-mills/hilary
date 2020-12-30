import React from 'react'
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink/Fade"
import { graphql } from 'gatsby'
import { formatPrice } from '../utils/helpers'

import {
  SEO,
  Layout,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'

const Product = ({ data }) => {
  const {
    id,
    colors,
    description: { description },
    images,
    name,
    onSale,
    price,
    reviewCount,
    stars,
    stockQuantity,
  } = data.item
  return (
    <Layout>
      <SEO title={name} description={description} />
      <Wrapper className="page section item-center">
        <PageHero title={name} shop />
        <div className="section section-center page">
          <AniLink fade to="/shop" className="btn">
            back to all jewelry
          </AniLink>
          <div className="item-center">
            <ProductImages images={images} description={description} />
            <section
              className="content"
              itemScope
              itemType="https://schema.org/Product"
            >
              <h2>{name}</h2>
              <Stars stars={stars} reviewCount={reviewCount} />
              <h5 className="price">{formatPrice(price)}</h5>
              <p className="desc">{description}</p>
              {stockQuantity < 2 && (
                <p className="info">
                  <span className="red">Rare - only 1 left!</span>
                </p>
              )}
              {onSale && (
                <p className="info">
                  <span className="red">On Sale!</span>
                </p>
              )}
              <hr />
              { stockQuantity > 0 && <AddToCart 
                id={id}
                colors={colors}
                item={{...data.item}}
                stockQuantity={stockQuantity}/>
              }
            </section>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    item: contentfulHilaryJewelry(slug: { eq: $slug }) {
      category
      colors
      description {
        description
      }
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
      stars
      slug
      stockQuantity
      wholePrice
    }
  }
`

const Wrapper = styled.main`
  .red {
    color: var(--clr-primary-4);
    width: fit-content;
    white-space: pre;
  }
  .item-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .item-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default Product
