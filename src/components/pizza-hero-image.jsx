import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function PizzaHeroImage() {
  const data = useStaticQuery(graphql`
    {
      hero: file(relativePath: { eq: "large-cheese-pizza.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 2000, placeholder: NONE, layout: CONSTRAINED)
        }
      }
    }
  `)

  return (
    <GatsbyImage
      image={getImage(data.hero)}
      style={{ maxHeight: '400px' }}
      alt="large cheese pizza"
      loading="eager"
    />
  )
}
