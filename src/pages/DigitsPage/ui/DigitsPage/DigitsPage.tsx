import React, { FC } from 'react';
import { Page } from '~/shared/ui/Page';
import { DrawNumbers } from '~/features/DrawNumbers';

export const DigitsPage: FC = () => {
	return (
		<Page>
			<DrawNumbers />
		</Page>
	);
};
