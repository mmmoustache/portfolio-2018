import React from 'react';
import About from '../components/About';
import Intro from '../components/Intro';
import ProjectList from '../components/ProjectList';

const IndexPage = ({ data }) => (
  <div>
    <Intro />
    <ProjectList items={data.allProjectsJson.edges[0].node.items} />
    <About />
  </div>
);

export default IndexPage;

export const query = graphql`
  query ProjectsQuery {
    allProjectsJson {
      edges {
        node {
          items {
            title
            id
            description
            technologies
            image_url
          }
        }
      }
    }
  }
`;
