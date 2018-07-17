import React from 'react';
import styled from "styled-components";
import Card from "../ProjectCard";
import TrackVisibility from 'react-on-screen';

const offset = -300;

const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ProjectList = ({ items }) => {
  return (
    <Wrapper id="work">
      { 
        items && items.map((e, i) => 
          <li key={e.id}>
            <TrackVisibility offset={offset} partialVisibility once>
              {({ isVisible }) => 
                <Card
                  title={e.title}
                  description={e.description}
                  image_url={e.image_url}
                  technologies={e.technologies}
                  url={e.url}
                  repo={e.repo}
                  isVisible={isVisible}
                  isOdd={i % 2 === 0}
                />
              }   
            </TrackVisibility>            
          </li>
        )
      }
    </Wrapper>
  )
};

export default ProjectList;
