import styled from "styled-components";
import { Breakpoints } from '../../../utils/breakpoints';
import { Layouts } from '../../../utils/layouts';
import { convertRemToPixels as rem } from '../../../utils/utils';

export default styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${Layouts.constraint};
  padding: ${rem('80px')} ${rem('20px')};
  
  @media ${Breakpoints.medium} {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;
