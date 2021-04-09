module.exports = {
  siteMetadata: {
    title: `City Wide HVAC`,
    description: `Furnaces, Air Conditioners, Heat Pumps, Air Filters, Humidifiers, Clean & Check, Water Heater and Sump Pumps. 24/7 service, call 513.200.2698`,
    siteUrl: `https://www.gatsby-landing-page-starter.com`,
    author: `@schenz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `City Wide HVAC`,
        short_name: `citywidehvac`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#675CE2`,
        display: `standalone`,
        icon: `src/assets/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`  
  ],
}
