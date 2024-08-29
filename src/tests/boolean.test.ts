import { isTrue } from "../functions/boolean";

//Used to invert the matcher’s meaning.
test("should not be false ", () => {
  expect(isTrue()).not.toBe(false);
});
