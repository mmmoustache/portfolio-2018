import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  height: 50vh;
  width: 50vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

const Border = styled.div`
  background: #000;
  position: absolute;

  ${
    props => props.altColour && `
      background: #fff;
    `
  }
`;

export const Border1 = Border.extend`
  top: 0;
  height: 3px;
  width: 0%;
  left: 0;
  transition: width 0.2s ease-in-out;
  transition-delay: 0.2s;

  ${
    props => props.isVisible && `
      width: 100%;
    `
  }
`;

export const Border2 = Border.extend`
  top: 0;
  height: 0%;
  width: 3px;
  right: 0;
  transition: height 0.2s ease-in-out;
  transition-delay: 0.4s;

  ${
    props => props.isVisible && `
      height: 100%;
    `
  }
`;

export const Border3 = Border1.extend`
  left: auto;
  right: 0;
  top: calc(100% - 3px);
  transition-delay: 0.6s;
`;

export const Border4 = Border2.extend`
  right: auto;
  left: 0;
  top: auto;
  bottom: 0;
  transition-delay: 0.8s;
`;
