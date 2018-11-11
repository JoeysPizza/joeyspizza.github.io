module.exports = {
  siteMetadata: {
    title: 'Joeys Pizza - Pizza Restaurant - 1801 S Wolf Rd, Hillside, IL',
    description: 'Joeys Pizza is a quick casual restaurant offering Pizza, Italian Beef, ' +
      'Salads, Wings, and more. Dine-in or carryout in Hillside, IL near Oakbrook and Elmhurst.',
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
        icon: 'src/images/j-icon.png', // This path is relative to the root of the site.
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
