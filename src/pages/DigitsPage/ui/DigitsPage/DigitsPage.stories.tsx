import { DigitsPage } from './DigitsPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DigitsPage> = {
  title: 'DigitsPage',
  component: DigitsPage,
};

export default meta;
type Story = StoryObj<typeof DigitsPage>;

export const Default: Story = {
};