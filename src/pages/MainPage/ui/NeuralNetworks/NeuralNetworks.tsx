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
import { Typography } from '~/shared/ui/Typography';

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
				link: RoutesPaths.cifar,
				badges: ['Тестовая']
			},
			{
				title: 'Распознавание объектов с фото дрона.',
				description:
					'Наша нейросеть, специально разработанная для анализа фотографий с дронов, обеспечивает выдающуюся точность в распознавании объектов.',
				image: drone,
				link: RoutesPaths.drone,
				badges: ['Тестовая']
			}
		],
		[]
	);

	return (
		<div className={classNames('py-8 px-4', {}, [className])}>
			<Typography
				variant={'h1'}
				className={'mb-10'}
			>
				Наши нейронные сети
			</Typography>
			<NeuralNetworkList items={items} />
		</div>
	);
};
