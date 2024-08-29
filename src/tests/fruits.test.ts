import { fruits,name } from "../functions/fruits";

//Asserts that an array or string contains the expected value.
test('fruits array should contain mango',()=>{
    expect(fruits).toContain("mango"); 
})

test('name string should contain aru',()=>{
    expect(name).toContain("aru"); 
})