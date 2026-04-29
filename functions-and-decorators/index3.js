"use strict";
// index3.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
exports.LogMethodCalls = LogMethodCalls;
function LogMethodCalls(constructor) {
    for (const methodName of Object.getOwnPropertyNames(constructor.prototype)) {
        if (methodName === "constructor")
            continue;
        const originalMethod = constructor.prototype[methodName];
        if (typeof originalMethod !== "function")
            continue;
        constructor.prototype[methodName] = function (...args) {
            console.log(`Method called: ${methodName}`);
            console.log("Arguments:", args);
            return originalMethod.apply(this, args);
        };
    }
    return constructor;
}
let Calculator = class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return a / b;
    }
};
exports.Calculator = Calculator;
exports.Calculator = Calculator = __decorate([
    LogMethodCalls
], Calculator);
// Example usage
const calculator = new Calculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
//# sourceMappingURL=index3.js.map