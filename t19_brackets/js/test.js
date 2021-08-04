describe("checkBrackets", function () {

    it("checks the if in the string contains at least ) or (", function () {
        assert.equal(checkBrackets(")))238((("), 6);
    });

});