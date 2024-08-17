import { render } from '@testing-library/react';
import React from 'react';
import BasicInformation from './BasicInformation';

describe('BasicInformation component', () => {
  test('renders without crashing', () => {
    render(<BasicInformation />);

    // Basic placeholder assertion
    expect(true).toBe(true);
  });
});
