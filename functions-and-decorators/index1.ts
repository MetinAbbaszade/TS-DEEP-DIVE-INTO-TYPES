function func1(a: string, b: string): string;
function func1(a: number, b: number): number;

function func1(a: string | number, b: string | number): string | number {
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
