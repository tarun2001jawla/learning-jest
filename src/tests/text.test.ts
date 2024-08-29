import { text } from "../functions/text";

test("test should match the given pattern", () => {
  expect(text).toMatch('Hello');
});
