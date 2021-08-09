
var assert = require('assert')
const{checkBrackets}= require('./t19_brackets/js/script')
describe("checkBrackets", function () {

    it("checks the if in the string contains at least ) or (", function () {
        assert.equal(checkBrackets(")))238((("), 6);
        assert.equal(checkBrackets(")))238(()("), 5);
        assert.equal(checkBrackets(")))238"), 3);
        assert.equal(checkBrackets(")))238((()()))(())GFDF)()"), 4);
        assert.equal(checkBrackets("238"), -1);
    });

});