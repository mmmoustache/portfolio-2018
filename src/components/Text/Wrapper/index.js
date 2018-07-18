import styled from "styled-components";
import { convertRemToPixels as rem } from '../../../utils/utils';

export default styled.div`
  width: 100%;

  p {
    line-height: 1.6;
    margin: 0 0 ${rem('20px')};

    &:last-child {
      margin: 0;
    }
  }
`;
