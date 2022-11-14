interface Draw {
	ctx: CanvasRenderingContext2D;
	currentPoint: Point;
	prevPoint: Point | null;
}

interface Point {
	x: number;
	y: number;
}

interface useDrawReturn {
	canvasRef: RefObject<HTMLCanvasElement>;
	onMouseDown: () => void;
	clear: () => void;
}
