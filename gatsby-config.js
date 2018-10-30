module.exports = {
  siteMetadata: {
    title: 'Joeys Pizza - 1801 Wolf Road - Hillside, IL',
    description: 'Fresh and delicious pizza, pasta, sandwiches and more',
    keywords: 'pizza, sandwiches, dine-in, fast food'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/joeys-pizza-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-128364198-1',
        head: false,
      },
    },
  ],
}
