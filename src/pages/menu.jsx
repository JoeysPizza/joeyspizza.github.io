import React from 'react'

import Layout from '../components/layout'
import Metadata from '../components/metadata'
import Menu from '../components/menu'

export const Head = () => <Metadata title="Menu - Joeys Pizza - Hillside, IL" />

export default function MenuPage() {
  return (
    <Layout>
      <h1 className="heading-primary">~Our Menu~</h1>
      <Menu />
    </Layout>
  )
}
