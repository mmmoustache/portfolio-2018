import styled from "styled-components";
import { Breakpoints } from '../../../utils/breakpoints';
import { Layouts } from '../../../utils/layouts';

export default styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${Layouts.constraint};
  padding: 80px 20px;
  
  @media ${Breakpoints.medium} {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;
