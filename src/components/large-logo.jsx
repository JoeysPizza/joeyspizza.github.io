import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function LargeLogo() {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "joeys-pizza-main-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, placeholder: NONE, layout: CONSTRAINED)
        }
      }
    }
  `)

  return (
    <GatsbyImage
      image={getImage(data.logo)}
      alt="Joeys Pizza large logo"
      className="large-logo"
      loading="eager"
      style={{
        margin: '0 auto',
        position: 'absolute',
        top: '25px',
        left: 0,
        right: 0,
        width: '300px',
      }}
    />
  )
}
