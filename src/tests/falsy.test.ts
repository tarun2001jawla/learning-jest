import { getFalseValue } from "../functions/falsy";

/* Asserts that the actual value is falsy (i.e., it evaluates to false in a boolean context). */
test("it should return false", () => {
  expect(getFalseValue()).toBeFalsy();
});
