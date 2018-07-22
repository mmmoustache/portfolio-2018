import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { initServiceWorker } from '../utils/sw';
import Footer from '../components/Footer';
import SkipToMain from '../components/SkipToMain';
import '../styles/fonts.css';
import '../styles/global.css';

initServiceWorker();

class Layout extends React.Component {
    
  static propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.object,
  };

  static defaultProps = {
    data: undefined,
  };

  constructor() {
    super();

    if (typeof window !== 'undefined') {
      document.body.classList.add("js");
    }
  }

  render() {
    const { children, data } = this.props;

    return (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
          ]}
        />
        <main>
          <SkipToMain href="#work" title="skip to content">skip to content</SkipToMain>
          {children()}
        </main>
        <Footer
          linkedIn={data.site.siteMetadata.linkedIn}
          gitHub={data.site.siteMetadata.gitHub}
        />
      </React.Fragment>
    );
  }
}

export default Layout;

// eslint-disable-next-line
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        linkedIn
        gitHub
      }
    }
  }
`;
