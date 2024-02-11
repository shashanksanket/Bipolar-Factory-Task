import type { Meta, StoryObj } from '@storybook/react';

import Chart from '../components/Chart';

const meta = {
  title: 'Components/Chart',
  component: Chart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};

