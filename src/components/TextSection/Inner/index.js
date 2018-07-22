import styled from "styled-components";
import { Layouts } from '../../../utils/layouts';
import { convertRemToPixels as rem } from '../../../utils/utils';

export default styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${Layouts.constraint};
  padding: ${rem('80px')} ${rem('20px')};
`;
