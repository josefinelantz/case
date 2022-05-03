const expect = require("chai").expect; 
const iban = require("../iban");

const IBAN = "GB82WEST12345698765432";
let result;
let ibanNumber;

describe("iban.js tests", () => {
	describe("iban.toNumber() Test", () => {
		it("should return 3214282912345698765432161182", () => {
			const ibanStr = "WEST12345698765432GB82";
			result = iban.toNumber(ibanStr);
			expect(result).to.equal("3214282912345698765432161182");
		});
	});
	describe("iban.validate() Test", () => {
		it("should return true", () => {
			result = iban.validate(IBAN);
			
			expect(result).to.equal(1);
		});
	});
	describe("iban.mod97() Test", () => {
		it("should return 1", () => {
			let ibanNumber = "3214282912345698765432161182";
			result = iban.mod97(ibanNumber);
			expect(result).to.equal(1);
		});
	});
});