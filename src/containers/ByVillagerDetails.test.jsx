import React from 'react';	
import { render } from '@testing-library/react';	
import ByVillagerDetails from './ByVillagerDetails';	
import { MemoryRouter } from 'react-router-dom';	

describe('ByVillagerDetails component', () => {	
  it('matches a snapshot', () => {	
    const { asFragment } = render(	
      <MemoryRouter>	
        <ByVillagerDetails />	
      </MemoryRouter>	
    );	
    expect(asFragment()).toMatchSnapshot();	
  });	
});
