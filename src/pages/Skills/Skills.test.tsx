import { render } from '@testing-library/react';
import React from 'react';
import Skills from './Skills';

describe('Skills component', () => {
  test('renders without crashing', () => {
    render(<Skills />);

    // Basic placeholder assertion
    expect(true).toBe(true);
  });
});
