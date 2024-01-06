import React, { FC, HTMLAttributes, ReactNode } from 'react';
import cls from './Link.module.scss';
import { classNames } from '~/shared/lib/classNames';
import { Link as RLink, LinkProps as RlinkProps } from 'react-router-dom';

interface LinkProps extends RlinkProps {
	className?: string;
	children?: ReactNode;
}

export const Link = (props: LinkProps) => {
	const { className = '', children, ...other } = props;
	return (
		<RLink
			className={classNames(cls.Link, {}, [className])}
			{...other}
		>
			{children}
		</RLink>
	);
};
