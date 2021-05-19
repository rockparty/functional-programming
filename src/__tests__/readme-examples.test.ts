import { pipe, pipeAsync } from '@/composition'
import { trace } from '@/functions'

describe('README examples', () => {
  describe('Pipe', () => {
    it('should return 4', () => {
      const addOne = (x: number): number => x + 1
      const double = (x: number): number => x * 2

      // compose
      const piped = pipe(addOne, double) // (x + 1) * 2

      // execute
      const result = piped(1) // result = 4

      expect(result).toEqual(4)
    })
  })

  describe('PipeAsync', () => {
    it('should return 4', async () => {
      const addOneAsync = (x: number): Promise<number> => Promise.resolve(x + 1)
      const double = (x: number): number => x * 2

      // compose
      const pipedAsync = pipeAsync(addOneAsync, double) // (await (x + 1)) * 2

      // execute
      const result = await pipedAsync(1) // result = 4

      expect(result).toEqual(4)
    })
  })
})
