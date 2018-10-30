import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Menu from '../components/menu'

const MenuPage = () => (
  <Layout>
    <Helmet title="Restaurant Menu - Joeys Pizza - Hillside, IL" />
    <Menu />
  </Layout>
)

export default MenuPage
