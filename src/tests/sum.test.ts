import { findSum } from "../functions/sum";
/*Asserts that the actual value is strictly equal to the expected value (using ===).*/ 
test('add 1+2 to equal to 3', ()=>{
    expect(findSum(1,2)).toBe(3)
})