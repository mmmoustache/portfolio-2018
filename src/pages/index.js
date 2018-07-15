import React from 'react';
import TrackVisibility from 'react-on-screen';

import About from '../components/About';
import Intro from '../components/Intro';
import ProjectList from '../components/ProjectList';

class IndexPage extends React.Component {
  constructor() {
    super();
  
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
    }, 500);
  }

  render() {
    const { data } = this.props;
    const { loaded } = this.state;
    return (
      <div>
        <Intro loaded={loaded} />
        <ProjectList items={data.allProjectsJson.edges[0].node.items} />
        <TrackVisibility offset={-300} partialVisibility once>{({ isVisible }) => <About isVisible={isVisible} />}</TrackVisibility>
      </div>
    );
  }
};

// const IndexPage = ({ data }) => (
//   <div>
//     <Intro loaded />
//     <ProjectList items={data.allProjectsJson.edges[0].node.items} />
//     <About />
//   </div>
// );

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
            url
            repo
          }
        }
      }
    }
  }
`;
