import at from "../src/at.js"
import chai from "chai"
const expect = chai.expect


describe('the at function', () => { 
    it('Should create an array of values corresponding to `paths` of `object`', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4, { 'd' : 5 }, 6 ]}
        const result = at(object,['a[2].d', 'a[3]']);
        expect(result) == [5, 6];
    });  
    it('Testing and array when values are strings', () => {
        const object = { 'a': [{ 'b': 'carey'}, 'price'] }
        const result = at(object,['a[0].b', 'a[1]']);
        expect(result) == ['carey', 'price'];
    });  
})