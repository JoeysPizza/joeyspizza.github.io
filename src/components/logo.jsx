import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Logo() {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "joeys-pizza-simple-logo-onblack.png" }) {
        childImageSharp {
          gatsbyImageData(width: 150, placeholder: NONE, layout: FIXED)
        }
      }
    }
  `)

  return (
    <GatsbyImage
      image={getImage(data.logo)}
      alt="Joeys Pizza logo"
      loading="eager"
    />
  )
}
