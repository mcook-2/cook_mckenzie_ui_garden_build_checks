import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './Radio_Button';

describe('RadioButton Component', () => {
  test('is component visible?', () => {
    render(
      <RadioButton
        id="radio-test"
        label="label test"
        checked={false}
        onChange={() => {}}
      />
    );

    const RadioButtonElement = screen.getByText("label test");

    expect(RadioButtonElement).toBeVisible();
  });

  test('color changes when disabled', () => {
    render(
      <RadioButton
        id="radio-test"
        label="label test"
        checked={false}
        onChange={() => {}}
        disabled={true}
      />
    );

    const labelElement = screen.getByText("label test");
    expect(labelElement).toHaveStyle('color: grey');
  });
});
