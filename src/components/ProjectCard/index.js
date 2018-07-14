import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid grey;
`;

const ProjectCard = ({ title, description, image_url, technologies }) => 
  <Wrapper>
    <h2>{title}</h2>
    <h3>{description}</h3>
    <img src={image_url} title={title} />
    {
      technologies &&
        <ul>
          { technologies.map(e => <li>{e}</li>) }
        </ul>
    }
  </Wrapper>
;

export default ProjectCard;
