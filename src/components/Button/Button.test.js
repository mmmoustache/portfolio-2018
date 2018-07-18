import React from 'react';
import renderer from 'react-test-renderer';
import Button from "../Button";

describe('Component: Button', () => {

  it('Should render successfully', () => {
    const component = renderer.create(
      <Button href="/">Test</Button>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});
