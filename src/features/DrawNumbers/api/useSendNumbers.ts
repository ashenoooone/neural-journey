import { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import { $api } from '~/shared/api/api.ts';

export interface IUseSendNumbersReturnValue {
	isLoading?: boolean;
	error?: string;
	response?: AxiosResponse;
}

export interface IAxiosResponseNumbers {
	result: {
		image: string;
		answer: number[];
	};
}

export const useSendNumbers = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [response, setResponse] =
		useState<AxiosResponse<IAxiosResponseNumbers> | null>(null);

	const sendNumbers = async (image?: string) => {
		setIsLoading(true);
		setError('');
		setResponse(null);

		try {
			const response = await $api.post('/networkNumbers', { image });
			setResponse(response);
		} catch (error) {
			// @ts-ignore
			setError((error as AxiosError).message);
		}

		setIsLoading(false);
	};

	return {
		isLoading,
		error,
		response,
		sendNumbers
	};
};
