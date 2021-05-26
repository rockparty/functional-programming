/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
  FirstItemFromArray,
  OmitFirstFromArray,
} from '@/types/array.types'
import { immutable } from './common.functions'

export const arrayOfMinOne = <T, A extends any[]>(v: T, ...a: A): [T, ...A] =>
  immutable([v, ...a])

export const arrayLength = <T extends any[]>(array: T): number =>
  immutable(array.length)

export const isArrayEmpty = <T extends any[]>(array: T): boolean =>
  immutable(array.length === 0)

export const isArrayNotEmpty = <T extends any[]>(array: T): boolean =>
  !isArrayEmpty(array)

export const firstItemFromArray = <T extends any[]>(
  array: T,
): FirstItemFromArray<T> | undefined =>
  isArrayEmpty(array) ? undefined : array[0]

export const omitFirstFromArray = <T extends any[]>(
  array: T,
): OmitFirstFromArray<T> | undefined => {
  if (isArrayEmpty(array)) return undefined
  const [, ...rest] = array
  return immutable(rest as OmitFirstFromArray<T>)
}

export const arrayUnion = <
  T extends Array<any>,
  V extends T extends Array<infer U> ? U : never,
>(
  first: V[],
  second: V[],
  ...rest: V[]
): V[] => immutable(new Array<V>(...first, ...second, ...rest))

export const alwaysAsArray = <T, O extends T extends Array<infer U> ? U : T>(
  obj: T,
): O[] => immutable(Array.isArray(obj) ? obj : new Array<O>(obj as O))
