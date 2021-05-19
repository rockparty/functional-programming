/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
  ArrayMinOfOne,
  IncludeInArray,
  LastItemFromArray,
} from './array.types'
import type { Fn, FnOrAsyncFunc, AsyncFnReturnType } from './function.types'

export type PipeAsyncFns<Fns extends ArrayMinOfOne<Fn>> = Fns extends [Fn]
  ? Fns
  : Fns extends [...infer FirstItems, infer Last]
  ? Last extends Fn<infer Args, any>
    ? LastItemFromArray<FirstItems> extends Fn
      ? [AsyncFnReturnType<LastItemFromArray<FirstItems>>] extends Args
        ? Fns
        : IncludeInArray<
            FirstItems,
            Fn<[AsyncFnReturnType<LastItemFromArray<FirstItems>>], any>
          >
      : never
    : never
  : Fns

export type PipeAsyncReturnType<Fns extends ArrayMinOfOne<FnOrAsyncFunc>> =
  Promise<AsyncFnReturnType<LastItemFromArray<Fns>>>
