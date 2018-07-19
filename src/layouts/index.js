import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import SkipToMain from '../components/SkipToMain';
import '../styles/fonts.css';
import '../styles/global.css';

function ServiceWorker() {
  if (typeof window !== 'undefined') {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/portfolio-2018/sw.js').then(function(registration) {
          // Registration was successful
          console.info('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
          // registration failed :(
          console.error('ServiceWorker registration failed: ', err);
        });
      });
    }
  }
}

ServiceWorker();

const Layout = ({ children, data }) => (
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

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object,
};

Layout.defaultProps = {
  data: undefined,
};

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
