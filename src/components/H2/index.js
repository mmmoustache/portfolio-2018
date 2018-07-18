import styled from "styled-components";
import { convertRemToPixels as rem } from '../../utils/utils';

export default styled.h2`
  font-size: ${rem('60px')};
  letter-spacing: -${rem('3px')};
  margin: 0 0 20px;
`;
