const sum = require("./sum");
test('Adds 1 + 2 to equal to 3', () => {
    expect(sum(1,2)).toEqual(4);
});