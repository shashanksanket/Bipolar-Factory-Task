import type { Meta, StoryObj } from '@storybook/react';

import Page from '../app/page';

const meta = {
  title: 'Pages/Page',
  component: Page,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};

