import styled from "styled-components";
import { convertRemToPixels as rem } from '../../utils/utils';
import { Breakpoints } from '../../utils/breakpoints';

export default styled.h1`
  font-size: ${rem('60px')};
  letter-spacing: -${rem('3px')};
  line-height: ${rem('60px')};
  margin: 0;

  @media ${Breakpoints.medium} {
    font-size: ${rem('120px')};
    letter-spacing: -${rem('5px')};
    line-height: ${rem('120px')};
  }
`;
