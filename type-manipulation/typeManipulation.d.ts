export type _isString<T> = T extends string ? true : false;
export type makeOptional<T> = {
    [P in keyof T]?: T[P];
};
//# sourceMappingURL=typeManipulation.d.ts.map