import * as SliderPrimitive from '@radix-ui/react-slider';

export const Slider = (props: SliderPrimitive.SliderProps) => (
	<SliderPrimitive.Root
		{...props}
		aria-label="value"
		className={`relative flex h-5 ${
			props.className ? props.className : 'w-64'
		} touch-none items-center`}
	>
		<SliderPrimitive.Track className="relative h-1 w-full grow rounded-full bg-white dark:bg-gray-800">
			<SliderPrimitive.Range className="absolute h-full rounded-full bg-indigo-600" />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb className="block h-5 w-5 rounded-full bg-indigo-600 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75" />
	</SliderPrimitive.Root>
);
