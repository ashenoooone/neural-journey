import { Route, RouteProps, Routes } from 'react-router-dom';
import { RouterConfig } from '~/shared/configs/routerConfig/routerConfig.tsx';
import { Suspense, useCallback } from 'react';
import { Footer } from '~/widgets/Footer';
import { Header } from '~/widgets/Header';

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

	return (
		<div className={'flex flex-col'}>
			<Header />
			<div
				className={
					'py-5 flex-grow min-h-[calc(100vh-var(--nav-foot-height)*2)]'
				}
			>
				<Routes>{Object.values(RouterConfig).map(renderRoute)}</Routes>
			</div>
			<Footer className={'shrink-0'} />
		</div>
	);
}

export default App;
