const fizzBuzz = require("./index.js");

test("if input is 1, output is 1", () => {
    const input = 1;
    const result = fizzBuzz(input);
    expect(result).toBe(1);
});
