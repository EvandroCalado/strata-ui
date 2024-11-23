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
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div>
      <Heading {...args} as={'h1'} />
      <Heading {...args} as={'h2'} />
      <Heading {...args} as={'h3'} />
      <Heading {...args} as={'h4'} />
      <Heading {...args} as={'h5'} />
      <Heading {...args} as={'h6'} />
    </div>
  ),
};
