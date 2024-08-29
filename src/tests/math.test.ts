import { multiply } from "../functions/math";
//Asserts that the actual value is greater than the expected value.
test("result should be greater than 5", () => {
  expect(multiply(2, 3)).toBeGreaterThan(5);
});
