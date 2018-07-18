import styled from "styled-components";
import { Breakpoints } from '../../../utils/breakpoints';
import { Colours } from '../../../utils/colours';
import { Timings, Durations } from '../../../utils/transitions';
import { convertRemToPixels as rem } from '../../../utils/utils';

const ContentOffset = rem('40px');

export const Content = styled.div`
  display: inline-block;
  opacity: 0;
  position: relative;
  transform: translateY(${ContentOffset});
  transition:  opacity ${Durations.default} ${Timings.default}, transform ${Durations.default} ${Timings.default};
  transition-delay: ${Durations.fast};
  width: 100%;

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
  color: ${Colours.white};
`;
