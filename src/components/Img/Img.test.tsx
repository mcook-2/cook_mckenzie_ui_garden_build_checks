import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

describe('Img Component', () => {
  test('is component visible?', () => {
    render(
      <Img
        src="https://picsum.photos/seed/picsum/200/300"
        alt="Placeholder Image"
        width="300px"
        height="300px"
        testId='test-img'
      />
    );

    const imgElement = screen.getByTestId('test-img');

    expect(imgElement).toBeVisible();
  });

  test('color & opacity changes when disabled', () => {
    render(
      <Img
        src="https://picsum.photos/seed/picsum/200/300"
        alt="Placeholder Image"
        width="300px"
        height="300px"
        disabled={true}
        testId='test-img'
      />
    );

    const imgElement = screen.getByTestId('test-img');

    expect(imgElement).toHaveStyle('opacity: 0.5');
    expect(imgElement).toHaveStyle('filter: grayscale(100%)');
    expect(imgElement).toHaveStyle('cursor: not-allowed');
  });
});
