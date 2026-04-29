"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Pure Functions: Define a pure function add(a: number, b: number): number that returns the sum of two numbers.
const _add = (a, b) => a + b;
// Immutability: Define an immutable data structure readonlyArray as a readonly array of numbers.
const _readonlyArray = [1, 2, 3, 4, 5];
// Higher-Order Function: Define a higher-order function mapArray that takes an array of numbers and a function, and applies the function to each element of the array.
function _mapArray(_number, _func) {
    _number.forEach((num) => {
        _func(num);
    });
}
// Currying: Implement a curried function multiply(a: number): (b: number) => number that multiplies two numbers.
const _multiply = (a) => (b) => a + b;
// Function Composition: Create a function compose that composes two functions together.
function a(value) {
    return value ** 2;
}
function b(value) {
    return value + 2;
}
const _compose = (value) => a(b(value));
//# sourceMappingURL=functionalProgramming.js.map