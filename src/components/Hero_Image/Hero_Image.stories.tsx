import type { Meta, StoryObj } from '@storybook/react';
import HeroImage, { HeroImageProps } from './Hero_Image';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    imageurl: { control: 'text' },
    disabled: { control: { type: 'boolean' } },
  },
};

export default meta;
type Story = StoryObj<HeroImageProps>;

export const Default: Story = {
  args: {
    title: 'Hero Title',
    subtitle: 'Hero Subtitle',
    imageurl: 'https://via.placeholder.com/1200x400',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Hero Title',
    subtitle: 'Disabled Hero Subtitle',
    imageurl: 'https://via.placeholder.com/1200x400',
    disabled: true,
  },
};
