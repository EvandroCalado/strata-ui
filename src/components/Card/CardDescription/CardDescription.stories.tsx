import { Meta, StoryObj } from '@storybook/react';

import { CardDescription } from '.';

const meta: Meta = {
  title: 'Components/Card/CardDescription',
  component: CardDescription,
  args: {
    children:
      "Is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled.",
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CardDescription>;

export const Default: Story = {};
