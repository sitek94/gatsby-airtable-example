import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function Gallery({ data }) {
  return (
    <Layout noFooter navbarSpacer>
      <div className="text-gray-600 body-font">
        <div className="flex flex-wrap m-4">
          {data?.allMdx.nodes.map(node => (
            <div key={node.id} className="m-2 shadow rounded p-4 w-1/2">
              <h2>{node.frontmatter.title}</h2>
              <p>Path: {node.frontmatter.path}</p>
              <p>
                Date: {new Date(node.frontmatter.date).toLocaleDateString()}
              </p>
              <p>Body: {node.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query HomePageQuery {
    allMdx {
      nodes {
        id
        frontmatter {
          date
          path
          title
        }
        excerpt
      }
    }
  }
`;
