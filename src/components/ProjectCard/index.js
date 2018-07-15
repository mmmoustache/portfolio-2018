import React from 'react';
import styled from "styled-components";
import Button from "../Button";
import H2 from "../H2";
import H3 from "../H3";
import Text from "../Text";

const Wrapper = styled.div`
  background-position: center;
  background-size: cover;

  /* background-image: ${ props => props.image && `url(${props.image})` };*/
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

const Figure = styled.div`
  width: 40%;
`;

const TechItem = styled.li`
  display: inline-block;
`;

const Content = styled.div`
  background: #fff;
  display: block;
  position: relative;
  width: 60%;

  &::after {
    border: 10px solid red;
    content: '';
    height: 100%;
    width: 60%;
    top: -50px;
    right: -30px;
    position: absolute;
    z-index: -1;
  }
`;

const ProjectCard = ({ title, description, image_url, technologies, url, repo }) => 
  <Wrapper image={image_url}>
    {
      technologies &&
        <TechList>
          { technologies.map(e => <TechItem key={e}><H3>{e}</H3></TechItem>) }
        </TechList>
    }

    <H2>{title}</H2>
    <Text>
      <p>{description}</p>
    </Text>
    { url && <Button href={url}>View Site</Button> }
    { repo && <Button href={repo}>Code</Button> }
  </Wrapper>
;

export default ProjectCard;
