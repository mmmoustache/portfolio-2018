import styled from "styled-components";

export default styled.div`
  background: black;
  height: 100vh;
  overflow: hidden;
  position: relative;
  transition-delay: 1s;
  transition: background 0.2s ease-in-out;
  
  ${
    props => props.isVisible && `
      background: #F25F5C;
    `
  }

  ${
    props => props.isVisible && props.isOdd && `
      background: #FCA311;
    `
  }
`;
