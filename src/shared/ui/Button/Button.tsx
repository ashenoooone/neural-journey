import React, { FC, HTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from '~/shared/lib/classNames';

export type ButtonType = 'primary' | 'secondary' | 'transparent';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
	theme?: ButtonType;
}

export const Button = (props: ButtonProps) => {
	const { className = '', children, theme = 'primary', ...other } = props;
	return (
		<button
			{...other}
			className={classNames(cls.Button, {}, [className, cls[theme]])}
		>
			{children}
		</button>
	);
};
