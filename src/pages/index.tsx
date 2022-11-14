import { Caveat } from '@next/font/google';
import { NextPage } from 'next/types';
import { useState } from 'react';
import { ChromePicker } from 'react-color';
import { useDraw } from '../hooks/useDraw';
import { Slider } from '../components';

const caveat = Caveat({
	display: 'swap',
});

const Home: NextPage = () => {
	const [color, setColor] = useState<string>('#000');
	const [width, setWidth] = useState<number[]>([5]);
	const { canvasRef, onMouseDown, clear } = useDraw(drawLine);

	const calc = (1536 / 3) * 2;

	function drawLine({ ctx, currentPoint, prevPoint }: Draw) {
		const { x: currX, y: currY } = currentPoint;
		const lineColor = color;
		const lineWidth = width;

		let startPoint = prevPoint ?? currentPoint;

		ctx.beginPath();
		ctx.lineWidth = lineWidth[0];
		ctx.strokeStyle = lineColor;
		ctx.moveTo(startPoint.x, startPoint.y);
		ctx.lineTo(currX, currY);
		ctx.stroke();

		ctx.fillStyle = lineColor;
		ctx.beginPath();
		ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
		ctx.fill();
	}

	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center bg-neutral-50">
			<h1 className={`${caveat.className} mb-6 text-6xl`}>Do your art</h1>
			<div className="grid w-full max-w-screen-2xl grid-cols-3 items-center justify-center">
				<div className="mx-auto flex flex-col gap-10">
					<ChromePicker
						color={color}
						onChange={(e) => setColor(e.hex)}
						styles={{
							default: { picker: { width: 300 } },
						}}
					/>
					<Slider
						onValueChange={(e: number[]) => {
							setWidth(e);
						}}
						defaultValue={width}
						max={10}
						step={1}
						className="w-full"
					/>
					<button
						type="button"
						className="rounded-md border border-black bg-indigo-200 p-2 transition-all hover:bg-indigo-300 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-400"
						onClick={clear}
					>
						Clear
					</button>
				</div>
				<canvas
					onMouseDown={onMouseDown}
					ref={canvasRef}
					width={calc}
					height={750}
					className="col-span-2 rounded-md border border-black bg-white"
				/>
			</div>
		</div>
	);
};

export default Home;
