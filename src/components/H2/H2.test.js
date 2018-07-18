import React from 'react';
import renderer from 'react-test-renderer';
import H2 from "../H2";

describe('Component: H2', () => {

  it('Should render successfully', () => {
    const component = renderer.create(
      <H2>Test</H2>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});
