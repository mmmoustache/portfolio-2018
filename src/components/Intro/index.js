import React from 'react';
import styled from "styled-components";
import H1 from '../H1';
import H3 from '../H3';

const Wrapper = styled.div`
  background: #000;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Inner = styled.div`
  color: #fff;
  margin: 0 auto;
  max-width: 1600px;
  padding: 20px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const Panel = styled.div`
  background: red;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: left 0.5s cubic-bezier(0.86, 0, 0.07, 1) 0.15s, top 0.5s cubic-bezier(0.86, 0, 0.07, 1) 0.15s, width 0.5s cubic-bezier(0.86, 0, 0.07, 1) 0.15s, height 0.5s cubic-bezier(0.86, 0, 0.07, 1) 0.15s, background 0.5s cubic-bezier(0.86, 0, 0.07, 1) 0.15s;
  width: 100%;

  ${
    props => props.loaded && `
      height: calc(100% - 60px);
      left: calc(50% - 30px);
      top: 30px;
      width: 50%;
    `
  }
`;

const Intro = ({ loaded }) => 
  <Wrapper>
    <Panel loaded={loaded} />
    <Inner >
      <H1>Jack Coventry</H1>
      <H3>Front End Web Developer</H3>
    </Inner>
  </Wrapper>
;

export default Intro;
