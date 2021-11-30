// const assert = import('assert');
// var chai = import("chai");
import add from "../src/add.js"
import chai from "chai"
const expect = chai.expect

// const { add } = import("../src/add.js");
// const { expect } = import('chai');

describe('the add function', () => {
    it('should add 2 numbers together', () => {
        const result = add(2, 2);
        //assert.equal(result, 4);
        expect(result).to.be.eq(4);
    });
});