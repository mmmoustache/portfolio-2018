import React from 'react';
import styled from "styled-components";
import Footnote from './Footnote';
import Wrapper from './Wrapper';
import { Links, LinkedIn, Github } from './Links';

const Footer = () => {
  return (
    <Wrapper>
      <Links>
        <LinkedIn href="/" />
        <Github href="/" />
      </Links>
      <Footnote>
        <a href="/" title="View source code on GitHub" target="_blank">Made by me</a>
        <a href="#" title="Back to top">Back to top</a>
      </Footnote>
    </Wrapper>
  )
};

export default Footer;
