import type { Meta, StoryObj } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: { type: 'object' } },
    onSelect: { action: 'selected' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<DropdownProps>;

export const Primary: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabled: true,
  },
};