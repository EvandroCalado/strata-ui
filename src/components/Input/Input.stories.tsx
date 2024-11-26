import { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta: Meta = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Input',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'date', 'number'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Name',
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Password',
    type: 'password',
  },
};

export const Email: Story = {
  args: {
    placeholder: 'Email',
    type: 'email',
  },
};

export const Date: Story = {
  args: {
    placeholder: 'Date',
    type: 'date',
  },
};

export const number: Story = {
  args: {
    placeholder: 'Number',
    type: 'number',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Error',
    errorMessage: 'Error',
  },
};
