import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from '../Avatar';

describe('Component: Avatar', () => {

  it('Should render successfully', () => {
    const component = renderer.create(
      <Avatar />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});
