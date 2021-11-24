export default function invertObject(object) {
	const entries = Object.entries(object);
	const reversedEntries = entries.map(
		([key, value]) => [value, key],
	);
	return Object.fromEntries(reversedEntries);
}
