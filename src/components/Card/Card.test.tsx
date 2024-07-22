import { render, screen } from '@testing-library/react';
import Card from './Card';
import React from 'react';

describe('Card component', () => {
  test('is component visible?', () => {
    render(
      <Card
        title="Test Card"
        description="Test Description"
        imageurl="https://example.com/image.jpg"
        disabled
        testId="test-card"
      />
    );
    const cardContainer = screen.getByTestId('test-card');
    expect(cardContainer).toBeVisible();
  });

  test('background color changes when disabled', () => {
    render(
      <Card
        title="Test Card"
        description="Test Description"
        imageurl="https://example.com/image.jpg"
        disabled = {true}
        testId="test-card"
      />
    );

    const cardContainer = screen.getByTestId('test-card');
    expect(cardContainer).toHaveStyle('background-color: grey');
  });
});
