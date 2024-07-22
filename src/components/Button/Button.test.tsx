import { render, screen } from '@testing-library/react';
import Button from './Button';
import React from 'react';

describe('Button component', () => {
  test('is component visible?', () => {
    render(<Button label="Test Button" />);

    const buttonElement = screen.getByText('Test Button');

    expect(buttonElement).toBeVisible();
  });

  test('background color changes when disabled', () => {
    render(<Button label="Test Button" disabled />);

    const buttonElement = screen.getByText('Test Button');

    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveStyle('background-color: grey');
  });
});
