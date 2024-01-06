import React from 'react';
import image from '~/shared/assets/Online class.svg';

export const AboutUs = () => {
	return (
		<section className='bg-gray-100 py-10 px-10'>
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
						<h2 className='text-5xl font-bold mb-4 text-indigo-700'>
							Добро пожаловать в мир наших нейросетей
						</h2>
						<p className='text-gray-800 leading-relaxed mb-4'>
							Мы - студенты группы ПИНЖ-31 СГТУ им. Гагарина, и мы гордимся
							представить вам некоторые из наших удивительных нейросетей.
						</p>
						<p className='text-gray-800 leading-relaxed mb-4'>
							Каждая из них уникальна и готова к тестированию. Мы постоянно
							работаем над улучшением и добавлением новых функций.
						</p>
						<p className='text-gray-800 leading-relaxed mb-4'>
							Нажмите кнопку "Попробовать", чтобы познакомиться с их
							функциональностью и возможностями.
						</p>
						<p className='text-gray-800 leading-relaxed'>
							Если у вас есть вопросы или предложения по улучшению наших
							нейросетей, не стесняйтесь связаться с нами.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
