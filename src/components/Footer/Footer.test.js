import React from 'react';
import renderer from 'react-test-renderer';
import Footer from "../Footer";

describe('Component: Footer', () => {

  it('Should render successfully', () => {
    const component = renderer.create(
      <Footer>Test</Footer>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});
