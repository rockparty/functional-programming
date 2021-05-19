/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { flipFn } from './function.functions'

export const trace =
  <TArgs>(label: string) =>
  (args: TArgs): TArgs => {
    console.log(`${label}: ${args}`)
    return args
  }

export const flippedTrace = flipFn(trace)
