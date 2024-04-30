import { describe, test, expect } from "vitest";
import { ensureExists } from "../utils";

describe("ensureExists", () => {
    test("should return the value if it exists", () => {
        const game: string | undefined = "Dragon's Dogma 2";

        expect(ensureExists(game)).toBeTypeOf("string");
    });

    test("should throw the undefined error if the value is undefined", () => {
        const game = undefined;

        expect(() => ensureExists(game)).toThrowError("Value is undefined");
    });

    test("should throw the null error if the value is null", () => {
        const game = null;

        expect(() => ensureExists(game)).toThrowError("Value is null");
    });
});
