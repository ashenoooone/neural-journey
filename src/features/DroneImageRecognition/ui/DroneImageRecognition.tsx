import React, { useCallback, useState } from 'react';
import { classNames } from '~/shared/lib/classNames';
import { Button } from '~/shared/ui/Button';
import { useSendPhotoDrone } from '../api/useSendPhotoDrone.ts';

interface IDroneImageRecognition {
	className?: string;
}

export const DroneImageRecognition = (props: IDroneImageRecognition) => {
	const [selectedImage, setSelectedImage] = useState<string | undefined>();
	const { response, error, isLoading, sendPhoto } = useSendPhotoDrone();

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
			<h1 className='text-2xl font-bold mb-4'>
				Drone Распознавание объекто на изображении с дрона
			</h1>
			<div className={'flex gap-2'}>
				<input
					type='file'
					accept='image/*'
					onChange={handleImageUpload}
					className='mb-4 p-2'
				/>
				<Button
					isDisabled={isLoading || !selectedImage}
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

				{response && response.data.result.answer.length > 0 ? (
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
				) : (
					<span>Не удалось найти ничего</span>
				)}
			</div>
		</div>
	);
};
