import styled from "styled-components";

export default styled.h3`
  font-size: 24px;
  text-transform: uppercase;

  ${
    props => props.noMargin ? 
    `
      margin: 0;
    `
    : 
    `
      margin: 0 0 20px;
    `
  }
`;
