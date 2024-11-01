import { Meta, StoryObj } from '@storybook/react';
import { Heading } from '.';

const meta: Meta = {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading',
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    weight: {
      control: 'select',
      options: [
        'thin',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
      ],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {};
