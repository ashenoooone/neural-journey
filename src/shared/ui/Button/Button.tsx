import React, { HTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from '~/shared/lib/classNames';

export type ButtonType = 'primary' | 'secondary' | 'transparent';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
	theme?: ButtonType;
	isDisabled?: boolean;
}

export const Button = (props: ButtonProps) => {
	const {
		className = '',
		children,
		isDisabled,
		theme = 'primary',
		...other
	} = props;
	return (
		<button
			{...other}
			disabled={isDisabled}
			className={classNames(cls.Button, {}, [className, cls[theme]])}
		>
			{children}
		</button>
	);
};
