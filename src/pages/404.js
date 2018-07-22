import React from 'react';
import PropTypes from 'prop-types';
import TrackVisibility from 'react-on-screen';
import Text from '../components/TextSection';

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        <TrackVisibility once>
          {
            ({ isVisible }) => 
              <Text
                isVisible={isVisible} 
                data={data.allNotFoundJson.edges[0].node} 
                ctaLink="/"
                ctaText="Back to home"
              />
          }
        </TrackVisibility>
      </React.Fragment>
    );
  }
}

NotFoundPage.propTypes = {
  data: PropTypes.object,
};

NotFoundPage.defaultProps = {
  data: undefined,
};

export default NotFoundPage;

// eslint-disable-next-line
export const query = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        linkedIn
        gitHub
      }
    }
    allNotFoundJson {
      edges {
        node {
          title
          text
        }
      }
    }
  }
`;
