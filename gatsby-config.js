module.exports = {
  siteMetadata: {
    title: `Alex / baddate`,
    description: `A linux and open source developer from nowhere`,
    author: `Alex`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/gallery`,
        name: `gallery`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/markdown/blog`,
        name: `blog`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/markdown/projects`,
        name: `projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-291E5KVL0F`,
        // Puts tracking script in the head instead of the body
        head: true,
        // Enables Google Optimize using your container Id
        optimizeId: `G-291E5KVL0F`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        outputStyle: `compressed`,
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex / baddate`,
        short_name: `Alex / baddate`,
        start_url: `/`,
        display: `standalone`,
        theme_color: `#fff`,
        icon: `static/assets/world-map.png`
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-netlify-cms`
  ]
};
