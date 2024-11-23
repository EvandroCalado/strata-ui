import { Meta, StoryObj } from '@storybook/react';

import { CardTitle } from '.';

const meta: Meta = {
  title: 'Components/Card/CardTitle',
  component: CardTitle,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CardTitle>;

export const WithIcon: Story = {
  args: {
    icon: true,
  },
};

export const WithoutIcon: Story = {};
