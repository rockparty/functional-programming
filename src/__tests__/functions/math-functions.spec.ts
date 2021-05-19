import { pipe } from '@/composition'
import { addOne, doubleOperation, minusOne } from '@/functions'

describe('MathFunctions', () => {
  it('should return expected by compose functions', () => {
    const piped = pipe(
      addOne, // 1 + 1 = 2
      doubleOperation(addOne), // (2 + 1) * 2 = 6
      doubleOperation(minusOne), // (6 - 1) * 2 = 10
    )
    const result = piped(1)
    expect(result).toEqual(10)
  })
})
