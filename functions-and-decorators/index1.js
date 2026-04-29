"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function func1(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a;
    }
    if (typeof a === "number" && typeof b === "number") {
        return b;
    }
    throw new Error("Both arguments must be either strings or numbers.");
}
console.log(func1("Metin", "Abbas"));
console.log(func1(1, 2));
//# sourceMappingURL=index1.js.map