import React from 'react';
import PropTypes from 'prop-types';
import Card from "../ProjectCard";
import TrackVisibility from 'react-on-screen';

const offset = -300;

const ProjectList = ({ items }) => {
  return (
    <ul id="work">
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
    </ul>
  )
};

ProjectList.propTypes = {
  items: PropTypes.array,
};

ProjectList.defaultProps = {
  items: undefined,
};

export default ProjectList;
