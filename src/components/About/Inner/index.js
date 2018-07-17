import styled from "styled-components";
import { Breakpoints } from '../../../utils/breakpoints';

export default styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1200px;
  padding: 80px 20px;
  
  @media ${Breakpoints.medium} {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;
