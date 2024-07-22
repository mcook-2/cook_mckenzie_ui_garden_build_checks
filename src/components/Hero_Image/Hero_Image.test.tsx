import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './Hero_Image';

describe('HeroImage Component', () => {
  test('is component visible?', () => {
    render(
      <HeroImage
        title="Test Title"
        subtitle="Test Subtitle"
        imageurl="https://via.placeholder.com/1200x400"
        testId='test-hero-img'
      />
    );

    const titleElement = screen.getByText('Test Title');
    const subtitleElement = screen.getByText('Test Subtitle');
    const heroContainer = screen.getByTestId('test-hero-img');

    expect(heroContainer).toBeVisible();
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  test('color & opacity changes when disabled', () => {
    render(
      <HeroImage
        title="Test Title"
        subtitle="Test Subtitle"
        imageurl="https://via.placeholder.com/1200x400"
        disabled={true}
        testId='test-hero-img'
      />
    );

    const heroContainer = screen.getByTestId('test-hero-img');
    expect(heroContainer).toHaveStyle('color: light-grey');
    expect(heroContainer).toHaveStyle('opacity: 0.5');
  });

});
