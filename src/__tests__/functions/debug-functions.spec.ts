import { pipe } from '@/composition'
import { flippedTrace, trace } from '@/functions'

describe('DebugFunctions', () => {
  it('should do type check using trace', () => {
    const piped = pipe(
      trace<string>('before log'),
      (s: string) => s + 'bar',
      trace<string>('after log'),
    )
    expect(piped('foo')).toEqual('foobar')
  })
})
