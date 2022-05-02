/*
	Information on algorithm taken from https://en.wikipedia.org/wiki/International_Bank_Account_Number
 */

const IBAN = {};
/*
 Returns IBAN with the four inital chars moved to the end of the string
*/
IBAN.rearrange = (input) => {
	return input.substring(4, input.length) + input.substring(0, 4);
} 
/*
 Returns IBAN as a decimal number
*/
IBAN.toNumber = (iban) => {
	// Declare string variable with uppercase alpha chars and split into an array
	let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	
	// Declare object to act as a map to handle  replacement of each char with 2 digits
	let charMap = {};

	// Declare array to hold iban digits
	let number = [];

	// Iterate over chars array 
	chars.forEach((value, index) => {
		// Assign index + 10 to each char value in charMap
  	charMap[value] = index + 10;
	});

	// Split iban string into an array and iterate over it
	iban.split("").forEach((value, index) => {
		// If the value is a char, store char value from charMap in number array at current index, else store value at current index
  	number[index] = charMap[value] || value;
	});
	// Join number array to a string and return
	return number.join("");
}

validate = (input) => {
	let iban = rearrange(input);
	let numberIban = toNumber(iban);
	
	return (numberIban % 97) === 1;
}

module.exports = IBAN;