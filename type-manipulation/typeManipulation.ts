// Conditional Types: Define a conditional type IsString<T> that checks if a type T is a string. If T is string, return true, otherwise return false.
export type _isString<T> = T extends string ? true : false;

// Mapped Types: Create a mapped type Optional<T> that makes all properties of a type T optional.
export type makeOptional<T> = {
	[P in keyof T]?: T[P];
};

// Utility Types: Use TypeScript's built-in Pick utility type to create a new type that only includes selected properties from an existing type.
interface IPerson {
	name: string;
	age: number;
	surname: string;
}

const _Metin: Pick<IPerson, "name" | "age"> = {
	name: "Metin",
	age: 10,
};
