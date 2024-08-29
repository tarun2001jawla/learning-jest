/*Asserts that the actual value is 
deeply equal to the expected value.
 This is useful for checking objects and arrays. */

import { user } from "../functions/data";

test("user object should have correct properties", () => {
  expect(user).toEqual({ name: "Tarun", age: 23 });
});
