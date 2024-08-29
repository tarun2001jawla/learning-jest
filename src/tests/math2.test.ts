import { subtract } from "../functions/math2";
// Asserts that the actual value is less than the expected value.

test("result should be less than 10", () => {
  expect(subtract(15, 6)).toBeLessThan(10);
});
