import React from 'react';
import { Link } from '~/shared/ui/Link';
import { INeuralNetworkCard } from '../../model/types.ts';

export interface NeuralNetworkCardProps {
	className?: string;
	item?: INeuralNetworkCard;
}

export const NeuralNetworkCard = (props: NeuralNetworkCardProps) => {
	const { className = '', item } = props;

	return (
		<div
			className={`bg-white p-2 flex flex-col rounded-lg overflow-hidden shadow-md ${className}`}
		>
			<img
				src={item?.image}
				alt={item?.title}
				className='w-full h-48 object-cover'
			/>
			<div className=''>
				<h2 className='text-xl text-center font-bold mb-2'>{item?.title}</h2>
				<p className='text-gray-700 mb-4'>{item?.description}</p>
			</div>
			{item && (
				<Link
					className={'mt-auto font-bold'}
					to={item?.link}
				>
					Попробовать
				</Link>
			)}
		</div>
	);
};
