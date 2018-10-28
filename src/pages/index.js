import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'

const IndexPage = () => (
  <div><Hero />
  <Layout>

    <div className="container">
      <div className="text-center menu-cta-container" style={{ margin: '25px 0' }}>
        <h1 style={{ color: '#a60512' }}>
          Fresh and delicious pizza, pasta, sandwiches and more.
        </h1>
        <Link className="btn btn-primary btn-lg" to="/menu" style={{margin: '18px 0'}}>
          View Menu
        </Link>
      </div>
    </div>
  </Layout></div>
)

export default IndexPage
