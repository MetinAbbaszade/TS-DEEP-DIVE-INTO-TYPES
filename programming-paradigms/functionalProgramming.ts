// Pure Functions: Define a pure function add(a: number, b: number): number that returns the sum of two numbers.
const _add = (a: number, b: number): number => a + b;

// Immutability: Define an immutable data structure readonlyArray as a readonly array of numbers.
const _readonlyArray: readonly number[] = [1, 2, 3, 4, 5];

// Higher-Order Function: Define a higher-order function mapArray that takes an array of numbers and a function, and applies the function to each element of the array.
function _mapArray(_number: number[], _func: (number: number) => void) {
	_number.forEach((num) => {
		_func(num);
	});
}

// Currying: Implement a curried function multiply(a: number): (b: number) => number that multiplies two numbers.
const _multiply =
	(a: number) =>
	(b: number): number =>
		a + b;

// Function Composition: Create a function compose that composes two functions together.
function a(value: number) {
	return value ** 2;
}
function b(value: number) {
	return value + 2;
}
const _compose = (value: number) => a(b(value));
