import styled from "styled-components";
import { Timings } from '../../../utils/transitions';
import { convertRemToPixels as rem } from '../../../utils/utils';
import { Breakpoints } from '../../../utils/breakpoints';

export default styled.div`
  height: auto;
  margin: 0 0 ${rem('15px')};
  overflow: hidden;
  transition: height 0.375s ${Timings.default};

  @media ${Breakpoints.medium} {
    margin: 0;

    ${
      props => props.loaded ? `height: ${rem('40px')};` : 'height: 0px;'
    }
  }
`;
