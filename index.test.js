const { spawn } = require("child_process");
const path = require("path");
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
});

test("if input is 5, output is 'Buzz'", () => {
    const input = 5;
    expect(fizzBuzz(input)).toBe("Buzz");
});

test('if input is 6, output is "Fizz"', () => {
    const input = 6;
    expect(fizzBuzz(input)).toBe("Fizz");
});

test('if input is 10, output is "Buzz"', () => {
    const input = 10;
    expect(fizzBuzz(input)).toBe("Buzz");
});

test('if input is 15, output is "FizzBuzz "', () => {
    const input = 15;
    expect(fizzBuzz(input)).toBe("FizzBuzz");
});
