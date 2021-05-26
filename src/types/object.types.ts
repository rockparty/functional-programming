/* eslint-disable @typescript-eslint/no-explicit-any */

export type Constructor<Args extends any[] = any[], T = any> = new (
  ...args: Args
) => T
