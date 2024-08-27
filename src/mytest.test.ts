import { calculator } from "./calculator";

describe('calculator',()=>{
    it('should call multiply when adding two numbers', ()=>{
        const multiplySpy = jest.spyOn(calculator, 'multiply');
        const res = calculator.multiply(2,3);
        expect(multiplySpy).toHaveBeenCalledWith(2,3);
        expect(res).toBe(6);

        multiplySpy.mockRestore();
    })
})