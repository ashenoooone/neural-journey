import { RouteProps } from 'react-router-dom';
import { DigitsPage } from '~/pages/DigitsPage';
import { MainPage } from '~/pages/MainPage';
import { NotFoundPage } from '~/pages/NotFoundPage';
import { DronePage } from '~/pages/DronePage';
import { CifarPage } from '~/pages/CifarPage';

export enum Routes {
	MAIN = 'main',
	DIGITS = 'digits',
	CIFAR = 'cifar',
	DRONE = 'drone',
	NOT_FOUND = 'not_found'
}

export const RoutesPaths: Record<Routes, string> = {
	[Routes.MAIN]: '/',
	[Routes.DIGITS]: '/digits',
	[Routes.CIFAR]: '/cifar',
	[Routes.DRONE]: '/drone',
	[Routes.NOT_FOUND]: '*'
};

export const RouterConfig: Record<Routes, RouteProps> = {
	[Routes.DIGITS]: {
		path: RoutesPaths.digits,
		element: <DigitsPage />
	},
	[Routes.MAIN]: {
		path: RoutesPaths.main,
		element: <MainPage />
	},
	[Routes.CIFAR]: {
		path: RoutesPaths.cifar,
		element: <CifarPage />
	},
	[Routes.DRONE]: {
		path: RoutesPaths.drone,
		element: <DronePage />
	},
	[Routes.NOT_FOUND]: {
		path: RoutesPaths.not_found,
		element: <NotFoundPage />
	}
};
