interface KeyItem {
	key: string;
	keyType: string; // Adjust this type if you expect a specific set of string values
	span: number;
}
interface KeyProps {
	//	key: string;
	keyItem: KeyItem; // Adjust this type if you expect a specific set of string values
	handleInput: Function;
}

function Key({ keyItem, handleInput }: KeyProps) {
	const keyTypeClass = "key--" + keyItem.keyType;
	const spanClass = "col-span-" + keyItem.span;

	return (
		<button className={`key ${keyTypeClass} ${spanClass}`} onClick={() => handleInput} data-type={keyItem.keyType}>
			{keyItem.key}
		</button>
	);
}

export default Key;
