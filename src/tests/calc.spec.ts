import { Add } from "@/calc";

describe("test add function", () => {
  it("should return 15 for add(10,5)", () => {
    expect(Add(10, 4)).toBe(14);
  });
it("should return 5 for add(2,3)", () => {
    expect(Add(2, 3)).toBe(5);
  });
});