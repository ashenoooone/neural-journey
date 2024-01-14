import React from 'react';
import image from '~/shared/assets/Online class.svg';
import { Typography } from '~/shared/ui/Typography';

export const AboutUs = () => {
	return (
		<section className='bg-secondary py-2'>
			<div className='container mx-auto'>
				<div className='flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8'>
					<div className='md:w-1/2'>
						<img
							src={image}
							alt='О нас'
							className='w-full h-auto object-cover rounded-md'
						/>
					</div>
					<div className='md:w-1/2'>
						<Typography variant={'h2'}>
							Добро пожаловать в мир наших нейросетей
						</Typography>
						<Typography
							className={'mt-2'}
							variant={'p'}
						>
							Мы - студенты группы ПИНЖ-31 СГТУ им. Гагарина, и мы гордимся
							представить вам некоторые из наших удивительных нейросетей.
						</Typography>
						<Typography
							className={'mt-2'}
							variant={'p'}
						>
							Каждая из них уникальна и готова к тестированию. Мы постоянно
							работаем над улучшением и добавлением новых функций.
						</Typography>
						<Typography
							className={'mt-2'}
							variant={'p'}
						>
							Нажмите кнопку "Попробовать", чтобы познакомиться с их
							функциональностью и возможностями.
						</Typography>
						<Typography
							className={'mt-2'}
							variant={'p'}
						>
							Если у вас есть вопросы или предложения по улучшению наших
							нейросетей, не стесняйтесь связаться с нами.
						</Typography>
					</div>
				</div>
			</div>
		</section>
	);
};
