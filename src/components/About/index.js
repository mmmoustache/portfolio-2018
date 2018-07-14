import React from 'react';
import styled from "styled-components";
import H2 from '../H2';
import H3 from '../H3';

const Wrapper = styled.div`
  width: 100%;
`;

const About = () => 
  <Wrapper>
    <H2>FILM NERD. MUSIC SNOB. GAME OF THRONES-ER.</H2>
    <H3>About Me</H3>
    <p>Senior Front End Developer at AmazeRealise.</p>
    {/* My currently preferred set-up is typically a MERN stack (MongoDB, Express, ReactJS + NodeJS), either using CSS Modules or the traditional BEM methodology, Sass pre-processor, the foundation grid and webpack */}
  </Wrapper>
;

export default About;
