import filter from "../src/filter.js"
import chai from "chai"
const expect = chai.expect

describe('the filter function', () => {

    const users = [
        { 'user': 'niilo', 'active' : true },
        { 'user': 'oliver', 'active' : true },
        { 'user': 'topias', 'active' : true },
        { 'user': 'paulos', 'active' : false },
        { 'user': 'eemeli', 'active' : true },
        { 'user': 'corey', 'active' : false },
        { 'user': 'jonatan', 'active' : true },
        { 'user': 'aarni', 'active' : true },
        { 'user': 'jerry', 'active' : false },
        { 'user': 'lasse', 'active' : false }
    ]

    it('should find all true values', () => {
        const result = filter(users, ({active}) => active);
        expect(result).eql([        
        { 'user': 'niilo', 'active' : true },
        { 'user': 'oliver', 'active' : true },
        { 'user': 'topias', 'active' : true },
        { 'user': 'eemeli', 'active' : true },
        { 'user': 'jonatan', 'active' : true },
        { 'user': 'aarni', 'active' : true }
    ])
});
});