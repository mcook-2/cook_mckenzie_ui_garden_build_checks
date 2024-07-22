import type { Meta, StoryObj } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './Radio_Button';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    checked: { control: 'boolean' },
    onChange: { action: 'changed' },
    disabled: { control: { type: 'boolean' } },
  },
};

export default meta;
type Story = StoryObj<RadioButtonProps>;

export const Default: Story = {
  args: {
    id: 'radio1',
    label: 'Option 1',
    checked: false,
    disabled: false,
    onChange: (id: string) => {
      console.log(`Selected radio button with ID: ${id}`);
    },
  },
};

export const Checked: Story = {
  args: {
    id: 'radio2',
    label: 'Option 2',
    checked: true,
    disabled: false,
    onChange: (id: string) => {
      console.log(`Selected radio button with ID: ${id}`);
    },
  },
};

export const Disabled: Story = {
  args: {
    id: 'radio3',
    label: 'Disabled Option',
    checked: false,
    disabled: true,
    onChange: (id: string) => {
      console.log(`Selected radio button with ID: ${id}`);
    },
  },
};
