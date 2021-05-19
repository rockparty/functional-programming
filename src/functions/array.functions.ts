/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
  FirstItemFromArray,
  OmitFirstFromArray,
} from '@/types/array.types'

export const arrayOfMinOne = <T, A extends any[]>(v: T, ...a: A): [T, ...A] => [
  v,
  ...a,
]

export const arrayLength = <T extends any[]>(array: T): number => array.length

export const isArrayEmpty = <T extends any[]>(array: T): boolean =>
  arrayLength(array) === 0

export const omitFirstFromArray = <T extends any[]>(
  array: T,
): OmitFirstFromArray<T> | undefined => {
  if (isArrayEmpty(array)) return undefined
  const [, ...rest] = array
  return rest as OmitFirstFromArray<T>
}

export const pickFirstFromArray = <T extends any[]>(
  array: T,
): FirstItemFromArray<T> | undefined => {
  if (isArrayEmpty(array)) return undefined
  const [first] = array
  return first
}
