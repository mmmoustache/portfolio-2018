import styled from "styled-components";
import { isBrowser } from 'react-device-detect';
import { Colours } from '../../../utils/colours';
import { Timings, Durations } from '../../../utils/transitions';
import { convertRemToPixels as rem } from '../../../utils/utils';

const Height = `${rem('80px')}`;
const IconSize = `${rem('50px')}`;

const Link = styled.a`
  background: ${Colours.grey};
  display: block;
  height: ${Height};
  position: relative;
  transition: ${Durations.default} background ${Timings.default};
  width: 100%;

  &::before {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    content: '';
    display: block;
    height: ${IconSize};
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${IconSize};
  }
`;

export const Github = Link.extend`
  &::before {
    background-image: url('./github.svg');
  }

  ${
    isBrowser && `
      &:focus,
      &:hover {
        background: ${Colours.gitHub};
      }    
    `
  }
`;

export const LinkedIn = Link.extend`
  &::before {
    background-image: url('./linkedin.svg');
  }

  ${
    isBrowser && `
      &:focus,
      &:hover {
        background: ${Colours.linkedIn};
      }    
    `
  }
`;

export const Links = styled.div`
  display: flex;
`;
