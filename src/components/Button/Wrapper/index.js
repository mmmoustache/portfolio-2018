import styled from "styled-components";
import { Breakpoints } from '../../../utils/breakpoints';
import { Colours } from '../../../utils/colours';
import { Timings, Durations } from '../../../utils/transitions';
import { Border as BorderSettings } from '../../../utils/layouts';

const Small = {
  width: '200px',
};

const BorderPadding = '30px';
const Offset = '120%';
const BackgroundSkew = '-25deg';

export default styled.a`
  background: ${Colours.white};
  border: ${BorderSettings.size} solid ${Colours.black};
  color: ${Colours.black};
  display: block;
  overflow: hidden;
  padding: ${BorderPadding};
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;

  @media ${Breakpoints.small} {
    width: ${Small.width};
  }

  &::after,
  &::before {
    background: ${Colours.primary};
    content: '';
    display: block;
    height: 100%;
    left: -${Offset};
    position: absolute;
    top: 0;
    transform: skew(${BackgroundSkew});
    transition: ${Durations.slow} all ${Timings.default};
    width: 100%;
  }

  &::before {
    background: ${Colours.secondary};
    transition-delay: 0.1s;
  }

  &:focus,
  &:hover {
    background: ${Colours.black};
    color: ${Colours.white};

    &::after,
    &::before {
      left: ${Offset};
    }
  }
`;
