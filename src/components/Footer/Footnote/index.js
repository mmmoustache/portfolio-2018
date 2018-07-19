import styled from "styled-components";
import { isBrowser } from 'react-device-detect';
import { Colours } from '../../../utils/colours';
import { Timings, Durations } from '../../../utils/transitions';
import { Border as BorderSettings } from '../../../utils/layouts';
import { convertRemToPixels as rem } from '../../../utils/utils';

const Padding = `${rem('20px')}`;
const Layout = `-${rem('5px')}`;
const LinkSpacing = `${rem('40px')}`;

export default styled.div`
  padding: ${Padding};
  text-align: center;

  a {
    color: ${Colours.white};
    display: inline-block;
    font-weight: bold;
    position: relative;
    text-decoration: none;

    &::before {
      background: ${Colours.primary};
      bottom: ${Layout};
      content: '';
      display: block;
      height: ${BorderSettings.size};
      left: 0;
      position: absolute;
      transition: width ${Durations.ultrafast} ${Timings.default};
      width: 0;
      z-index: 1;
    }
    
    ${
      isBrowser && `
        &:focus,
        &:hover {
          &::before {
            width: 100%;
          }
        }
      
      `
    }

    &:last-child {
      margin-left: ${LinkSpacing};
    }
  }
`;
