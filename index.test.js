const fizzBuzz = require("./index.js");

test("if input is 1, output is 1", () => {
    const input = 1;
    const result = fizzBuzz(input);
    expect(result).toBe(1);
});

test("if input is 2, output is 2", () => {
  const input = 2;
  expect(fizzBuzz(input)).toBe(2);
  });

test("if input is 3, output is 'Fizz'", () => {
    const input = 3;
    expect(fizzBuzz(input)).toBe("Fizz");
})