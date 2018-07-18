import React from 'react';
import renderer from 'react-test-renderer';
import ProjectList from "../ProjectList";

describe('Component: ProjectList', () => {

  it('Should render successfully', () => {
    const component = renderer.create(
      <ProjectList items={[]} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});
