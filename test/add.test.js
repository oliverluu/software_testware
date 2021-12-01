import add from "../src/add.js"
import chai from "chai"
const expect = chai.expect

describe('the add function', () => {
    it('should add 2 numbers together', () => {
        const result = add(2, 2);
        expect(result).to.be.eq(4);
    });
    it('should add 2 negative numbers together', () => {
        const result = add(-2, -2);
        expect(result).to.be.eq(-4);
    });
});