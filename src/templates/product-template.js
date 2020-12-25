import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { SEO, Layout } from '../components'

const Product = ({ data }) => {
  return (
    <Layout>
      <SEO title={`${data.item.name}`} />
      <Wrapper className="page section product-center">
        <article itemScope itemType="https://schema.org/Product">
          <div className="title">
            <h4 itemProp="name">{data.item.name}</h4>
            <div className="underline"></div>
          </div>
          <div>
            <Image fluid={data.item.image.fluid} alt="" type="media" />
          </div>
          <p className="info">{data.item.description.description} </p>
          <p className="price">${data.item.price}</p>
        </article>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    item: contentfulHilaryJewelry(slug: { eq: $slug }) {
      name
      slug
      description {
        description
      }
      price
      category
      featured
      onSale
      stockQuantity
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
const Wrapper = styled.main`
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
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
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
