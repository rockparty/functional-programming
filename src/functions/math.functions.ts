/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Fn } from '@/types/function.types'

export const sum = (x: number, y: number): number => x + y
export const subtract = (x: number, y: number): number => x - y

export const addOne = (x: number): number => sum(x, 1)
export const minusOne = (x: number): number => subtract(x, 1)

export const multiply = (x: number, y: number): number => x * y
export const double = (x: number): number => multiply(x, 2)

export const doubleOperation =
  <TArgs extends any[]>(fn: Fn<TArgs, number>) =>
  (...args: TArgs): number =>
    fn(...args) * 2

export const sumDoubled = doubleOperation(sum)
export const subtractDoubled = doubleOperation(subtract)
