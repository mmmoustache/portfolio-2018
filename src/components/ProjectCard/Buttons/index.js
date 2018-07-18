import styled from "styled-components";
import { Breakpoints } from '../../../utils/breakpoints';
import { convertRemToPixels as rem } from '../../../utils/utils';

export default styled.div`
  display: flex;
  margin-top: ${rem('30px')};
  flex-flow: wrap;

  & > *:last-child {
    margin-top: ${rem('20px')};
  }

  @media ${Breakpoints.small} {
    flex-flow: initial;
    
    & > *:last-child {
      margin-left: ${rem('20px')};
      margin-top: 0;
    }

  }
`;