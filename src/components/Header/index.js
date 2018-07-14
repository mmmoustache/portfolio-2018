import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  background: red;
  color: white;
`;

const Header = () => {
  return (
    <Wrapper>
      <span>Header</span>
    </Wrapper>
  )
};

export default Header;
