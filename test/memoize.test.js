import memoize from "../src/memoize.js"
import chai from "chai"
const expect = chai.expect

describe('the memoize function', () => {
    it('Should create a function that memoizes the result of `func`', () => {
        const object = { 'a': 1, 'b': 2 }
        const result = memoize(object);
        expect(result).to.be.eq([1, 2]);
    });
});