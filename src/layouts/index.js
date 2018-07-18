import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import '../styles/fonts.css';
import '../styles/global.css';

const Layout = ({ children, data }) => (
  <React.Fragment>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
      ]}
    />
    <main>
      {children()}
    </main>
    <Footer />
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
      }
    }
  }
`;
