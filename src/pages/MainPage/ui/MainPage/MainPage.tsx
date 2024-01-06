import React from 'react';
import cls from './MainPage.module.scss';
import { AboutUs } from '~/pages/MainPage/ui/AboutUs/AboutUs.tsx';
import { Page } from '~/shared/ui/Page';
import { NeuralNetworks } from '../NeuralNetworks/NeuralNetworks';

export const MainPage = () => {
	return (
		<Page className={cls.MainPage}>
			<AboutUs />
			<NeuralNetworks />
		</Page>
	);
};
