import { useState } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Screen from "./elements/Screen";
import { evaluate } from "mathjs";

function App() {
	const [input, setInput]: [string, Function] = useState("");
	const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
		switch (e.currentTarget.getAttribute("data-type")) {
			case "normal":
				if (input != "error") {
					setInput(input + e.currentTarget.innerText);
				}
				break;
			case "operative":
				if (e.currentTarget.innerText == "DEL" && input != "error") {
					setInput(input.substring(0, input.length - 1));
				} else if (e.currentTarget.innerText == "RESET") {
					setInput("");
				}
				break;
			case "equals":
				try {
					const result = evaluate(input);
					setInput(result);
				} catch (error) {
					setInput("error");
				}
				break;
			default:
				break;
		}
	};

	return (
		<>
			<Header />
			<Screen input={input} />
			<Keyboard handleInput={handleInput} />
		</>
	);
}

export default App;
