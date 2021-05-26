/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Constructor } from '@/types'
import { immutable } from './common.functions'

export const objectKeys = <T extends Record<string, any>>(
  obj: T,
): Array<keyof T> => immutable(Object.getOwnPropertyNames(obj))

export const objectEntries = <T extends Record<string, any> | Map<any, any>>(
  obj: T,
): [string, any][] => immutable(Object.entries(obj))

export const objectValues = <
  T extends Record<string, any>,
  V extends T extends Record<string, infer U> ? U : never,
>(
  obj: T,
): V[] => immutable(Object.values(obj))

export const isInstanceOf = <T extends Constructor>(
  obj: unknown,
  ctor: T,
): obj is T => immutable(obj instanceof ctor)
