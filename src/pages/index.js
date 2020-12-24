import React from 'react'
import { Layout, FeaturedProducts, Hero, Services, Contact } from '../components'
const HomePage = () => {
  return (
    <Layout>
        <Hero/>
        <FeaturedProducts/>
        <Services/>
        <Contact/>
    </Layout>
  )
}

export default HomePage

