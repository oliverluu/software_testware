import ceil from "../src/ceil.js"
import chai from "chai"
const expect = chai.expect


describe('the ceil function', () => { 
    it('Should  compute `number` rounded up to `precision`. (Round up: the smallest integer greater than or equal to a given number.)', () => {
        const result = ceil(4.009);
        expect(result) == 5;
    });  
    it('Consider the precision of two decimal places', () => {
        const result = ceil(4.009,2);
        expect(result) == 4.01;
    });  
    it('Rounding is tested to two significant figures', () => {
        const result = ceil(40.789,-2);
        expect(result) == 50;
    });  
    it('Consider the precision of one decimal places', () => {
        const result = ceil(499.789,1);
        expect(result) == 499.9;
    });  
})