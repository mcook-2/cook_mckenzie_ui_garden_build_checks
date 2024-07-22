import type { Meta, StoryObj } from '@storybook/react';
import Text, { TextProps } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    fontSize: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: { type: 'boolean' } },
  },
};

export default meta;
type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    content: 'This is a default text.',
    fontSize: '14px',
    color: '#333',
    disabled: false,
  },
};

export const LargeFont: Story = {
  args: {
    content: 'This text has a larger font size.',
    fontSize: '18px',
    color: '#555',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    content: 'This text is disabled.',
    fontSize: '16px',
    color: '#888',
    disabled: true,
  },
};
