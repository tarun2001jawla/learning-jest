import { getTrueValue } from "../functions/truthy";
/*Asserts that the actual value is truthy 
(i.e., it evaluates to true in a boolean context).*/
test("value should be truthy", () => {
  expect(getTrueValue()).toBeTruthy();
});
