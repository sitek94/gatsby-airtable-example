import * as React from 'react';
import { graphql } from 'gatsby';
import tw from 'twin.macro';
import Carousel from '../components/carousel';
import Layout from '../components/layout';

export const query = graphql`
  {
    allAirtable {
      nodes {
        recordId
        data {
          Name
          Notes
          Price
        }
      }
    }
  }
`;

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Main>
        <Carousel />
      </Main>
    </Layout>
  );
};

const Main = tw.main`
  overflow-hidden h-screen
`;

export default IndexPage;
