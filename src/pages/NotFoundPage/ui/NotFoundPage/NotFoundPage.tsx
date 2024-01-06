import React from 'react';
import cls from './NotFoundPage.module.scss';
import { Button } from '~/shared/ui/Button';
import { Link } from '~/shared/ui/Link';
import { RoutesPaths } from '~/shared/configs/routerConfig/routerConfig.tsx';

export const NotFoundPage = () => {
	return (
		<div className={cls.NotFoundPage}>
			<div>
				<h1>404</h1>
				<p>Не найдено</p>
			</div>
			<Link to={RoutesPaths.main}>
				<Button>Вернуться на главную</Button>
			</Link>
		</div>
	);
};
