import type { UnboxedArray } from '@/types'
import type {
  Fn,
  FnArgs,
  AsyncFnReturnType,
  FnOrAsyncFunc,
  FnReturnType,
} from '@/types/function.types'

export const execFn = <TFn extends Fn>(
  fn: TFn,
  args: FnArgs<TFn>,
): FnReturnType<TFn> => fn(args)

export const execAsyncFn = async <TFn extends FnOrAsyncFunc>(
  fn: TFn,
  args: FnArgs<TFn>,
): Promise<AsyncFnReturnType<TFn>> => fn(args)

export const flipFn =
  <TFn extends Fn>(fn: TFn) =>
  <TFnArgs extends FnArgs<TFn>>(...a: TFnArgs) =>
  <ArgsB extends FnReturnType<TFn>>(...b: ArgsB): UnboxedArray<ArgsB> =>
    fn(a)(b)
