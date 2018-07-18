import React from 'react';
import renderer from 'react-test-renderer';
import H3 from "../H3";

describe('Component: H3', () => {

  it('Should render successfully', () => {
    const component = renderer.create(
      <H3>Test</H3>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});
