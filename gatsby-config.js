require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'gatsby-airtable-example',
  },
  plugins: [
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appQL2HrfEBsSWQeV`,
            tableName: `table-one`,
          },
        ]
      },
    },
  ],
};
