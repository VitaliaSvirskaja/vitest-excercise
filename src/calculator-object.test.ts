import { expect, it, describe } from "vitest";
import { calculator } from "./calculator-object";

describe("calculator", function () {
  describe("add", () => {
    it("should add two positive numbers", () => {
      expect(calculator.add(2, 4)).toBe(6);
    });
    it("should add two negative numbers", () => {
      expect(calculator.add(-2, -4)).toBe(-6);
    });

    it("should add two decimal numbers", () => {
      expect(calculator.add(2.5, 2.5)).toBe(5);
    });
  });

  describe("substract", () => {
    it("should substract two positive numbers", () => {
      expect(calculator.substract(2, 4)).toBe(-2);
    });
    it("should substract two negative numbers", () => {
      expect(calculator.substract(-2, -4)).toBe(2);
    });

    it("should substract two decimal numbers", () => {
      expect(calculator.substract(2.5, 2.5)).toBe(0);
    });

    describe("divide", () => {
      it("should divide two positive numbers", () => {
        expect(calculator.divide(2, 4)).toBe(0.5);
      });
      it("should divide two negative numbers", () => {
        expect(calculator.divide(-4, -2)).toBe(2);
      });

      it("should divide two decimal numbers", () => {
        expect(calculator.divide(2.5, 2.5)).toBe(1);
      });
      it("should divide one positive and one negative number", () => {
        expect(calculator.divide(-6, 3)).toBe(-2);
      });
    });
    describe("multiply", () => {
      it("should multiply two positive numbers", () => {
        expect(calculator.multiply(2, 4)).toBe(8);
      });
      it("should multiply two negative numbers", () => {
        expect(calculator.multiply(-4, -2)).toBe(8);
      });

      it("should multiply two decimal numbers", () => {
        expect(calculator.multiply(2.5, 2)).toBe(5);
      });
      it("should multiply one positive and one negative number", () => {
        expect(calculator.multiply(-6, 3)).toBe(-18);
      });
    });
  });
});
