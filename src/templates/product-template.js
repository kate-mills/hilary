import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Layout } from "../components"

const Product = ({ data }) => {
  return (
    <Layout>
      <main>
        <Wrapper className="page section section-center">
          <Image fluid={data.item.image.fluid} alt="" type="media" />
          <article itemScope itemType="https://schema.org/Product">
            <div className="title">
            <h2 itemProp="name">{data.item.name}</h2>
              <div className="underline"></div>
            </div>
            <p>{data.item.description.description} </p>
            <p>${data.item.price}</p>
          </article>
        </Wrapper>
      </main>
    </Layout>
  )
}


export const query = graphql`
  query($slug: String) {
    item: contentfulHilaryJewelry(slug: { eq: $slug }) {
      name
      slug
      description{ description }
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

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default Product
