import capitalize from "../src/capitalize.js"
import chai from "chai"
const expect = chai.expect


describe('the capitalize function', () => {
    it('should convert the first character of `string` to upper case and the remaining to lower case.', () => {
        const result = capitalize('PRODUCT');
        expect(result).to.be.eq('Product');
    });
    it('should capitalize `string` where first charachter is lower case and the remaining are upper case.', () => {
        const result = capitalize('pRODUCT');
        expect(result).to.be.eq('Product');
    });
    it('should capitalize string containing two parts with only lower case characters.', () => {
        const result = capitalize('niilo nieriä');
        expect(result).to.be.eq('Niilo nieriä');

    });
})
