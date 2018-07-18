import React from 'react';
import renderer from 'react-test-renderer';
import ProjectCard from "../ProjectCard";

describe('Component: ProjectCard', () => {

  it('Should render successfully', () => {
    const component = renderer.create(
      <ProjectCard 
        title="Test" 
        description="Test"
        image_url="Test"
        technologies={[]} 
        url="Test" 
        repo="Test" 
        isVisible
        isOdd
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});
