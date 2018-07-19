import styled from "styled-components";
import { isBrowser } from 'react-device-detect';
import { Colours } from '../../../utils/colours';
import { Timings, Durations } from '../../../utils/transitions';
import { Border as BorderSettings } from '../../../utils/layouts';
import { convertRemToPixels as rem } from '../../../utils/utils';
import { Breakpoints } from '../../../utils/breakpoints';

const NavOffset = rem('40px');

export const Navigation = styled.div`
  position: absolute;
  right: 0;
  text-align: center;
  top: ${NavOffset};
  width: 100%;
  z-index: 2;

  
  @media ${Breakpoints.small} {
    right: ${NavOffset};
    text-align: left;
    width: auto;
  }

`;

export const NavigationItem = styled.a`
  color: ${Colours.white};
  display: inline-block;
  font-weight: bold;
  opacity: 0;
  margin: ${rem('10px')} ${rem('20px')};
  position: relative;
  text-decoration: none;
  transform: translateY(-${rem('10px')});
  transition: opacity ${Durations.fast} ${Timings.default}, transform ${Durations.fast} ${Timings.default};

  ${
    props => props.loaded && `
      opacity: 1;
      transform: translateY(0);
    `
  }

  ${
    props => props.index && `
      transition-delay: ${(props.index/2)*0.125}s;
    `
  }

  &::before {
    background: ${Colours.primary};
    bottom: -${rem('5px')};
    content: '';
    display: block;
    height: ${BorderSettings.size};
    left: 0;
    position: absolute;
    transition: width ${Durations.ultrafast} ${Timings.default};
    width: 0;
    z-index: 1;
  }

  ${
    isBrowser && `
      &:focus,
      &:hover {
        &::before {
          width: 100%;
        }
      }    
    `
  }
`;
