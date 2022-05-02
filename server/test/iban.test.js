const expect = require("chai").expect; 
const iban = require("../iban");

const IBAN = "GB82WEST12345698765432";

describe("iban.js tests", () => {
	describe("iban.rearrange() Test", () => {
		const rearranged = iban.rearrange(IBAN);
		it("should return WEST", () => {
			const result = rearranged.substring(0, 4);
			expect(result).to.equal("WEST");
		});
		it("should return WEST12345698765432GB82", () => {
			expect(rearranged).to.equal("WEST12345698765432GB82");
		});
	});
	
// 	it("should return 9", () => {
// 		assert.equal(3 * 2, 9);
// 	});
});