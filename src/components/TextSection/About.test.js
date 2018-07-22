import React from 'react';
import renderer from 'react-test-renderer';
import About from '../About';

describe('Component: About', () => {

  it('Should render successfully', () => {
    const component = renderer.create(
      <About data={{}} isVisible />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});
