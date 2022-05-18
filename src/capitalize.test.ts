import { expect, it } from "vitest";
import { capitalize } from "./capitalize";

it("capitalize", () => {
  expect(capitalize("banane")).toBe("Banane");
});

it("capitalize", () => {
  expect(capitalize("Banane")).toBe("Banane");
});

it("capitalize", () => {
  expect(capitalize("BANANE")).toBe("Banane");
});

it("capitalize", () => {
  expect(capitalize("banan3")).toBe("Banan3");
});
