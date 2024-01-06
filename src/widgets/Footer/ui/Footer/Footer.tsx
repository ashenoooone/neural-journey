import React from 'react';

interface FooterProps {
	className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
	return (
		<footer className={`bg-gray-800 text-white py-4 ${className}`}>
			<div className='container mx-auto text-center'>
				<p className='text-sm'>
					&copy; {new Date().getFullYear()} PINJ-31. Все права защищены.
				</p>
			</div>
		</footer>
	);
};
