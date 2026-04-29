"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sumWithOptionalDivision;
function sumWithOptionalDivision(numbers, divisor) {
    const sum = numbers.reduce((acc, element) => acc + element, 0);
    return divisor ? sum / divisor : sum;
}
//# sourceMappingURL=index2.js.map