import { and } from './conditions.functions'

export const isObjectFrozen = (obj: unknown): boolean =>
  immutable(Object.isFrozen(obj))

export const immutable = <T>(obj: T): T => {
  if (Object.isFrozen(obj)) return obj
  Object.values(obj).forEach((prop) => immutable(prop))
  return Object.freeze(obj)
}

export const isUndefined = (obj: unknown): obj is undefined =>
  immutable(obj === undefined)

export const isNull = (obj: unknown): obj is null => immutable(obj === null)

export const isTruthy = <T>(obj: unknown): obj is NonNullable<T> =>
  and(obj !== undefined, obj !== null)

export const truthyOrFallback = <T, F extends NonNullable<T>>(
  value: T | undefined,
  fallback: F,
): F => immutable(isTruthy(value) ? (value as F) : fallback)
