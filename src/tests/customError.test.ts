import { customError } from "../functions/customError";
//Asserts that the object is an instance of a particular class or constructor.
test('should be instance of customError', ()=>{
    const error = new customError('An error occurred');
    expect(error).toBeInstanceOf(customError);
})