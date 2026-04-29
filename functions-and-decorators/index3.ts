// index3.ts

export function LogMethodCalls(constructor) {
  for (const methodName of Object.getOwnPropertyNames(constructor.prototype)) {
    if (methodName === "constructor") continue;

    const originalMethod = constructor.prototype[methodName];

    if (typeof originalMethod !== "function") continue;

    constructor.prototype[methodName] = function (...args: unknown[]) {
      console.log(`Method called: ${methodName}`);
      console.log("Arguments:", args);

      return originalMethod.apply(this, args);
    };
  }

  return constructor;
}

@LogMethodCalls
export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }

    return a / b;
  }
}

// Example usage
const calculator = new Calculator();

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));