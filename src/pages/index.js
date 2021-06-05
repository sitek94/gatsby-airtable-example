import * as React from 'react';
import { graphql } from 'gatsby';
import tw from 'twin.macro';
import Carousel from '../components/carousel';

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

const Button = tw.button`
  bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
`;

// markup
const IndexPage = ({ data }) => {
  return (
    <Main>
      <Carousel />
    </Main>
  );
};

const Main = tw.main`
  overflow-hidden h-screen
`;

export default IndexPage;
