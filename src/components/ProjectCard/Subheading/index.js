import { convertRemToPixels as rem } from '../../../utils/utils';
import { Breakpoints } from '../../../utils/breakpoints';
import H3 from "../../H3";

export default H3.extend`
  margin: 0;
  
  @media ${Breakpoints.medium} {
    margin-bottom: ${rem('20px')};
  }
`;
