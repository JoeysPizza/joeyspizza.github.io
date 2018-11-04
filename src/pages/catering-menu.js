import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import MenuCatering from '../components/menu-catering'

const CateringMenuPage = () => (
  <Layout>
    <Helmet title="Catering Menu - Joeys Pizza - Hillside, IL" />
    <h1 className="heading-primary">~Catering Menu~</h1>
    <MenuCatering />
  </Layout>
)

export default CateringMenuPage
