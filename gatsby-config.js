require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Real World Assets. Your guide to RWAs. `,
    description: `RWAs are eating DeFi and are the future of TradFi, tokenization, and blockchain. This growing guide focuses on everything you need to know about Real World Assets.`,
    twitterUsername: `@rwafyi`,
    image: `RWA_Favicon.jpg`,
    siteUrl: `https://rwa.fyi`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        environment: process.env.DATO_ENVIRONMENT,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
