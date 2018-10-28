import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const PizzaHeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        hero: file(relativePath: { eq: "large-cheese-pizza.jpg" }) {
          childImageSharp {
            fixed(width: 2000) {
              ...GatsbyImageSharpFixed_noBase64
            }
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.hero.childImageSharp.fluid}
        style={{ maxHeight: '400px' }}
      />
    )}
  />
)
export default PizzaHeroImage
