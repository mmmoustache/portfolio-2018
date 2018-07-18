import React from 'react';
import PropTypes from 'prop-types';
import H3 from "../H3";
import Inner from "./Inner";
import Wrapper from "./Wrapper";

const Button = ({ href, children }) => 
  <Wrapper href={href}>
    <Inner>
      <H3 noMargin>{children}</H3>
    </Inner>
  </Wrapper>
;

Button.propTypes = {
  children: PropTypes.array,
  href: PropTypes.string,
};

Button.defaultProps = {
  children: undefined,
  href: undefined,
};

export default Button;
