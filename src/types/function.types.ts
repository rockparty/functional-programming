/* eslint-disable @typescript-eslint/no-explicit-any */

export type Fn<TArgs extends any[] = any[], TReturnType = any> = (
  ...args: TArgs
) => TReturnType

export type AsyncFn<TArgs extends any[] = any[], TReturnType = any> = Fn<
  TArgs,
  Promise<TReturnType>
>

export type FnArgs<TFn> = TFn extends Fn<infer Args, any> ? Args : never

export type FnOrAsyncFunc = Fn | AsyncFn

export type FnReturnType<TFn extends Fn> = TFn extends Fn<any, infer ReturnType>
  ? ReturnType
  : never

export type AsyncFnReturnType<TFn extends FnOrAsyncFunc> = TFn extends Fn<
  any,
  infer ReturnType
>
  ? ReturnType extends Promise<infer PReturnType>
    ? PReturnType extends Fn
      ? FnReturnType<PReturnType>
      : PReturnType
    : ReturnType
  : never

export type FnReducer = <TFn extends Fn>(
  fn: TFn,
  args: FnArgs<TFn>,
) => FnReturnType<TFn>

export type AsyncFnReducer = <TFn extends FnOrAsyncFunc>(
  fn: TFn,
  args: FnArgs<TFn>,
) => Promise<AsyncFnReturnType<TFn>>
