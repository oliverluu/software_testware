
import chai from "chai"
import isBoolean from "../src/isBoolean.js";
const expect = chai.expect

describe('the isBoolean function', () => {
    it('should check if null is considered Boolean', () => {
        const result = isBoolean(null);
        expect(result).to.be.eq(false);
    });

    it('should check if true is considered boolean', () => {
        const result = isBoolean(true);
        expect(result).to.be.eq(true);
    });

    it('should check if false is considered boolean', () => {
        const result = isBoolean(false);
        expect(result).to.be.eq(true);
    });

    it('should check if a string is considered boolean', () => {
        const result = isBoolean('abc');
        expect(result).to.be.eq(false);
    });

    it('should check if NaN is conisdered boolean', () => {
        const result = isBoolean(NaN);
        expect(result).to.be.eq(false);
    });

    it('should check if -1 is conisdered boolean', () => {
        const result = isBoolean(-1);
        expect(result).to.be.eq(false);
    });

    it('should check if 10 is conisdered boolean', () => {
        const result = isBoolean(10);
        expect(result).to.be.eq(false);
    });
});