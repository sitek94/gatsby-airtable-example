import * as React from 'react';
import { graphql } from 'gatsby';
import tw from 'twin.macro';

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
`

// markup
const IndexPage = ({ data }) => {
  return (
    <main>
      <ul>
        {data.allAirtable.nodes.map(node => (
          <li key={node.recordId}>
            {node.data.Name} - {node.data.Notes} - {node.data.Price}
          </li>
        ))}
      </ul>
      <Button>Activate</Button>
    </main>
  );
};

export default IndexPage;
