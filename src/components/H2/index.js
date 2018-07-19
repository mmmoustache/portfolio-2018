import styled from "styled-components";
import { convertRemToPixels as rem } from '../../utils/utils';
import { Breakpoints } from '../../utils/breakpoints';

const marginBottom = `${rem('20px')}`;

export default styled.h2`
  font-size: ${rem('40px')};
  letter-spacing: -${rem('2px')};
  margin: 0 0 ${marginBottom};

  @media ${Breakpoints.medium} {
    font-size: ${rem('60px')};
    letter-spacing: -${rem('3px')};
  }
`;
