import React from 'react';
import { CifarImageRecognition } from '~/features/CifarImageRecognition';
import { Page } from '~/shared/ui/Page';

interface CifarPageProps {}

export const CifarPage = (props: CifarPageProps) => {
	return (
		<Page className={''}>
			<CifarImageRecognition />
		</Page>
	);
};
