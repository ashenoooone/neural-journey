import React, { ReactNode } from 'react';
import { classNames } from '~/shared/lib/classNames';
import {
	INeuralNetworkCard,
	NeuralNetworkList
} from '~/entities/NeuralNetwork';
import numbersDigitsImage from '~/shared/assets/neural-digits.jpg';
import numbersNumbersImage from '~/shared/assets/neural-numbers.jpg';
interface NeuralNetworksProps {
	className?: string;
	children?: ReactNode;
}

const items: INeuralNetworkCard[] = [
	{
		title: 'Распознавание цифр',
		description:
			'Эта нейросеть обучена распознавать и классифицировать цифры. Используется для решения задачи распознавания рукописных или напечатанных цифр.',
		image: numbersDigitsImage,
		link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
	},
	{
		title: 'Распознавание числ',
		description:
			'Наша нейросеть специализируется на распознавании чисел и может быть использована в различных областях, где требуется автоматическое определение числовых значений.',
		image: numbersNumbersImage,
		link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
	},
	{
		title: 'Распознавание 3',
		description: 'Neural Network Description',
		image: 'https://i.ibb.co/z4z4z4z/Neural-Network.png',
		link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
	},
	{
		title: 'Распознавание 3',
		description: 'Neural Network Description',
		image: 'https://i.ibb.co/z4z4z4z/Neural-Network.png',
		link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
	}
];

export const NeuralNetworks = (props: NeuralNetworksProps) => {
	const { className = '', children } = props;
	return (
		<div className={classNames('py-8 px-4', {}, [className])}>
			<h2 className='text-3xl font-bold mb-6 text-center'>
				Наши нейронные сети
			</h2>
			<NeuralNetworkList items={items} />
		</div>
	);
};
