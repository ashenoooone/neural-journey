import type { Meta, StoryObj } from '@storybook/react';
import { NeuralNetworkList } from './NeuralNetworkList';

const meta: Meta<typeof NeuralNetworkList> = {
	title: 'NeuralNetworkList',
	component: NeuralNetworkList
};

export default meta;
type Story = StoryObj<typeof NeuralNetworkList>;

export const Default: Story = {};
