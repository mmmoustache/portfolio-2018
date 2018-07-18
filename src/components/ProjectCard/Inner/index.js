import styled from "styled-components";
import { Breakpoints } from '../../../utils/breakpoints';
import { Layouts } from '../../../utils/layouts';
import { convertRemToPixels as rem } from '../../../utils/utils';

export default styled.div`
  margin: 0 auto;
  max-width: ${Layouts.constraint};
  padding: ${rem('20px')};

  @media ${Breakpoints.medium} {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;
