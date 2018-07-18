import React from 'react';
import renderer from 'react-test-renderer';
import Intro from "../Intro";

describe('Component: Intro', () => {

  it('Should render successfully', () => {
    const component = renderer.create(
      <Intro loaded navigation={[]} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});
