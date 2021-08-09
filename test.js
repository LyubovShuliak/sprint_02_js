
var expect = require('chai').expect
const{checkBrackets}= require('./t19_brackets/js/script')
describe("checkBrackets", function () {

    it("should return  6", function () {
       
        expect(checkBrackets(")))238(((")).to.equal(6);
        expect(checkBrackets(")))238(((")).to.equal(6);
        expect(checkBrackets(")))238(((")).to.equal(6);
        expect(checkBrackets(")))238(((")).to.equal(6);
        expect(checkBrackets(")))(238(((")).to.equal(7);
        expect(checkBrackets("))())238(((")).to.equal(6);
        expect(checkBrackets("))())238(((")).to.equal(6);
        expect(checkBrackets("))())238(((")).to.equal(6);
        expect(checkBrackets("))s(ddsdae))238(((")).to.equal(6);
        expect(checkBrackets("))())238(((")).to.equal(6);
        expect(checkBrackets("))()()0)238(((")).to.equal(6);
        expect(checkBrackets("))())238(((")).to.equal(6);
        expect(checkBrackets("))((())))238(((")).to.equal(6);
        expect(checkBrackets(null)).not.equal(7);
        expect(checkBrackets(NaN)).not.equal(8);
        expect(checkBrackets(1)).not.equal(9);
        expect(checkBrackets(undefined)).not.equal(10);
        expect(checkBrackets("aE%@@")).not.equal(11);
        expect(checkBrackets("))wqeq")).not.equal(12);
        expect(checkBrackets([1,2])).not.equal(6);
    });

});