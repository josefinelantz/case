/*
	Information on algorithm taken from https://en.wikipedia.org/wiki/International_Bank_Account_Number
 */

const IBAN = {};

var COUNTRIES = {
  AD: 24, AE: 23, AT: 20, AZ: 28, BA: 20, BE: 16, BG: 22, BH: 22, BR: 29,
  CH: 21, CR: 21, CY: 28, CZ: 24, DE: 22, DK: 18, DO: 28, EE: 20, ES: 24,
  FI: 18, FO: 18, FR: 27, GB: 22, GI: 23, GL: 18, GR: 27, GT: 28, HR: 21,
  HU: 28, IE: 22, IL: 23, IS: 26, IT: 27, JO: 30, KW: 30, KZ: 20, LB: 28,
  LI: 21, LT: 20, LU: 20, LV: 21, MC: 27, MD: 24, ME: 22, MK: 19, MR: 27,
  MT: 31, MU: 30, NL: 18, NO: 15, PK: 24, PL: 28, PS: 29, PT: 25, QA: 29,
  RO: 24, RS: 22, SA: 24, SE: 24, SI: 19, SK: 24, SM: 27, TN: 24, TR: 26,   
  AL: 28, BY: 28, CR: 22, EG: 29, GE: 22, IQ: 23, LC: 32, SC: 31, ST: 25,
  SV: 28, TL: 23, UA: 29, VA: 22, VG: 24, XK: 20
};

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
	
	// Declare an object to act as a map to handle  replacement of each char with 2 digits
	let charMap = {};

	// Declare array to hold iban digits
	let number = [];

	// Iterate over chars array 
	chars.forEach((value, index) => {
		// Assign index + 10 to each char value 
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

IBAN.validate = (input) => {
	// Make input upper case and keep alpha numeric chars only
	let iban = String.toUpperCase().replace(/[^A-Z0-9]/g, ""),
	// Extract country code, check sum and rest
	number = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/);

	// If length is not correct iban is not valid
	if (!number || COUNTRIES[number[1]] !== iban.length) {
		return false;
	}
	// Move country code and check sum to end of string 
	let rearranged = IBAN.rearrange(number);
	// Convert letters to numbers
	let digits = IBAN.toNumber(rearranged);
	// Check modulo 97
	return mod97(digits);
}

IBAN.mod97 = (iban) => {
	let check = iban.slice(0, 2);
	let rest;
	for (let i = 2; i < iban.length; i +=7) {
		rest = String(check) + iban.substring(i, i + 7);
		check = parseInt(rest, 10) % 97;
	}
	return check;
}

module.exports = IBAN;
