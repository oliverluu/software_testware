
import chai from "chai"
import toString from "../src/toString.js";
const expect = chai.expect

describe('the toString function', () => {
    it('should check if it converts number to string', () => {
        const result = toString(1.25);
        expect(result).to.be.eq("1.25");
    });

    it('should check if it converts negative numbers', () => {
        const result = toString(-55);
        expect(result).to.be.eq("-55");
    });

    it('should check if it converts zero', () => {
        const result = toString(0);
        expect(result).to.be.eq("0");
    });

    it('should check if it converts null to string containing nothing', () => {
        const result = toString(null);
        expect(result).to.be.eq("");
    });

    it('should check if it converts array to string', () => {
        const result = toString([1.52, 2.34, 5, 153, -12.2]);
        expect(result).to.be.eq("1.52,2.34,5,153,-12.2");
    });

});