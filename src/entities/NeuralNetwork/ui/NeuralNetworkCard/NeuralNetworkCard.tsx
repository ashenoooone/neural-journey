import React from 'react';
import { Link } from '~/shared/ui/Link';
import { INeuralNetworkCard } from '../../model/types.ts';
import { Badge } from '~/shared/ui/Badge';
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '~/shared/ui/Card';

export interface NeuralNetworkCardProps {
	className?: string;
	item?: INeuralNetworkCard;
}

export const NeuralNetworkCard = (props: NeuralNetworkCardProps) => {
	const { className = '', item } = props;

	return (
		<Card>
			<img
				src={item?.image}
				alt={item?.title}
				className='w-full h-48 object-cover'
			/>
			<CardHeader>
				<CardTitle>{item?.title}</CardTitle>
				<div>{item?.badges?.map((b) => <Badge>{b}</Badge>)}</div>
				<CardDescription>{item?.description}</CardDescription>
			</CardHeader>
			<CardFooter>
				{item && (
					<Link
						className={'mt-auto font-bold'}
						to={item?.link}
					>
						Попробовать
					</Link>
				)}
			</CardFooter>
		</Card>
	);
};
