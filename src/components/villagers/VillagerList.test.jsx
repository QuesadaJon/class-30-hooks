import React from 'react';
import { render } from '@testing-library/react';
import VillagerList from './VillagerList';

const villagers = [
  {
    _id: '1',
    image: 'https://image.com',
    name: 'name',
    quote: 'quote'
  },
  {
    _id: '3',
    image: 'https://image.com',
    name: 'name',
    quote: 'quote'
  },
  {
    _id: '2',
    image: 'https://image.com',
    name: 'name',
    quote: 'quote'
  }
];

describe('VillagerList component', () => {
  it('matches a snapshot', () => {
    const { asFragment } = render(<
      VillagerList
      villagers={villagers}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});
