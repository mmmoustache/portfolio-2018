import React from 'react';
import renderer from 'react-test-renderer';
import { Wrapper as BorderWrapper, Border1 as B1, Border2 as B2, Border3 as B3, Border4 as B4 } from "../Border";

describe('Component: Border', () => {

  it('Should render successfully', () => {
    const component = renderer.create(
      <BorderWrapper>
        <B1 />
        <B2 />
        <B3 />
        <B4 />
      </BorderWrapper>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});
