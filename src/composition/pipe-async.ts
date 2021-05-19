import type { ArrayMinOfOne } from '@/types/array.types'
import type {
  AsyncFnReducer,
  FnArgs,
  FnOrAsyncFunc,
} from '@/types/function.types'
import type {
  PipeAsyncFns,
  PipeAsyncReturnType,
} from '@/types/pipe-async.types'
import { execAsyncFn } from '@/functions/function.functions'

const reduceFnAsync = async <
  Fns extends ArrayMinOfOne<FnOrAsyncFunc>,
  Reducer extends AsyncFnReducer,
>(
  fns: Fns,
  reducer: Reducer,
  firstArgs: FnArgs<Fns[0]>,
): PipeAsyncReturnType<Fns> => {
  const [firstFn, ...restOfFns] = fns
  let args = await firstFn(...firstArgs)
  for (const fn of restOfFns) {
    args = await reducer(fn, args)
  }
  return args
}

export const pipeAsync =
  <Fns extends ArrayMinOfOne<FnOrAsyncFunc>>(...fns: PipeAsyncFns<Fns>) =>
  (...args: FnArgs<Fns[0]>): PipeAsyncReturnType<Fns> =>
    reduceFnAsync(fns, execAsyncFn, args)
