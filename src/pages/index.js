import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'

const IndexPage = () => (
  <div>
    <Hero />
    <Layout>
      <div className="container">
        <div
          className="text-center menu-cta-container"
          style={{ margin: '25px 0' }}
        >
          <h1 style={{ color: '#a60512', lineHeight: '40px' }}>
            Fresh and delicious pizza, pasta, sandwiches and more.
          </h1>
          <Link
            className="btn btn-primary btn-lg"
            to="/menu/"
            style={{ margin: '25px 0', fontWeight: 'bold', minWidth: '250px' }}
          >
            View Menu
          </Link>

          <div
            style={{
              fontSize: '30px',
              margin: '25px auto 50px auto',
              color: 'rgb(166, 5, 18)',
              border: '1px solid black',
              padding: '20px 10px'
            }}
          >
            We offer delivery on Friday and Saturday from
            <span style={{ whiteSpace: 'nowrap' }}> 4pm to 9pm</span>
          </div>

        </div>
      </div>
    </Layout>
  </div>
)

export default IndexPage
