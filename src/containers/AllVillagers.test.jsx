import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AllVillagers from './AllVillagers';
import { MemoryRouter } from 'react-router-dom';

describe('AllVillagers container', () => {
  it('displays a loading screen then a list of Villagers', async() => {
    render(
      <MemoryRouter>
        <AllVillagers />
      </MemoryRouter>);

    screen.getByText('Loading...');

    const ul = await screen.findByTestId('villagers');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
})
;
