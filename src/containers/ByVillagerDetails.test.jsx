import React from 'react';
import { render } from '@testing-library/react';
import ByVillagerDetails from './ByVillagerDetails';
import { Router } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ _id: '5' }),
}));

describe('ByVillagerDetails component', () => {
  it('matches a snapshot', () => {
    const { asFragment } = render(
      <Router>
        <ByVillagerDetails />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
