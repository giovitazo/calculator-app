import ThemeSelector from "../elements/ThemeSelector";

export default function Header() {
	return (
		<header className="flex justify-between align-middle flex-row w-full">
			<h1>calc</h1>
			<ThemeSelector />
		</header>
	);
}
