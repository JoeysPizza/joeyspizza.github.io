import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <Helmet title="Contact - Joeys Pizza - Hillside, IL" />
    <h1 className="heading-primary">~Contact Us~</h1>
    <div className="row">
      <div className="col-md-4">
        <p>
          Thanks for your interest in Joeys Pizza. Use this form to message us
          and we will get back to you within 48 hours.
        </p>
        <p>
          Or call us at{' '}
          <a href="tel:+17085933939" style={{ color: '#650205' }}>
            (708) 593-3939
          </a>
        </p>
      </div>

      <div className="col-md-8">
        <div style={{ minHeight: '400px', border: '1px solid #eee' }}>
          <iframe
            title="test"
            src="https://gregjopa.wufoo.com/embed/s2xab2m06onge5/def/&amp;header=hide"
            height="500px"
            width="100%"
            frameBorder="0"
            scrolling="no"
            style={{ width: '100%', border: 'none' }}
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
