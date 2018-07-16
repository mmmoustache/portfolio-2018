import React from 'react';
import styled from "styled-components";
import H2 from '../H2';
import H3 from '../H3';

const Wrapper = styled.div`
  background-color: #222;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;

  &::before {
    background-image: url("./clouds.jpg");
    background-size: cover;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    opacity: 0.05;
  }
`;

const Navigation = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 2;

  a {
    color: #fff;
    display: inline-block;
    font-weight: bold;
    padding: 10px 20px;
    position: relative;
    text-decoration: none;

    &:hover {
      &::before {
        background: red;
        content: '';
        display: block;
        height: 20%;
        width: 100%;
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
      }
    }
  }
`;

const TextWrapper = styled.div`
 position: relative;

 &::before {
  background: #000;
  left: -100%;
  position: absolute;
  height: 80%;
  width: 100%;
  top: 0;
 }

  ${
    props => props.loaded && `
      & > * {
        opacity: 1;
        top: 0;
      }
    `
  }
`;

const Inner = styled.div`
  color: #fff;
  margin: 0 auto;
  max-width: 60%;
  padding: 20px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
`;

const offset = '40px';
const offset2 = `calc(100% - ${offset})`;

const PanelWrapper = styled.div`
  display: flex;
  background: #F25F5C;
  position: absolute;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const PanelItem = styled.div`
  border-right: 1px solid #111;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: black;
    transition-duration: 0.5s;
    transition-property: height;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

    ${
      props => props.loaded && `
        height: 100%;
      `
    }
    
    ${
      props => props.delay && `
        transition-delay: ${props.delay}s;
      `
    }
  }

  /* &::before {
    background: #111;
    content: '';
    display: block;
    height: 500px
    width: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    animation: polygons4 30s alternate infinite;
    clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%); */
}

  @keyframes polygons4 {
    25% {
      clip-path: polygon(8% 1%, 100% 8%, 91% 100%, 0 94%);
    }
    50% {
      clip-path: polygon(2% 0, 85% 7%, 90% 95%, 8% 89%);
    }
    75% {
      clip-path: polygon(8% 10%, 97% 2%, 100% 90%, 1% 100%);
    }
  }
`;

const Logo = styled.a`
  display: none;
  width: 60px;
  height: 60px;
  position: fixed;
  top: 40px;
  left: 40px;
  z-index: 1000;

  svg,
  img {
    width: 100%;
    fill: #fff;
  }

  path {
    /* mix-blend-mode: difference; */
  }
`;

const Intro = ({ loaded }) => (
  <Wrapper>
    <PanelWrapper>
      { [...Array.from(Array(5))].map(() => <PanelItem loaded={loaded} delay={Math.random()/5} />) }
    </PanelWrapper>
    <Logo href="#">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="200px" height="200px" viewBox="0 0 200 200" enable-background="new 0 0 200 200">
        <path d="M100.001,0C44.771,0,0,44.771,0,100.001C0,155.229,44.771,200,100.001,200C155.229,200,200,155.229,200,100.001
          C200,44.771,155.229,0,100.001,0z M127.975,154.898c-2.303,1.5-4.852,2.25-7.65,2.25c-0.9,0-1.801-0.1-2.699-0.299
          c-10.002-2.701-20.002-5.4-30-8.1c-9.101-2.799-16.151-6.65-21.15-11.551c-6-5.898-11.1-15-15.3-27.3c6.199-6.099,12-9.15,17.4-9.15
          c1.5,0,3.449,0.45,5.85,1.35c6.099,2.201,10.699,5.1,13.8,8.699c1.599,1.901,3.45,5.25,5.55,10.051c2,4.401,4.238,7.701,6.639,9.9
          L103,132.1v0.449l0.674-0.549h0.6c0.398,0,0.75-0.525,1.051-1.826c1.299-4.199,2.6-8.285,3.9-12.387
          c0.998-3.799,1.5-8.317,1.5-13.619c0-3.698-0.201-9.158-0.6-16.409c-0.402-7.25-0.602-12.667-0.602-16.267
          c0-10.1,0.65-17.146,1.951-21.146c2.4-7.699,7.398-11.548,15-11.548c4.5,0,8.648,1.351,12.449,4.051
          c1.5,1.102,4.65,4.201,9.451,9.301c-0.803,4.901-1.201,10.402-1.201,16.5c0,4.301,0.275,10.75,0.826,19.35
          c0.547,8.602,0.824,15.051,0.824,19.35C148.824,129.549,141.873,145.4,127.975,154.898z"/>
      </svg>
    </Logo>
    <Navigation>
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="/JackCoventryCV2018.pdf" download>CV</a>
    </Navigation>
    <Inner>
      <TextWrapper loaded={loaded}>
        <H3>Front End Web Developer</H3>
        <H2>Jack Coventry</H2>
      </TextWrapper>
    </Inner>
  </Wrapper>
);

export default Intro;
