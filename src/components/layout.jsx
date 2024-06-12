import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import './layout.css'

import Header from './header'
import Footer from './footer'
import ModalTemporarilyClosed from './modal'

require('typeface-playfair-display')
require('typeface-roboto')

export default function Layout({ hideHeader = false, children }) {
  return (
    <>
      {hideHeader || <Header />}
      <main className="container" style={{ paddingTop: '15px' }}>
        <ModalTemporarilyClosed />
        {children}
      </main>
      <Footer />
    </>
  )
}
