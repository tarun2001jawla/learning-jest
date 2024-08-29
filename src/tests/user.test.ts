import { user } from "../functions/user";

// Asserts that an object has a property with a specific key and value.
test("user should have an name property", () => {
  expect(user).toHaveProperty("name", "Tarun");
});
