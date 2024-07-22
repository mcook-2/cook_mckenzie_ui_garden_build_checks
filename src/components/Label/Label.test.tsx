import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label Component', () => {
  test('is component visible?', () => {
    render(
      <Label
      text = "label test"
      htmlFor = "label test"
      disabled
      />
    );

    const labelElement = screen.getByText("label test");

    expect(labelElement).toBeVisible();
  });

  test('color changes when disabled', () => {
    render(
      <Label
      text = "label test"
      htmlFor = "label test"
      disabled = {true}
      />
    );

    const labelElement = screen.getByText("label test");
    expect(labelElement).toHaveStyle('color: grey');
  });
});
