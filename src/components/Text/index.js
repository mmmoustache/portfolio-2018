import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

const Text = ({ children }) => <Wrapper>{children}</Wrapper>;

Text.propTypes = {
  children: PropTypes.node,
};

Text.defaultProps = {
  children: undefined,
};

export default Text;
