import React from 'react';
import { DroneImageRecognition } from '~/features/DroneImageRecognition';
import { Page } from '~/shared/ui/Page';

export const DronePage = () => {
	return (
		<Page className={''}>
			<DroneImageRecognition />
		</Page>
	);
};
