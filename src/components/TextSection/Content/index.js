import styled from "styled-components";
import { Timings, Durations } from '../../../utils/transitions';
import { convertRemToPixels as rem } from '../../../utils/utils';

const offset = `${rem('20px')}`;

export default styled.div`
  opacity: 0;
  transform: translateY(${offset});
  transition-delay: ${Durations.slow};
  transition: opacity ${Durations.default} ${Timings.default}, transform ${Durations.default} ${Timings.default};

  ${
    props => props.isVisible && `
      opacity: 1;
      transform: translateY(0);
    `
  }
`;
