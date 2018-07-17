import styled from "styled-components";
import { Breakpoints } from '../../../utils/breakpoints';

export const Content = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  opacity: 0;
  transform: translateY(40px);
  transition: 0.5s opacity ease-in-out, 0.5s transform ease-in-out;
  transition-delay: 0.25s;

  @media ${Breakpoints.large} {
    width: 60%;
  }

  ${
    props => props.isVisible && `
      opacity: 1;
      transform: translateY(0);
    `
  }
`;

export const ContentInner = styled.div`
  color: white;
`;
