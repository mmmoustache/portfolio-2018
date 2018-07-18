import styled from "styled-components";
import { convertRemToPixels as rem } from '../../utils/utils';

export default styled.h1`
  font-size: ${rem('120px')};
  letter-spacing: -${rem('9px')};
  line-height: ${rem('120px')};
  margin: 0;
`;
