import { throwError } from "../functions/error";

// Asserts that a function throws an error when called.
test("function should throw an error if called", () => {
  expect(() => throwError()).toThrow(
    "An error occurred while calling this function"
  );
});
