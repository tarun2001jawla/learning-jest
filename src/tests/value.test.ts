import { getNullValue } from "../functions/value";

//Asserts that the actual value is null.
test("value should be null", () => {
  expect(getNullValue()).toBeNull();
});

