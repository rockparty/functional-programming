/* eslint-disable @typescript-eslint/no-explicit-any */

import type { KeyTypeOfMap, ValueTypeOfMap } from '@/types'
import { immutable, truthyOrFallback } from './common.functions'

export const cloneMap = <T extends Map<any, any>>(map: T): T =>
  immutable(new Map(map)) as T

export const undefinedOrCloneMap = <T extends Map<any, any>>(
  map: T | undefined,
): T | undefined => (map ? cloneMap(map) : undefined)

export const getMapValue = <
  T extends Map<any, any>,
  K extends KeyTypeOfMap<T>,
  F extends ValueTypeOfMap<T>,
>(
  map: T,
  key: K,
): F | undefined => immutable(map.get(key))

export const mapValueOrFallback = <
  T extends Map<any, any>,
  K extends KeyTypeOfMap<T>,
  F extends NonNullable<ValueTypeOfMap<T>>,
>(
  map: T,
  key: K,
  fallback: F,
): F => truthyOrFallback(getMapValue(map, key), fallback)

export const pipeMapValueOrFallback =
  <T extends Map<any, any>>() =>
  <K extends KeyTypeOfMap<T>, F extends NonNullable<ValueTypeOfMap<T>>>(
    key: K,
    fallback: F,
  ) =>
  (map: T): F =>
    mapValueOrFallback(map, key, fallback)

export const setMapValue = <
  T extends Map<any, any>,
  K extends KeyTypeOfMap<T>,
  F extends ValueTypeOfMap<T>,
>(
  map: T,
  key: K,
  value: F,
): T => cloneMap(map.set(key, value))
