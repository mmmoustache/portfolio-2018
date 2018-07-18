import styled from "styled-components";
import { Breakpoints } from '../../../utils/breakpoints';
import { Timings, Durations } from '../../../utils/transitions';

const Medium = {
  paddingLeft: '60px',
  widthOffset: '360px',
};

export default styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition-delay: ${Durations.slow};
  transition: opacity ${Durations.default} ${Timings.default}, transform ${Durations.default} ${Timings.default};
  
  @media ${Breakpoints.medium} {
    padding-left: ${Medium.paddingLeft};
    width: calc(100% - ${Medium.widthOffset});
  }

  ${
    props => props.isVisible && `
      opacity: 1;
      transform: translateY(0);
    `
  }
`;
