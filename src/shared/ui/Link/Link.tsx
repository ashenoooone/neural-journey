import React, { ReactNode } from 'react';
import cls from './Link.module.scss';
import { classNames } from '~/shared/lib/classNames';
import { Link as RLink, LinkProps as RlinkProps } from 'react-router-dom';
import { Typography } from '~/shared/ui/Typography';

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
			<Typography variant={'p'}>{children}</Typography>
		</RLink>
	);
};
