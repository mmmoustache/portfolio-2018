import styled from "styled-components";
import { Colours } from '../../utils/colours';
import { convertRemToPixels as rem } from '../../utils/utils';

const initHeight = `${rem('1px')}`;
const offset = `-${rem('9999px')}`;

export default styled.a`
  bottom: auto;
  color: ${Colours.white};
  height: ${initHeight};
  left: ${offset};
  overflow: hidden;
  position: fixed;
  width: ${initHeight};
  z-index: 100;

  &:focus {
    background: ${Colours.primary};
    height: auto;
    left: 0;
    padding: ${rem('10px')};
    position: absolute;
    text-align: center;
    text-decoration: none;
    top: 0;
    width: auto;
  }
`;
