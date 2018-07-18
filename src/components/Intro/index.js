import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H1 from '../H1';
import H3 from '../H3';
import Wrapper from './Wrapper';
import { Navigation, NavigationItem as Link } from './Navigation';
import Footer from './Footer';
import TextWrapper from './TextWrapper';
import Inner from './Inner';
import { LinkedIn, Github } from './Link';
import { Wrapper as BorderWrapper, Border1 as B1, Border2 as B2, Border3 as B3, Border4 as B4 } from "../Border";
import { Timings } from "../../utils/transitions";
import { Breakpoints } from '../../utils/breakpoints';

const Subheading = styled.div`
  height: auto;
  margin: 0 0 15px;
  overflow: hidden;
  transition: height 0.375s ${Timings.default};

  @media ${Breakpoints.medium} {
    margin: 0;

    ${
      props => props.loaded ? `height: 40px;` : 'height: 0px;'
    }
  }
`;

const Intro = ({ loaded, navigation }) => (
  <Wrapper loaded={loaded}>
    <BorderWrapper>
      <B1 isVisible={loaded} altColour />
      <B2 isVisible={loaded} altColour />
      <B3 isVisible={loaded} altColour />
      <B4 isVisible={loaded} altColour />
    </BorderWrapper>
    <Navigation>
      { navigation && navigation.map(e => <Link key={e.id} href={e.href} download={e.id === 3} index={e.id} loaded={loaded}>{e.title}</Link>)}
    </Navigation>
    <Footer>
      <LinkedIn loaded={loaded} href="https://www.linkedin.com/in/jack-coventry-713a8811" title="View my LinkedIn Profile" target="_blank" rel="noopener noreferrer" />
      <Github loaded={loaded} href="https://github.com/mmmoustache" title="View my GitHub Profile" target="_blank" rel="noopener noreferrer" />
    </Footer>
    <Inner>
      <TextWrapper loaded={loaded}>
        <Subheading loaded={loaded}>
          <H3 noMargin>Front End Web Developer</H3>
        </Subheading>
        <H1>jack coventry</H1>
      </TextWrapper>
    </Inner>
  </Wrapper>
);

Intro.propTypes = {
  loaded: PropTypes.bool,
  navigation: PropTypes.array,
};

Intro.defaultProps = {
  loaded: false,
  navigation: undefined,
};

export default Intro;
