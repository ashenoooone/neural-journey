import React from 'react';
import { Link } from 'react-router-dom';
import { PiStarFourFill } from 'react-icons/pi';

interface HeaderProps {
	className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
	return (
		<header
			className={`bg-primary text-secondary px-4 max-h-[var(--header-height)] py-4 ${className}`}
		>
			<div className='container mx-auto flex justify-between items-center'>
				<Link
					to='/'
					className='text-2xl font-bold'
				>
					<PiStarFourFill />
				</Link>
				<nav className='flex space-x-4'>
					<Link
						to='/'
						className='hover:text-gray-300'
					>
						Главная
					</Link>
				</nav>
			</div>
		</header>
	);
};
