import React, { ReactNode, useMemo } from 'react';
import { classNames } from '~/shared/lib/classNames';
import {
	INeuralNetworkCard,
	NeuralNetworkList
} from '~/entities/NeuralNetwork';
import numbersNumbersImage from '~/shared/assets/neural-numbers.jpg';
import neuralCifar from '~/shared/assets/neural-cifat.jpg';
import drone from '~/shared/assets/drone.jpg';
import { RoutesPaths } from '~/shared/configs/routerConfig/routerConfig.tsx';
interface NeuralNetworksProps {
	className?: string;
	children?: ReactNode;
}

export const NeuralNetworks = (props: NeuralNetworksProps) => {
	const { className = '', children } = props;

	const items: INeuralNetworkCard[] = useMemo(
		() => [
			{
				title: 'Распознавание числ',
				description:
					'Наша нейросеть специализируется на распознавании чисел и может быть использована в различных областях, где требуется автоматическое определение числовых значений.',
				image: numbersNumbersImage,
				link: RoutesPaths.digits
			},
			{
				title: 'Cifar: распознавание предметов',
				description:
					'Наша нейронная сеть предоставляет невероятную точность в распознавании объектов на фотографиях, обеспечивая высокоточное и быстрое определение элементов в изображениях.',
				image: neuralCifar,
				link: RoutesPaths.cifar
			},
			{
				title: 'Распознавание объектов с фото дрона.',
				description:
					'Наша нейросеть, специально разработанная для анализа фотографий с дронов, обеспечивает выдающуюся точность в распознавании объектов.',
				image: drone,
				link: RoutesPaths.drone
			}
		],
		[]
	);

	return (
		<div className={classNames('py-8 px-4', {}, [className])}>
			<h2 className='text-3xl font-bold mb-6 text-center'>
				Наши нейронные сети
			</h2>
			<NeuralNetworkList items={items} />
		</div>
	);
};
