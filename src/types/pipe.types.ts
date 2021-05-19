/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
  ArrayMinOfOne,
  IncludeInArray,
  LastItemFromArray,
} from './array.types'
import type { Fn, FnReturnType } from './function.types'

export type PipeFns<Fns extends ArrayMinOfOne<Fn>> = Fns extends [Fn]
  ? Fns
  : Fns extends [...infer FirstItems, infer Last]
  ? Last extends Fn<infer Args, any>
    ? LastItemFromArray<FirstItems> extends Fn<any, infer TReturnType>
      ? [TReturnType] extends Args
        ? Fns
        : IncludeInArray<FirstItems, Fn<[TReturnType], any>>
      : never
    : never
  : Fns

export type PipeReturnType<Fns extends ArrayMinOfOne<Fn>> = FnReturnType<
  LastItemFromArray<Fns>
>
