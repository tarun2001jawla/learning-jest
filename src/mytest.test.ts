import { calculator } from "./calculator";

describe('calculator',()=>{
    it('should call multiply when adding two numbers', ()=>{
        const multiplySpy = jest.spyOn(calculator, 'multiply');
        const addSpy = jest.spyOn(calculator, 'add');
        const res = calculator.multiply(2,3);
        const res2 = calculator.add(2,3);
          
        expect(addSpy).toHaveBeenCalledWith(2,3);
        expect(multiplySpy).toHaveBeenCalledWith(2,3);
        expect(res2).toBe(5);
        expect(res).toBe(6);

        multiplySpy.mockRestore();
    })
})