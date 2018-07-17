import styled from "styled-components";

export default styled.div`
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
