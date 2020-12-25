import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { formatPrice } from '../utils/helpers'

import { SEO, Layout, ProductImages, AddToCart, Stars, PageHero } from '../components'

const Product = ({ data }) => {
  const {
    description: { description },
    image,
    name,
    onSale,
    price,
    stockQuantity,
  } = data.item
  return (
    <Layout>
      <SEO title={`${name}`} />
      <Wrapper className="page section product-center">
        <PageHero title={name} product/>
        <div className='section section-center page'>
          <Link to='/products' className='btn'>back to products</Link>

        <div className="product-center">
          {/* Images here */}
          <ProductImages images={image}/>
          <section className='content' itemScope itemType="https://schema.org/Product">
            <h2>{name}</h2>
            <Stars/>
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>

            { stockQuantity < 2 ?
                <p className='info'> <span className="red">Rare - only 1 left!</span></p>:
                null
            }
            { onSale && (
              <p className='info'>
                <span className="red">On Sale!</span>
              </p>
            )}
            <hr/>
            {stockQuantity > 0 && <AddToCart/>}
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
      description { description }
      featured
      id
      image { fluid { ...GatsbyContentfulFluid } }
      name
      onSale
      price
      slug
      stockQuantity
    }
  }
`
const Wrapper = styled.main`
  .red { color: var(--clr-red-dark); }
  .product-center {
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
