import { diff } from "../diff";

describe("diff", () => {
  it("should diff two null objects", () => {
    expect(diff(null, null)).toEqual({ common: null, left: null, right: null });
  });
});
// diff(1, 1); /*?*/
// diff(true, 1); /*?*/
// diff("a", null); /*?*/
// diff([1], []); /*?*/
// diff([1, 2], [2]); /*?*/
// diff([1, 2], [1]); /*?*/
// diff([[null]], [[null]]); /*?*/
// diff({ a: 1 }, { a: 2 }); /*?*/
// diff({ a: 1, b: 1 }, { a: 1 }); /*?*/
// diff({ a: 1 }, { a: 1, b: 1 }); /*?*/
// diff({ a: [1] }, { a: [1], b: 1 }); /*?*/
// diff({ a: [1, 2] }, { a: [1], b: 1 }); /*?*/
// diff([{ a: 1, b: 2 }], [{ a: 1 }]); /*?*/
