import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
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
      <Wrapper className="page section product-center">
        <PageHero title={name} product />
        <div className="section section-center page">
          <Link to="/products" className="btn">
            back to products
          </Link>
          <div className="product-center">
            <ProductImages images={images} description={description} />
            <section
              className="content"
              itemScope
              itemType="https://schema.org/Product"
            >
              <h2>{name}</h2>
              <Stars stars={stars} reviewCount={reviewCount}/>
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
              {stockQuantity > 0 && <AddToCart />}
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
        fluid {
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
    }
  }
`
const Wrapper = styled.main`
  .red {
    color: var(--clr-primary-4);
  }
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
    > section {
      > h2 {
        max-width: 24rem;
      }
    }
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 25em;
  }
  .info {
    text-transform: capitalize;
    width: 500px;
    display: grid;
    grid-template-columns: 135px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`
export default Product
