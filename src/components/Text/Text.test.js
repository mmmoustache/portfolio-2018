import React from 'react';
import renderer from 'react-test-renderer';
import Text from "../Text";

describe('Component: Text', () => {

  it('Should render successfully', () => {
    const component = renderer.create(
      <Text>Test</Text>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});
