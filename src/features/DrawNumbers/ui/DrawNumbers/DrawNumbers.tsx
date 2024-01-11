import React, { MutableRefObject, useCallback, useEffect, useRef } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { ReactSketchCanvasRef } from 'react-sketch-canvas/src/ReactSketchCanvas';
import { Button } from '~/shared/ui/Button';
import { classNames } from '~/shared/lib/classNames';
import { useSendNumbers } from '~/features/DrawNumbers';

interface DrawNumbersProps {
	className?: string;
}

export const DrawNumbers = (props: DrawNumbersProps) => {
	const { className = '' } = props;
	const { sendNumbers, response, error, isLoading } = useSendNumbers();

	const canvasRef = useRef(
		null
	) as MutableRefObject<ReactSketchCanvasRef | null>;

	const handleKeyDown = useCallback((event: KeyboardEvent) => {
		if (event.ctrlKey && (event.key === 'z' || event.key === 'я')) {
			canvasRef.current?.undo();
		}
	}, []);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [handleKeyDown]);

	const onPredictClick = useCallback(async () => {
		const base64Image = await canvasRef.current?.exportImage('jpeg');
		sendNumbers(base64Image);
	}, []);

	const onResetClick = useCallback(() => {
		canvasRef.current?.clearCanvas();
	}, []);

	console.log(error);

	return (
		<div className={classNames('flex gap-10', {}, [className])}>
			<ReactSketchCanvas
				ref={canvasRef}
				width='1100px'
				height='550px'
				strokeWidth={4}
				strokeColor='white'
				canvasColor={'black'}
			/>
			<div className={'flex flex-col gap-4'}>
				<Button onClick={onResetClick}>Очистить</Button>
				<Button onClick={onPredictClick}>Угадать числа</Button>
			</div>
			<div>
				<h2 className={'text-2xl font-bold'}>Результат предсказывания</h2>
				<div>
					{error && <span className={'font-bold text-red-800'}>{error}</span>}
					{response && (
						<div className={'font-bold'}>
							<p>Нейросеть видит числа:</p>
							<p>{response.data.result.sort((a, b) => a - b).join(', ')}</p>
						</div>
					)}
					{isLoading && (
						<span className={'font-bold text-blue-800'}>
							Нейросеть думает...
						</span>
					)}
				</div>
			</div>
		</div>
	);
};
