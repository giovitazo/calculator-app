import React from "react";

function Screen({ input }) {
	return (
		<div id="screen" className="screen w-full">
			<p id="output" className="output">
				{input}
			</p>
		</div>
	);
}

export default Screen;
