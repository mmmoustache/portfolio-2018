import styled from "styled-components";
import { Colours } from '../../utils/colours';
import { Timings } from '../../utils/transitions';
import { Border as BorderSettings } from '../../utils/layouts';
import { Breakpoints } from '../../utils/breakpoints';

const WrapperSize = '50vh';
const Transition = '0.2s';

export const Wrapper = styled.div`
  display: none;

  @media ${Breakpoints.medium} {
    display: block;
    height: ${WrapperSize};
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${WrapperSize};
    z-index: 0;
  }
`;

const Border = styled.div`
  background: ${Colours.black};
  position: absolute;

  ${
    props => props.altColour && `
      background: ${Colours.white};
    `
  }
`;

export const Border1 = Border.extend`
  height: ${BorderSettings.size};
  left: 0;
  top: 0;
  transition: width ${Transition} ${Timings.default};
  transition-delay: ${Transition};
  width: 0%;

  ${
    props => props.isVisible && `
      width: 100%;
    `
  }
`;

export const Border2 = Border.extend`
  height: 0%;
  right: 0;
  top: 0;
  transition: height  ${Transition} ${Timings.default};
  transition-delay: calc(${Transition}*2);
  width: ${BorderSettings.size};

  ${
    props => props.isVisible && `
      height: 100%;
    `
  }
`;

export const Border3 = Border1.extend`
  left: auto;
  right: 0;
  top: calc(100% - ${BorderSettings.size});
  transition-delay: calc(${Transition}*3);
`;

export const Border4 = Border2.extend`
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  transition-delay: calc(${Transition}*4);
`;
