module.exports = {
  siteMetadata: {
    title: 'Joeys Pizza - Pizza Restaurant - 1801 S Wolf Rd, Hillside, IL',
    description: 'Joeys Pizza is a family-owned restaurant offering Pizza, Italian Beef, ' +
      'Sandwiches, Wings, and more. Fast and delicious food with a comfortable atmosphere.',
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
        name: 'Joeys Pizza in Hillside, IL',
        short_name: 'Joeys',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
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
