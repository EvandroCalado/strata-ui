import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    isLoading: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'destructive',
        'outline',
        'ghost',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isLoading: {
      control: 'boolean',
    },
    as: {
      control: 'select',
      options: ['button', 'a'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const primary: Story = {};

export const secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const link: Story = {
  args: {
    variant: 'link',
    as: 'a',
    href: 'https://storybook.js.org',
    target: '_blank',
  },
};

export const isLoading: Story = {
  args: {
    variant: 'primary',
    isLoading: true,
    disabled: true,
  },
};

export const disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
  },
};
