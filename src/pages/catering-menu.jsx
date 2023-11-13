import React from 'react'

import Layout from '../components/layout'
import Metadata from '../components/metadata'
import MenuPartyPacks from '../components/menu-party-packs'
import MenuCatering from '../components/menu-catering'

export const Head = () => (
  <Metadata title="Catering Menu - Joeys Pizza - Hillside, IL" />
)

export default function CateringMenuPage() {
  return (
    <Layout>
      <h1 className="heading-primary">~Catering Menu~</h1>
      <MenuCatering />
      <hr />
      <h2 className="heading-primary">~Party Packs~</h2>
      <MenuPartyPacks />
    </Layout>
  )
}
