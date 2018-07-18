import React from 'react';
import renderer from 'react-test-renderer';
import H1 from "../H1";

describe('Component: H1', () => {

  it('Should render successfully', () => {
    const component = renderer.create(
      <H1>Test</H1>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});
