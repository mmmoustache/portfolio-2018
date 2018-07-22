import React from 'react';
import PropTypes from 'prop-types';
import TrackVisibility from 'react-on-screen';
import Text from '../components/TextSection';

class OfflinePageComponent extends React.Component {
  render() {
    const { data } = this.props;
    
    return (
      <React.Fragment>
        <TrackVisibility 
          once
        >
          {
            ({ isVisible }) => 
              <Text
                isVisible={isVisible} 
                data={data.allOfflineJson.edges[0].node} 
              />
          }
        </TrackVisibility>
      </React.Fragment>
    );
  }
}

OfflinePageComponent.propTypes = {
  data: PropTypes.object,
};

OfflinePageComponent.defaultProps = {
  data: undefined,
};

export default OfflinePageComponent;

// eslint-disable-next-line
export const query = graphql`
  query OfflineQuery {
    site {
      siteMetadata {
        linkedIn
        gitHub
      }
    }
    allOfflineJson {
      edges {
        node {
          title
          text
        }
      }
    }
  }
`;
