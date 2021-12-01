
import chai from "chai"
import toNumber from "../src/toNumber.js";
const expect = chai.expect

describe('the toNumber function', () => {
    it('should check if it converts string number to number', () => {
        const result = toNumber("1.25");
        expect(result).to.be.eq(1.25);
    });

    it('should check if it converts number to number', () => {
        const result = toNumber(-5.5);
        expect(result).to.be.eq(-5.5);
    });

    it('should check if it converts negative string number', () => {
        const result = toNumber("-3.55");
        expect(result).to.be.eq(-3.55);
    });

    it('should check it does not crash with input with two dots', () => {
        const result = toNumber("3.1.1");
        expect(result).to.be.eql(NaN);
    });
});