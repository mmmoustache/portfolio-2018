import React from 'react';
import PropTypes from 'prop-types';
import Footnote from './Footnote';
import Wrapper from './Wrapper';
import { Links, LinkedIn, Github } from './Links';

const Footer = ({ linkedIn, gitHub }) => (
  <Wrapper>
    <Links>
      <LinkedIn href={linkedIn} title="View my LinkedIn Profile" target="_blank" rel="noopener noreferrer" />
      <Github href={gitHub} title="View my GitHub Profile" target="_blank" rel="noopener noreferrer" />
    </Links>
    <Footnote>
      <a href="https://github.com/mmmoustache/portfolio-2018" title="View source code on GitHub" target="_blank" rel="noopener noreferrer">Made by me</a>
      <a href="#" title="Back to top">Back to top</a>
    </Footnote>
  </Wrapper>
);

Footer.propTypes = {
  linkedIn: PropTypes.string,
  gitHub: PropTypes.string,
};

Footer.defaultProps = {
  linkedIn: undefined,
  gitHub: undefined,
};

export default Footer;
