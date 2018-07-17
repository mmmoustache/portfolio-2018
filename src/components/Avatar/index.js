import styled from "styled-components";
import { Breakpoints } from '../../utils/breakpoints';

const size = {
  small: '200px',
  large: '300px',
};

const easing = 'cubic-bezier(0.19, 1, 0.22, 1)';

export default styled.div`
  background-image: url("./me.jpg");
  background-position: center;
  background-size: 110%;
  clip-path: circle(0% at 50% 50%);
  display: block;
  height: ${size.small};
  margin: 0 auto 60px;
  overflow: hidden;
  width: ${size.small};

  @media ${Breakpoints.medium} {
    height: ${size.large};
    margin-bottom: 0;
    width: ${size.large};
  }

  ${
    props => props.isVisible && `
      animation-name: avatar;
      animation-fill-mode: forwards;
      animation-duration: 0.5s;
      animation-timing-function: ${easing};
    `
  }
  
  @keyframes avatar {
    0% {
      clip-path: circle(0% at 50% 50%);
    }
    100% {
      clip-path: circle(50% at 50% 50%);
    }
  }
`;
