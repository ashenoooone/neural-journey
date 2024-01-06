import { Route, RouteProps, Routes } from 'react-router-dom';
import { RouterConfig } from '~/shared/configs/routerConfig/routerConfig.tsx';
import { Suspense, useCallback } from 'react';

function App() {
	const renderRoute = useCallback((route: RouteProps) => {
		const element = (
			<Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>
		);
		return (
			<Route
				key={route.path}
				path={route.path}
				element={element}
			/>
		);
	}, []);

	return <Routes>{Object.values(RouterConfig).map(renderRoute)}</Routes>;
}

export default App;
