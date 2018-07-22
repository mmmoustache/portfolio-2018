import React from 'react';
import PropTypes from 'prop-types';
import Button from "../Button";
import Text from "../Text";
import Inner from "./Inner";
import Wrapper from "./Wrapper";
import Buttons from "./Buttons";
import TechItem from "./TechItem";
import TechWrapper from "./TechWrapper";
import Subheading from "./Subheading";
import Heading from "./Heading";
import { Content, ContentInner } from "./Content";
import { Wrapper as BorderWrapper, Border1 as B1, Border2 as B2, Border3 as B3, Border4 as B4 } from "../Border";

const ProjectCard = ({ title, description, image_url, technologies, url, repo, isVisible, isOdd }) => 
  <Wrapper isVisible={isVisible} image={image_url} isOdd={isOdd}>
    <BorderWrapper>
      <B1 isVisible={isVisible} />
      <B2 isVisible={isVisible} />
      <B3 isVisible={isVisible} />
      <B4 isVisible={isVisible} />
    </BorderWrapper>
    <Inner>
      <Content isVisible={isVisible}>
        <ContentInner>
          {
            technologies &&
              <TechWrapper>
                { technologies.map(e => <TechItem key={e}><Subheading>{e}.</Subheading></TechItem>) }
              </TechWrapper>
          }
          {
            title && <Heading>{title}</Heading>
          }
          {
            description && 
              <Text>
                <p>{description}</p>
              </Text>
          }
        </ContentInner>
        <Buttons multiple={url && repo}>
          { url && <Button href={url}>View Site</Button> }
          { repo && <Button href={repo}>View Code</Button> }
        </Buttons>
      </Content>
    </Inner>
  </Wrapper>
;

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image_url: PropTypes.string,
  technologies: PropTypes.array,
  url: PropTypes.string,
  repo: PropTypes.string,
  isVisible: PropTypes.bool,
  isOdd: PropTypes.bool,
};

ProjectCard.defaultProps = {
  title: undefined,
  description: undefined,
  image_url: undefined,
  technologies: undefined,
  url: undefined,
  repo: undefined,
  isVisible: false,
  isOdd: false,
};

export default ProjectCard;
