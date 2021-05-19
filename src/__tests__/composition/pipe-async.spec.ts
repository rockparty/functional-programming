import { pipeAsync } from '@/composition'
import { setTimeout } from 'timers/promises'

describe('PipeAsync', () => {
  const makeSut = () => {
    return {
      sut: pipeAsync,
      expected: 'foo',
      toString: (x: unknown): string => Object(x).toString(),
      toUpperCase: (s: string): Promise<string> =>
        setTimeout(100, s.toUpperCase()),
      toLowerCase: (s: string): string => s.toLowerCase(),
    }
  }

  it('should return expected value by single function', async () => {
    const { sut, expected, toString } = makeSut()
    const piped = sut(toString)
    const result = piped(expected)
    await expect(result).resolves.toEqual(expected)
  })

  it('should return expected value by multiple functions', async () => {
    const { sut, expected, toString, toUpperCase, toLowerCase } = makeSut()
    const piped = sut(toString, toUpperCase, toLowerCase)
    const result = piped(expected)
    await expect(result).resolves.toEqual(expected)
  })
})
