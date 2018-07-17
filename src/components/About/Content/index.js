import styled from "styled-components";
import { Breakpoints } from '../../../utils/breakpoints';

export default styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition-delay: 1s;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  
  @media ${Breakpoints.medium} {
    padding-left: 60px;
    width: calc(100% - 360px);
  }

  ${
    props => props.isVisible && `
      opacity: 1;
      transform: translateY(0);
    `
  }
`;
