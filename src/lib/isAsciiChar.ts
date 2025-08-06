export function isAsciiChar(value: unknown): value is string {
    return (
        typeof value === 'string' &&
        value.length === 1 &&
        /^[a-zA-Z0-9]$/.test(value)
    )
}
