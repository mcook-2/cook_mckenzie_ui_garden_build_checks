import type { Meta, StoryObj } from '@storybook/react';
import Card  from './Card';


const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imageurl: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args:  {
    title: 'Sample Card',
    description: 'This is a sample card component.',
    imageurl: 'https://via.placeholder.com/300',
    disabled: false,
  }
};

export const Disabled: Story = {
  args:{
    title: 'Disabled Card',
    description: 'This card is disabled.',
    imageurl: 'https://via.placeholder.com/300',
    disabled: true,
  }
};