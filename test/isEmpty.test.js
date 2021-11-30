import add from "../src/isEmpty.js"
import chai from "chai"
import isEmpty from "../src/isEmpty.js";
const expect = chai.expect

describe('the isEmpty function', () => {
    it('should check if null is considered empty', () => {
        const result = isEmpty(null);
        expect(result).to.be.eq(true);
    });

    it('should check if true is considered empty', () => {
        const result = isEmpty(true);
        expect(result).to.be.eq(true);
    });

    it('should check if empty array of one is considered empty', () => {
        const result = isEmpty(1);
        expect(result).to.be.eq(true);
    });

    it('should check if array of three numbers is empty', () => {
        const result = isEmpty([1, 2, 3]);
        expect(result).to.be.eq(false);
    });

    it('should check if array containing a string is empty', () => {
        const result = isEmpty('abc');
        expect(result).to.be.eq(false);
    });

    it('should check if array of three numbers is empty', () => {
        const result = isEmpty([1, 2, 3]);
        expect(result).to.be.eq(true);
    });

});