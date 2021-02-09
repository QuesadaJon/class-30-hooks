import React from 'react';
import { render } from '@testing-library/react';
import Villager from './Villager';

describe('Villager component', () => {
  it('matches a snapshot', () => {
    const { asFragment } = render(<Villager
      name="Gunther"
      _id="5"
      image="http://image.com"
      quote="hello"
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});
