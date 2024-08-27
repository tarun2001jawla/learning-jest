import { myFunction } from "./myFunction";
import * as utils from './utils'

jest.mock('./utils')

describe('myFunction',()=>{
    it('returns the length of the data', async  ()=>{
        const mockData = utils.fetchData as jest.Mock;

        mockData.mockResolvedValue([{ id: 1 }, { id: 2 }, { id: 3}])
        const length = await myFunction('https://api.example.com/data')
        expect(length).toBe(3)
    })
})