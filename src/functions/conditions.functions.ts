import { immutable } from './common.functions'

export const not = (condition: boolean): boolean => immutable(!condition)

export const and = (
  first: boolean,
  second: boolean,
  ...rest: boolean[]
): boolean => immutable([first, second, rest].every((c) => c === true))

export const someTrue = (
  first: boolean,
  second: boolean,
  ...rest: boolean[]
): boolean => immutable([first, second, rest].some((c) => c === true))

export const allFalse = (
  first: boolean,
  second: boolean,
  ...rest: boolean[]
): boolean => not(and(first, second, ...rest))

export const matchOrFallback = <T, F>(
  condition: boolean,
  ifMatch: T,
  fallback: F,
): T | F => immutable(condition ? ifMatch : fallback)
