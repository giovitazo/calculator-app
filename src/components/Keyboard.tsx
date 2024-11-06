import React from "react";
import keyList from "../assets/keyList.json";
import Key from "../elements/Key";

interface KeyboardProps {
	handleInput: Function; // Adjust this type if you expect a specific set of string values
}

function Keyboard({ handleInput }) {
	return (
		<div id="keyboard" className="keyboard w-full">
			{keyList.map((item) => {
				return <Key key={item.key} keyItem={item} handleInput={handleInput} />;
			})}
		</div>
	);
}

export default Keyboard;
