import { Meta, StoryObj } from '@storybook/react';

import { CardImage } from '.';

const meta: Meta = {
  title: 'Components/Card/CardImage',
  component: CardImage,
  args: {
    src: '/strata-card.png',
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CardImage>;

export const Default: Story = {};
