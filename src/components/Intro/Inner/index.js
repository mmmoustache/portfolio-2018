import styled from "styled-components";
import { convertRemToPixels as rem } from '../../../utils/utils';
import { Colours } from '../../../utils/colours';
import { Layouts } from '../../../utils/layouts';

export default styled.div`
  color: ${Colours.white};
  margin: 0 auto;
  max-width: ${Layouts.constraint};
  padding: ${rem('20px')};
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
`;

