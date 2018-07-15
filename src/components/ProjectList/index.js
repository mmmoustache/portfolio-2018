import React from 'react';
import styled from "styled-components";
import Card from "../ProjectCard";

const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ProjectList = ({ items }) => {
  console.log(items);
  return (
    <Wrapper>
      { 
        items && items.map(e => 
          <li key={e.id}>
            <Card
              title={e.title}
              description={e.description}
              image_url={e.image_url}
              technologies={e.technologies}
              url={e.url}
              repo={e.repo}
            />
          </li>
        )
      }
    </Wrapper>
  )
};

export default ProjectList;
