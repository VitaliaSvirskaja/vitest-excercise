import { expect, describe, it } from "vitest";
import { arrayAnalyzer } from "./analyze-array";

describe("analyzeArray", () => {
  it("should get the average of the Array", () => {
    expect(arrayAnalyzer.average([1, 8, 3, 4, 2, 6])).toBe(4);
  });

  it("should get the average of an empty array", () => {
    expect(arrayAnalyzer.average([])).toBe(0);
  });

  it("should get the smallest number on an array", () => {
    expect(arrayAnalyzer.min([1, 8, 3, 4, 2, 6])).toBe(1);
  });

  it("should get the smallest number on an array", () => {
    expect(arrayAnalyzer.min([])).toBe(0);
  });
  it("should get the smallest number on an array", () => {
    expect(arrayAnalyzer.min([-1, -2, -3, 2, 3, 4])).toBe(-3);
  });

  it("should get the largest number on an array", () => {
    expect(arrayAnalyzer.max([2, 3, 4])).toBe(4);
  });
  it("should get the largest number on an array", () => {
    expect(arrayAnalyzer.max([-2, -3, -4, 2, 3, 4])).toBe(4);
  });

  it("should get the largest number on an array", () => {
    expect(arrayAnalyzer.max([])).toBe(0);
  });

  it("should get the length on an array", () => {
    expect(arrayAnalyzer.length([-1, 2, 3, 4, 5, 6])).toBe(6);
  });

  it("should get the length on an array", () => {
    expect(arrayAnalyzer.length([])).toBe(0);
  });
});
