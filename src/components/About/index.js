import React from 'react';
import H2 from '../H2';
import H3 from '../H3';
import Text from "../Text";
import Avatar from "../Avatar";
import Content from "./Content";
import Wrapper from "./Wrapper";
import Inner from "./Inner";

const About = ({ data, isVisible }) => 
  <Wrapper id="about">
    <Inner>
      <Avatar isVisible={isVisible} />
      <Content isVisible={isVisible}>
        <H3>{data.subtitle}</H3>
        <H2>{data.title}</H2>
        <Text>{ data.text && data.text.map(e => <p>{e}</p>) }</Text>
      </Content>
    </Inner>
  </Wrapper>
;

export default About;
