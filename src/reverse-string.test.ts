import { expect, it } from "vitest";
import { reverseString } from "./reverse-string";

it("reverseString", () => {
  expect(reverseString("banane")).toBe("enanab");
});

it("reverseString", () => {
  expect(reverseString("BANANA")).toBe("ANANAB");
});

it("reverseString", () => {
  expect(reverseString("B4N4N3")).toBe("3N4N4B");
});
