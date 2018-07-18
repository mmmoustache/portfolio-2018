import styled from "styled-components";
import { Colours } from '../../../utils/colours';
import { Timings, Durations } from '../../../utils/transitions';
import { Breakpoints } from '../../../utils/breakpoints';
import { convertRemToPixels as rem } from '../../../utils/utils';

export default styled.div`
  background: ${Colours.black};
  box-sizing: border-box;
  overflow: hidden;
  padding: ${rem('60px')} 0;
  position: relative;
  transition-delay: 1s;
  transition: background ${Durations.default} ${Timings.default};

  @media ${Breakpoints.medium} {
    height: 100vh;
  }

  ${
    props => props.isVisible && `
      background: ${Colours.secondary};
    `
  }

  ${
    props => props.isVisible && props.isOdd && `
      background: ${Colours.primary};
    `
  }
`;
