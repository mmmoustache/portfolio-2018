import styled from "styled-components";
import { convertRemToPixels as rem } from '../../../utils/utils';
import { Breakpoints } from '../../../utils/breakpoints';

export default styled.ul`
  margin-bottom: ${rem('20px')};

  @media ${Breakpoints.medium} {
    margin-bottom: 0;
  }
`;
