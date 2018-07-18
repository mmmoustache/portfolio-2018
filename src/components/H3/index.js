import styled from "styled-components";
import { convertRemToPixels as rem } from '../../utils/utils';

export default styled.h3`
  font-size: ${rem('24px')};
  text-transform: uppercase;

  ${ 
    props => props.noMargin ? `margin: 0;` : `margin: 0 0 20px;`
  }
`;
