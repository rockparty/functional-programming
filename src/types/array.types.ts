/* eslint-disable @typescript-eslint/no-explicit-any */

export type ArrayLength<T extends any[]> = T['length']

export type ArrayMinOfOne<T> = [T, ...T[]]

export type RestLengthFromArray<T extends any[]> = T extends [
  any,
  ...infer Rest
]
  ? Rest['length']
  : 0

export type FirstItemFromArray<T extends any[]> = T extends []
  ? undefined
  : T[0]

export type LastItemFromArray<T extends any[]> = T extends []
  ? undefined
  : T[RestLengthFromArray<T>]

export type IncludeInArray<T extends any[], Elem> = [...T, Elem]

export type OmitFirstFromArray<T extends any[]> = T extends [any, ...infer Rest]
  ? Rest
  : undefined

export type UnboxedArray<T extends any[]> = T extends Array<infer U> ? U : never
