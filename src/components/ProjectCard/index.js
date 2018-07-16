import React from 'react';
import styled from "styled-components";
import Button from "../Button";
import H2 from "../H2";
import H3 from "../H3";
import Text from "../Text";

const Wrapper = styled.div`
  background: black;
  height: 100vh;
  overflow: hidden;
  position: relative;
  transition-delay: 1s;
  transition: background 0.2s ease-in-out;
  
  ${
    props => props.isVisible && `
      background: #F25F5C;
    `
  }

  ${
    props => props.isVisible && props.isOdd && `
      background: #FCA311;
    `
  }
`;

const ShapeWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 400px;
  opacity: 0;
  transition: 0.5s opacity ease-in-out;
  transition-delay: 0.5s;

  ${
    props => props.isVisible && `
      opacity: 1;
    `
  }
`;

const Shape1 = styled.div`
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 400px;
  animation: polygons2 30s alternate infinite;
  clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
  opacity: 0.8;

  @keyframes polygons2 {
    25% {
      clip-path: polygon(8% 1%, 100% 8%, 91% 100%, 0 94%);
    }
    50% {
      clip-path: polygon(2% 0, 85% 7%, 90% 95%, 8% 89%);
    }
    75% {
      clip-path: polygon(8% 10%, 97% 2%, 100% 90%, 1% 100%);
    }
  }
`;

const Shape2 = styled.div`
  background: white;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 380px;
  height: 380px;
  animation: polygons3 28s reverse infinite;
  clip-path: polygon(2% 0, 85% 7%, 90% 95%, 8% 89%);
  opacity: 0.2;

  @keyframes polygons3 {
    25% {
      clip-path: polygon(8% 1%, 100% 8%, 91% 100%, 0 94%);
    }
    50% {
      clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
    }
    75% {
      clip-path: polygon(8% 10%, 97% 2%, 100% 90%, 1% 100%);
    }
  }
`;

const Inner = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
  position: relative;
  top: 50%;
  transform: translateY(-50%); 
`;

const TechList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 30px;

  & > *:last-child {
    margin-left: 20px;
  }
`;

const Figure = styled.div`
  width: 40%;
`;

const TechItem = styled.li`
  display: inline-block;
  margin-right: 15px;
`;

const Content = styled.div`
  display: block;
  position: relative;
  width: 110%;
  opacity: 0;
  transition: 0.5s opacity ease-in-out;
  transition-delay: 0.25s;

  &::after {
    border: 10px solid black;
    content: '';
    height: 100%;
    width: 60%;
    top: -50px;
    right: -30px;
    position: absolute;
    z-index: -1;
  }

  ${
    props => props.isVisible && `
      opacity: 1;
    `
  }
`;

const ContentInner = styled.div`
  mix-blend-mode: difference;
  color: white;
`;

const Heading = H2.extend`
  width: 70%;
`;

const ProjectCard = ({ title, description, image_url, technologies, url, repo, isVisible, isOdd }) => 
  <Wrapper isVisible={isVisible} image={image_url} isOdd={isOdd}>
    <Inner>
      <Figure>
        <ShapeWrapper isVisible={isVisible}>
          <Shape1 />
          <Shape2 />
        </ShapeWrapper>
      </Figure>
      <Content isVisible={isVisible}>
        <ContentInner>
          {
            technologies &&
              <TechList>
                { technologies.map(e => <TechItem key={e}><H3>{e}</H3></TechItem>) }
              </TechList>
          }
          <Heading>{title}</Heading>
          <Text>
            <p>{description}</p>
          </Text>
        </ContentInner>
        <Buttons>
          { url && <Button href={url}>View Site</Button> }
          { repo && <Button href={repo}>Code</Button> }
        </Buttons>
      </Content>
    </Inner>
  </Wrapper>
;

export default ProjectCard;
