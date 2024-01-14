import React, { useCallback, useState } from 'react';
import { classNames } from '~/shared/lib/classNames';
import { useSendPhotoCifar } from '~/features/CifarImageRecognition/api/useSendPhotoCifar.ts';
import { Button } from '~/shared/ui/Button';
import { Typography } from '~/shared/ui/Typography';
import { Input } from '~/shared/ui/Input';

interface CifarImageRecognitionProps {
	className?: string;
}

export const CifarImageRecognition = (props: CifarImageRecognitionProps) => {
	const [selectedImage, setSelectedImage] = useState<string | undefined>();
	const { response, error, isLoading, sendPhoto } = useSendPhotoCifar();

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setSelectedImage(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const onSubmit = useCallback(() => {
		sendPhoto(selectedImage);
	}, [sendPhoto, selectedImage]);

	return (
		<div className={classNames('', {})}>
			<Typography variant={'h2'}>
				CIFAR Распознавание объекто на изображении
			</Typography>
			<div className={'flex gap-2 mt-2'}>
				<Input
					type='file'
					accept='image/*'
					onChange={handleImageUpload}
					className='mb-4 max-w-80 p-2'
				/>
				<Button
					disabled={isLoading || !selectedImage}
					onClick={onSubmit}
				>
					{isLoading ? 'Загрузка...' : 'Отправить фото'}
				</Button>
				<span className={'text-red-800 font-bold '}>
					{error && error.toString()}
				</span>
			</div>
			<div className={'flex gap-10 mt-5'}>
				{/* Секция для отображения результата */}
				{selectedImage && (
					<div className='mb-4'>
						<h2 className='text-xl font-semibold mb-2'>Загруженное фото</h2>
						<img
							src={selectedImage}
							alt='Uploaded'
							className='w-[400px] h-[400px]'
						/>
					</div>
				)}

				{response && (
					<div className='mb-4'>
						<h2 className='text-xl font-semibold mb-2'>Результат</h2>
						<img
							src={'data:image/jpeg;base64,' + response.data.result.image}
							alt='Result'
							className='w-[400px] h-[400px]'
						/>
					</div>
				)}

				{response && response.data.result.answer.length > 0 && (
					<div>
						<h2 className='text-xl font-semibold mb-2'>
							Распознано на изображении
						</h2>
						<ul>
							{response.data.result.answer.map((word, index) => (
								<li key={index}>{word}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};
