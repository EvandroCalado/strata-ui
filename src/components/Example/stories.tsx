import { Meta, StoryObj } from '@storybook/react';
import { Example } from '.';

const meta: Meta = {
  title: 'Components/Example',
  component: Example,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
