import React from 'react';
import styled from "styled-components";
import Button from "../Button";
import H2 from "../H2";
import H3 from "../H3";
import Text from "../Text";
import Inner from "./Inner";
import Wrapper from "./Wrapper";
import { Content, ContentInner } from "./Content";
import { Wrapper as BorderWrapper, Border1 as B1, Border2 as B2, Border3 as B3, Border4 as B4 } from "../Border";
import { Breakpoints } from '../../utils/breakpoints';

const Buttons = styled.div`
  display: flex;
  margin-top: 30px;
  flex-flow: wrap;

  & > *:last-child {
    margin-top: 20px;
  }

  @media ${Breakpoints.small} {
    flex-flow: initial;
    
    & > *:last-child {
      margin-left: 20px;
      margin-top: 0;
    }

  }
`;

const Figure = styled.div`
  height: 100%;
  width: 40%;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%); 
`;

const TechItem = styled.li`
  display: inline-block;
  margin-right: 15px;
`;

const Heading = H2.extend`
  width: 70%;
`;

const Subheading = H3.extend`
  margin: 0;
  
  @media ${Breakpoints.medium} {
    margin-bottom: 20px;
  }
`;

const TechWrapper = styled.ul`
  margin-bottom: 20px;
  
  @media ${Breakpoints.medium} {
    margin-bottom: 0;
  }
`;

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
                { technologies.map(e => <TechItem key={e}><Subheading>{e}</Subheading></TechItem>) }
              </TechWrapper>
          }
          <Heading>{title}</Heading>
          <Text>
            <p>{description}</p>
          </Text>
        </ContentInner>
        <Buttons>
          { url && <Button href={url}>View Site</Button> }
          { repo && <Button href={repo}>View Code</Button> }
        </Buttons>
      </Content>
    </Inner>
  </Wrapper>
;

export default ProjectCard;
