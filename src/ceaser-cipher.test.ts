import { ceaserCipher } from "./ceaser-cipher";
import { expect, describe, it } from "vitest";

describe("ceasarCipher", () => {
  it("should return a caracter shifted about 2 place in the alphabet", () => {
    expect(ceaserCipher("abc", 2)).toBe("cde");
  });

  it("should wrap from z to a", () => {
    expect(ceaserCipher("z", 1)).toBe("a");
  });

  it("should wrap from xyz to abc", () => {
    expect(ceaserCipher("xyz", 3)).toBe("abc");
  });

  it("should wrap from ABC to BCD", () => {
    expect(ceaserCipher("ABC", 1)).toBe("BCD");
  });

  it("should wrap from XYZ to ABC", () => {
    expect(ceaserCipher("XYZ", 3)).toBe("ABC");
  });

  it("should wrap from Z to J", () => {
    expect(ceaserCipher("Z", 10)).toBe("J");
  });
  it("should wrap from AbC to BcD", () => {
    expect(ceaserCipher("AbC", 1)).toBe("BcD");
  });
  it("should wrap from Hello! to Ifmmp!", () => {
    expect(ceaserCipher("Hello!", 1)).toBe("Ifmmp!");
  });

  it("should wrap from Hello& to Ifmmp&", () => {
    expect(ceaserCipher("Hello&", 1)).toBe("Ifmmp&");
  });

  it("should wrap from aA!& to zZ!", () => {
    expect(ceaserCipher("aA!", -1)).toBe("zZ!");
  });

  it("should wrap from a to b", () => {
    expect(ceaserCipher("a", 52)).toBe("a");
  });
});
