import React from 'react';
import PropTypes from 'prop-types';
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
        <Text>{ data.text && data.text.map(e => <p key={e.text}>{e}</p>) }</Text>
      </Content>
    </Inner>
  </Wrapper>
;

About.propTypes = {
  data: PropTypes.object.isRequired,
  isVisible: PropTypes.bool,
};

About.defaultProps = {
  isVisible: false,
};

export default About;
