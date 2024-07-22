import type { Meta, StoryObj } from '@storybook/react';
import Img, { ImgProps } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: { type: 'boolean' } },
  },
};

export default meta;
type Story = StoryObj<ImgProps>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/seed/picsum/200/300',
    alt: 'Placeholder Image',
    width: '300px',
    height: '300px',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://picsum.photos/seed/picsum/200/300',
    alt: 'Placeholder Image',
    width: '300px',
    height: '300px',
    disabled: true,
  },
};
