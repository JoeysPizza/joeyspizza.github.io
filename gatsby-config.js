/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.joeyspizzahillside.com/',
    title: 'Joeys Pizza - Pizza Restaurant - 1801 S Wolf Rd, Hillside, IL',
    description:
      'Joeys Pizza is a family-owned restaurant offering Pizza, Italian Beef, ' +
      'Sandwiches, Wings, and more. Fast and delicious food with a comfortable atmosphere.',
    keywords: 'pizza, sandwiches, dine-in, fast food',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
