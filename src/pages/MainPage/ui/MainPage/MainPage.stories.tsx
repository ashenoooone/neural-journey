import { MainPage } from './MainPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MainPage> = {
  title: 'MainPage',
  component: MainPage,
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Default: Story = {
};