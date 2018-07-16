import React from 'react';
import styled from "styled-components";
import H2 from '../H2';
import H3 from '../H3';
import Text from "../Text";
import { Breakpoints } from '../../utils/breakpoints';

const Wrapper = styled.div`
  width: 100%;
`;

const Content = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition-delay: 1s;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  
  @media ${Breakpoints.medium} {
    padding-left: 60px;
    width: calc(100% - 360px);
  }

  ${
    props => props.isVisible && `
      opacity: 1;
      transform: translateY(0);
    `
  }
`;

const Inner = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 80px 20px;
  
  @media ${Breakpoints.medium} {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

const Avatar = styled.div`
  clip-path: circle(0% at 50% 50%);
  display: block;
  height: 200px;
  margin: 0 auto 60px;
  overflow: hidden;
  width: 200px;

  @media ${Breakpoints.medium} {
    height: 300px;
    margin: 0 auto;
    width: 300px;
  }


  ${
    props => props.isVisible && `
      animation-name: polygons;
      animation-fill-mode: forwards;
      animation-duration: 0.5s;
      animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    `
  }
  
  @keyframes polygons {
    0% {
      clip-path: circle(0% at 50% 50%);
    }
    100% {
      clip-path: circle(50% at 50% 50%);
    }
  }
`;

const About = ({ isVisible }) => 
  <Wrapper id="about">
    <Inner>
      <Avatar isVisible={isVisible}>
        <img src="https://www.placecage.com/300/300" />
      </Avatar>
      <Content isVisible={isVisible}>
        <H3>FILM NERD. MUSIC SNOB. GAME OF THRONES-ER.</H3>
        <H2>About Me</H2>
        <Text>
          <p>Senior Front End Developer at AmazeRealise.</p>
          <p>Esse reprehenderit enim adipisicing eiusmod Lorem ex nisi mollit elit adipisicing in tempor do enim. Deserunt irure elit officia consequat anim. Aliqua deserunt pariatur dolore id incididunt tempor aliquip eiusmod ut cillum ut eu eiusmod in. Irure anim tempor est ut aliquip consectetur deserunt anim magna adipisicing commodo aliqua id amet. Esse labore enim reprehenderit sint nostrud Lorem voluptate ullamco. Eu est sit mollit esse elit. Esse aliquip dolor aliquip Lorem consectetur sit amet non consectetur tempor.</p>
        </Text>
        {/* My currently preferred set-up is typically a MERN stack (MongoDB, Express, ReactJS + NodeJS), either using CSS Modules or the traditional BEM methodology, Sass pre-processor, the foundation grid and webpack */}
      </Content>
    </Inner>
  </Wrapper>
;

export default About;
