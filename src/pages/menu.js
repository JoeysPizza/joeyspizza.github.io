import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Menu from '../components/menu'

const MenuPage = () => (
  <Layout>
    <Helmet title="Menu - Joeys Pizza - Hillside, IL" />
    <h1
      className="text-center"
      style={{
        marginBottom: '40px',
      }}
    >
      ~Our Menu~
    </h1>
    <Menu />
  </Layout>
)

export default MenuPage
