import { Meta, StoryObj } from '@storybook/react';

import { CardImage } from '.';

const meta: Meta = {
  title: 'Components/Card/CardImage',
  component: CardImage,
  args: {
    src: 'https://res.cloudinary.com/dx2lwce8m/image/upload/v1732385825/strata-ui/ir0td4f7hgfrdbw7hhmo.png',
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CardImage>;

export const Default: Story = {};
