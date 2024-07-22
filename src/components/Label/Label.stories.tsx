import type { Meta, StoryObj } from '@storybook/react';
import Label, { LabelProps } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    htmlFor: { control: 'text' },
    disabled: { control: { type: 'boolean' } },
  },
};

export default meta;
type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    text: 'Label Text',
    htmlFor: 'inputId',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Label',
    htmlFor: 'inputId',
    disabled: true,
  },
};
