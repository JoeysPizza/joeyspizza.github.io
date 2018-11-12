import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import MenuPartyPacks from '../components/menu-party-packs'
import MenuCatering from '../components/menu-catering'

const CateringMenuPage = () => (
  <Layout>
    <Helmet title="Catering Menu - Joeys Pizza - Hillside, IL" />
    <h1 className="heading-primary">~Catering Menu~</h1>
    <MenuCatering />
    <hr />
    <h2 className="heading-primary">~Party Packs~</h2>
    <MenuPartyPacks />
  </Layout>
)

export default CateringMenuPage
