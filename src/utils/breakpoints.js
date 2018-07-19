import { convertRemToPixels as rem } from './utils';

export const Breakpoints = {
  xsmall: `(min-width: ${rem('320px')})`,
  small: `(min-width: ${rem('480px')})`,
  medium: `(min-width: ${rem('768px')})`,
  large: `(min-width: ${rem('980px')})`,
};
