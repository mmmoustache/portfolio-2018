import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;

  p {
    line-height: 1.6;
    margin: 0 0 20px;

    &:last-child {
      margin: 0;
    }
  }
`;

const Text = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Text;
