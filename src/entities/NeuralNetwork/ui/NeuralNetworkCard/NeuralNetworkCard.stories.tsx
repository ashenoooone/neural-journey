import type { Meta, StoryObj } from '@storybook/react';
import { NeuralNetworkCard } from './NeuralNetworkCard';

const meta: Meta<typeof NeuralNetworkCard> = {
	title: 'NeuralNetworkCard',
	component: NeuralNetworkCard
};

export default meta;
type Story = StoryObj<typeof NeuralNetworkCard>;

export const Default: Story = {};
