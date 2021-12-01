import get from "../src/get.js"
import chai from "chai"
const expect = chai.expect


describe('the get function', () => { 
    const object = { 'tuote': [{ 'vaihtoehto': { 'hinta': 15.99 } }] }
    it('Should get the value at `path` of `object`', () => {
        const result = get(object, 'tuote[0].vaihtoehto.hinta')
        expect(result).to.be.eq(15.99);
    });  
    it('Should get the value at `path` of `object` different path form', () => {
        const result = get(object,['tuote','0','vaihtoehto','hinta'])
        expect(result).to.be.eq(15.99);
    });  
    it(' Tests if the resolved value is `undefined`, the `defaultValue` is returned in its place.', () => {
        const result = get(object,'tuote.vaihtoehto.hinta','default')
        expect(result).to.be.eq('default');
    });  

})