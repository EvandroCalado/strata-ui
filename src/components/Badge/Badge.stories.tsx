import { Meta, StoryObj } from '@storybook/react';

import { Badge } from '.';

const meta: Meta = {
  title: 'Components/Badge',
  component: Badge,
  args: {
    children: 'Badge',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'outline', 'ghost'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
