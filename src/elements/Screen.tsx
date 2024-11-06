interface ScreenProps {
	input: string;
}

function Screen({ input }: ScreenProps) {
	return (
		<div id="screen" className="screen w-full">
			<p id="output" className="output">
				{input}
			</p>
		</div>
	);
}

export default Screen;
