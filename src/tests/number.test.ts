import { numbers } from "../functions/number";
test("numbers array should have length equal to 5", () => {
  expect(numbers).toHaveLength(5);
});
