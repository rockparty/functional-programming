import { execFn } from '@/functions/function.functions'
import type { ArrayMinOfOne } from '@/types/array.types'
import type { Fn, FnArgs, FnReducer } from '@/types/function.types'
import type { PipeReturnType, PipeFns } from '@/types/pipe.types'

const reduceFn = <Fns extends ArrayMinOfOne<Fn>, Reducer extends FnReducer>(
  fns: Fns,
  reducer: Reducer,
  firstArgs: FnArgs<Fns[0]>,
): PipeReturnType<Fns> => {
  const [firstFn, ...restOfFns] = fns
  let args = firstFn(...firstArgs)
  for (const fn of restOfFns) {
    args = reducer(fn, args)
  }
  return args
}

export const pipe =
  <Fns extends ArrayMinOfOne<Fn>>(...fns: PipeFns<Fns>) =>
  (...args: FnArgs<Fns[0]>): PipeReturnType<Fns> =>
    reduceFn(fns, execFn, args)
