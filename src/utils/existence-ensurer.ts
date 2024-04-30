/**
 * @throws
 */
export function ensureExists<T extends {}>(value: T | undefined | null, message?: string): T {
    if (value === undefined) {
        throw new Error(message ?? "Value is undefined");
    }

    if (value === null) {
        throw new Error(message ?? "Value is null");
    }

    return value;
}
