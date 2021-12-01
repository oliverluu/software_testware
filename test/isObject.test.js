
import chai from "chai"
import isObject from "../src/isObject.js";
const expect = chai.expect

describe('the isObject function', () => {
    it('should check if empty object is considered an object', () => {
        const result = isObject({});
        expect(result).to.be.eq(true);
    });

    it('should check if array is considered an object', () => {
        const result = isObject([1, 2, 3]);
        expect(result).to.be.eq(true);
    });

    it('should check if null is considered an object', () => {
        const result = isObject(null);
        expect(result).to.be.eq(false);
    });

    it('should check if a string is considered an object', () => {
        const result = isObject(new String('abc'));
        expect(result).to.be.eq(true);
    });

    it('should check if a "true" is considered an object', () => {
        const result = isObject(true);
        expect(result).to.be.eq(false);
    });
});