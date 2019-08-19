import { isJsonMap, isJsonArray } from "../types";

describe("types", () => {
  describe("isJsonMap", () => {
    it("should return false for primitive type", () => {
      expect(isJsonMap(1)).toBe(false);
      expect(isJsonMap("string")).toBe(false);
    });
    it("should return false for nullable data", () => {
      expect(isJsonMap(null)).toBe(false);
      expect(isJsonMap(undefined as any)).toBe(false);
    });

    it("should return false for array", () => {
      expect(isJsonMap([])).toBe(false);

      class Foo extends Array {}
      const foo = new Foo();
      expect(isJsonMap(foo)).toBe(false);
    });

    it("should return true for object", () => {
      expect(isJsonMap({})).toBe(true);
    });
  });
  describe("isJsonArray", () => {
    it("should return false for primitive type", () => {
      expect(isJsonArray(1)).toBe(false);
      expect(isJsonArray("string")).toBe(false);
    });
    it("should return false for nullable data", () => {
      expect(isJsonArray(null)).toBe(false);
      expect(isJsonArray(undefined as any)).toBe(false);
    });

    it("should return false for object", () => {
      expect(isJsonArray({})).toBe(false);
    });

    it("should return true for array", () => {
      expect(isJsonArray([])).toBe(true);

      class Foo extends Array {}
      const foo = new Foo();
      expect(isJsonArray(foo)).toBe(true);
    });
  });
});
