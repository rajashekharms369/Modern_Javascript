const fizzbuzz = require("./fizzbuzz");

describe('fizzbuzz', () => {
    it('should be a function', () => {
        expect(typeof fizzbuzz).toEqual('function');
    });

    it("should return the number if it is not divisible by either 3 or 5", () =>{
        expect(fizzbuzz(1)).toEqual(1);
        expect(fizzbuzz(13)).toEqual(13);
        expect(fizzbuzz(17)).toEqual(17);
    });

});
console.log("Hello world")
console.log("Hello world");