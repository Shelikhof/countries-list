export function validateNumber(number: number) {
	let string = "";
	while (number > 1000) {
		string = "." + String(number % 1000) + string;
		number = Math.floor(number / 1000);
	}
	string = number + string;
	return string;
}
