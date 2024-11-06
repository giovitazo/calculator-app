import React, { useEffect, useState } from "react";

function ThemeSelector() {
	const [ColorScheme, setColorScheme] = useState(() => {
		if (localStorage.getItem("theme")) {
			return localStorage.getItem("theme");
		} else {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				return "1";
			} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
				return "2";
			}
		}
	});

	const readColorScheme = () => {
		const toggle: RadioNodeList = document.getElementsByName("toggle");
		toggle.forEach((toggleElement) => {
			if (toggleElement.checked == true) {
				setColorScheme(toggleElement.value);
			}
		});
	};

	useEffect(() => {
		document.documentElement.classList.remove("dark", "light", "high-contrast");
		switch (ColorScheme) {
			case "1":
				document.documentElement.classList.add("dark");
				localStorage.setItem("theme", "1");
				break;
			case "2":
				document.documentElement.classList.add("light");
				localStorage.setItem("theme", "2");
				break;
			case "3":
				document.documentElement.classList.add("high-contrast");
				localStorage.setItem("theme", "3");
				break;

			default:
				break;
		}
	}, [ColorScheme]);

	useEffect(() => {
		document
			.getElementsByName("toggle")
			.item(parseInt(ColorScheme) - 1)
			.setAttribute("checked", "");
	}, []);

	return (
		<div className="themeSelector">
			<h2>THEME</h2>
			<div className="toggle grid grid-rows-2 grid-cols-3 text-xs text-center">
				<label htmlFor="dark-theme">1</label>
				<label htmlFor="light-theme">2</label>
				<label htmlFor="high-contrast-theme">3</label>
				<form className="radioContainer col-span-3 flex justify-evenly rounded-xl" onChange={readColorScheme}>
					<input type="radio" id="option1" key={1} value={1} name="toggle" defaultChecked />
					<input type="radio" id="option2" key={2} value={2} name="toggle" />
					<input type="radio" id="option3" key={3} value={3} name="toggle" />
				</form>
			</div>
		</div>
	);
}

export default ThemeSelector;
