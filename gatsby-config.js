import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    DEV_SSR: false,
  },
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
            baseId: 'appQL2HrfEBsSWQeV',
            tableName: 'table-one',
          },
          {
            baseId: 'appQL2HrfEBsSWQeV',
            tableName: 'Gallery',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'photos',
        path: `${__dirname}/photos/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-netlify-cms',
  ],
};
