import styled from "styled-components";
import { convertRemToPixels as rem } from '../../utils/utils';
import { Breakpoints } from '../../utils/breakpoints';

export default styled.h3`
  font-size: ${rem('18px')};
  text-transform: uppercase;

  ${ 
    props => props.noMargin ? `margin: 0;` : `margin: 0 0 ${rem('20px')};`
  }

  @media ${Breakpoints.medium} {
    font-size: ${rem('24px')};
  }
`;
