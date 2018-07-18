import React from 'react';
import Footnote from './Footnote';
import Wrapper from './Wrapper';
import { Links, LinkedIn, Github } from './Links';

const Footer = () => (
  <Wrapper>
    <Links>
      <LinkedIn href="https://www.linkedin.com/in/jack-coventry-713a8811" title="View my LinkedIn Profile" target="_blank" rel="noopener noreferrer" />
      <Github href="https://github.com/mmmoustache" title="View my GitHub Profile" target="_blank" />
    </Links>
    <Footnote>
      <a href="https://github.com/mmmoustache/portfolio-2018" title="View source code on GitHub" target="_blank" rel="noopener noreferrer">Made by me</a>
      <a href="#" title="Back to top">Back to top</a>
    </Footnote>
  </Wrapper>
);

export default Footer;
