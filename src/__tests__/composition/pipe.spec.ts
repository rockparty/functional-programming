import { pipe } from '@/composition'

describe('Pipe', () => {
  const makeSut = () => {
    return {
      sut: pipe,
      expected: 'foo',
      toString: (x: unknown): string => Object(x).toString(),
      toUpperCase: (s: string): string => s.toUpperCase(),
    }
  }

  it('should return expected value by single function', () => {
    const { sut, expected, toString } = makeSut()
    const piped = sut(toString)
    const result = piped(expected)
    expect(result).toEqual(expected)
  })

  it('should return expected value by multiple functions', () => {
    const { sut, expected, toString, toUpperCase } = makeSut()
    const piped = sut(toString, toUpperCase)
    const result = piped(expected)
    expect(result).toEqual(expected.toUpperCase())
  })
})
