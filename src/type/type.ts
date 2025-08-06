export type Char<Type> = Type extends `${infer _FirstChar}${infer Rest}`
    ? Rest extends ''
        ? Type
        : never
    : never
