import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text Component', () => {
  test('is component visible?', () => {
    render(
      <Text
        content="Test content"
      />
    );

    const textElement = screen.getByText("Test content");
    expect(textElement).toBeVisible();
  });

  test('background color changes when disabled', () => {
    render(
      <Text
        content="Test content"
        disabled={true}
      />
    );

    const textElement = screen.getByText("Test content");
    expect(textElement).toHaveStyle('color: grey');
  });
});
