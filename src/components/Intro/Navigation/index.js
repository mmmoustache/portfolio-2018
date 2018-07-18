import styled from "styled-components";
import { Colours } from '../../../utils/colours';
import { Timings, Durations } from '../../../utils/transitions';
import { Border as BorderSettings } from '../../../utils/layouts';
import { convertRemToPixels as rem } from '../../../utils/utils';

const NavOffset = rem('40px');

export const Navigation = styled.div`
  position: absolute;
  right: ${NavOffset};
  top: ${NavOffset};
  z-index: 2;
`;

export const NavigationItem = styled.a`
  color: ${Colours.white};
  display: inline-block;
  font-weight: bold;
  opacity: 0;
  margin: 10px 20px;
  position: relative;
  text-decoration: none;
  transform: translateY(-10px);
  transition: opacity ${Durations.fast} ${Timings.default}, transform ${Durations.fast} ${Timings.default};

  ${
    props => props.loaded && `
      opacity: 1;
      transform: translateY(0);
    `
  }

  ${
    props => props.index && `
      transition-delay: ${props.index*0.125}s;
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

  &:focus,
  &:hover {
    &::before {
      width: 100%;
    }
  }
`;
