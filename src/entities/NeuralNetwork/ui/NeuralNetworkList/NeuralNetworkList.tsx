import React from 'react';
import cls from './NeuralNetworkList.module.scss';
import { classNames } from '~/shared/lib/classNames';
import { INeuralNetworkCard } from '../../model/types.ts';
import { NeuralNetworkCard } from '../../index.ts';

interface NeuralNetworkListProps {
	className?: string;
	items?: INeuralNetworkCard[];
}

export const NeuralNetworkList = (props: NeuralNetworkListProps) => {
	const { className = '', items } = props;
	return (
		<div className={classNames(cls.NeuralNetworkList, {}, [className])}>
			{items?.map((item) => (
				<NeuralNetworkCard
					key={item.title}
					item={item}
				/>
			))}
		</div>
	);
};
