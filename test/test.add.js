// JavaScript source code

const assert = require('assert');
const { expect } = require('chai');
const { add } = require('../src/add');

describe('the add function', () => {
    it('should add 2 numbers together', () => {
        const result = add(2, 2);
        expect(result).to.be.eq(4);
    });
})

