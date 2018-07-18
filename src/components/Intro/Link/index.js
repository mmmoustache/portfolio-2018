import styled from "styled-components";
import { Timings, Durations } from '../../../utils/transitions';
import { convertRemToPixels as rem } from '../../../utils/utils';

const LinkSize = rem('40px');
const LinkOffset = rem('10px');
const LinkSpacing = rem('20px');

const Link = styled.a`
  display: block;
  height: ${LinkSize};
  margin-left: ${LinkSpacing};
  opacity: 0;
  position: relative;
  text-decoration: none;
  transform: translateY(${LinkOffset});
  transition: opacity ${Durations.fast} ${Timings.default}, transform ${Durations.fast} ${Timings.default};
  width: ${LinkSize};

  &:hover {
    opacity: 0.7;
    transition-delay: 0s;
  }
  
  ${
    props => props.loaded && `
      opacity: 1;
      transform: translateY(0);
    `
  }

  &::before {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    display: block;
    height: ${LinkSize};
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${LinkSize};
  }
`;

export const Github = Link.extend`
  transition-delay: ${1*0.125}s;

  &::before {
    background-image: url('./github.svg');
  }
`;

export const LinkedIn = Link.extend`
  transition-delay: ${2*0.125}s;

  &::before {
    background-image: url('./linkedin.svg');
  }
`;
