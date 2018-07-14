import React from 'react';
import styled from "styled-components";
import H1 from '../H1';
import H2 from '../H2';

const Wrapper = styled.div`
  height: 40vh;
  width: 100%;
`;

const Intro = () => 
  <Wrapper>
    <H1>Jack Coventry</H1>
    <H2>Front End Web Developer</H2>
  </Wrapper>
;

export default Intro;
