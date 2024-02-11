import type { Meta, StoryObj } from '@storybook/react';

import Pie from '../components/PieChart';

const meta = {
  title: 'Components/Pie',
  component: Pie,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pie>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title',
    label: 'Label'
  },
};

