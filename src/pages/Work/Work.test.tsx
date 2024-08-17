import { render } from '@testing-library/react';
import React from 'react';
import Work from './Work';

describe('Work component', () => {
  test('renders without crashing', () => {
    render(<Work />);

    // Basic placeholder assertion
    expect(true).toBe(true);
  });
});
