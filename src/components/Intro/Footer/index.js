import styled from "styled-components";
import { convertRemToPixels as rem } from '../../../utils/utils';

const offset = rem('40px');

export default styled.div`
  bottom: ${offset};
  display: flex;
  position: absolute;
  right: ${offset};
  z-index: 2;
`;
