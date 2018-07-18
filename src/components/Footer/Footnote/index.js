import styled from "styled-components";
import { Colours } from '../../../utils/colours';
import { Timings, Durations } from '../../../utils/transitions';
import { Border as BorderSettings } from '../../../utils/layouts';

const Padding = '20px';
const Layout = '-5px';
const LinkSpacing = '40px';

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
    
    &:focus,
    &:hover {
      &::before {
        width: 100%;
      }
    }

    &:last-child {
      margin-left: ${LinkSpacing};
    }
  }
`;
