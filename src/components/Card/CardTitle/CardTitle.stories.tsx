import { Meta, StoryObj } from '@storybook/react';

import { CardTitle } from '.';

const meta: Meta = {
  title: 'Components/Card/CardTitle',
  component: CardTitle,
  args: {
    children: 'Card Title',
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CardTitle>;

export const Default: Story = {
  args: {
    children: 'Card Title',
  },
};
