import React from 'react'
import { SEO, Layout, FeaturedProducts, Hero, Services, Contact } from '../components'
const HomePage = () => {
  return (
    <Layout>
      <SEO title="Home" />
        <Hero/>
        <FeaturedProducts/>
        <Services/>
        <Contact/>
    </Layout>
  )
}

export default HomePage

