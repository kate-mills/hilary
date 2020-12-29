import React from 'react'
import Product from './Product'
import Title from '../Globals/Title'
import { StaticQuery, graphql } from 'gatsby'

const getProducts = graphql`
  {
    items: allContentfulHilaryJewelry {
      edges {
        node {
          id
          name
          price
          images {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Products() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="Featured Jewelry" />
              <div className="row">
                {data.items.edges.map(({ node: item }) => {
                  return <Product key={item.id} product={item} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
