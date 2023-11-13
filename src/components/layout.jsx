import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import './layout.css'

import Header from './header'
import Footer from './footer'

require('typeface-playfair-display')
require('typeface-roboto')

export default function Layout({ hideHeader = false, children }) {
  console.log({
    hideHeader
  })
  return (
    <>
      {hideHeader || <Header />}
      <main className="container" style={{ paddingTop: '15px' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}
