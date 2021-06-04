import * as React from 'react';

import { graphql } from 'gatsby';

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
      <h1>Hello world</h1>
      <hr />
      <ul>
        {data.allAirtable.nodes.map(node => (
          <li key={node.recordId}>{node.data.Name} - {node.data.Notes} - {node.data.Price}</li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
