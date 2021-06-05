import * as React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/navbar';
import { Toolbar } from '@material-ui/core';

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
    <main>
      <Navbar />
      <Toolbar />
      <ul>
        {data.allAirtable.nodes.map(node => (
          <li key={node.recordId}>{node.data.Name} - {node.data.Notes} - {node.data.Price}</li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
