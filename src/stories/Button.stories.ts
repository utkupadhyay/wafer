import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Wafer-UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Submit',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Submit',
  },
};
export const Disabled: Story = {
  args: {
    label: 'Submit',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Submit',
  },
};
export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Submit',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Submit',
  },
};
