import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import H2 from '../H2';
import Button from '../Button';
import Text from "../Text";
import Content from "./Content";
import Wrapper from "./Wrapper";
import Inner from "./Inner";

const TextSection = ({ ctaLink, ctaText, data, isVisible }) => 
  <Wrapper>
    <Inner>
      <Content isVisible={isVisible}>
        <H2>{data.title}</H2>
        <Text>
          { 
            data.text && data.text.map(e => {
              const id = uuidv4();
              return <p key={id}>{e}</p>;
            })
          }
          {
            ctaLink && <p><Button href={ctaLink} title={ctaText}>{ctaText}</Button></p>
          }
        </Text>
      </Content>
    </Inner>
  </Wrapper>
;

TextSection.propTypes = {
  ctaLink: PropTypes.string,
  ctaText: PropTypes.string,
  data: PropTypes.object.isRequired,
  isVisible: PropTypes.bool,
};

TextSection.defaultProps = {
  ctaLink: undefined,
  ctaText: undefined,
  isVisible: false,
};

export default TextSection;
