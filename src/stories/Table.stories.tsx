import type { Meta, StoryObj } from '@storybook/react';

import TableComponent  from '../components/Table';

const meta = {
  title: 'Components/Table',
  component: TableComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof TableComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};