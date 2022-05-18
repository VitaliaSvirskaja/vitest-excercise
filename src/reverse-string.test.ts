import { expect, it, describe } from "vitest";
import { reverseString } from "./reverse-string";

describe("reverseString", function () {
  it("should reverse lowercase string", () => {
    expect(reverseString("banane")).toBe("enanab");
  });

  it("should reverse uppercase string", () => {
    expect(reverseString("BANANA")).toBe("ANANAB");
  });

  it("should reverse string with numbers", () => {
    expect(reverseString("B4N4N3")).toBe("3N4N4B");
  });
});
