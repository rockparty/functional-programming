/* eslint-disable @typescript-eslint/no-explicit-any */

export type KeyTypeOfMap<T> = T extends Map<infer U, any> ? U : never

export type ValueTypeOfMap<T> = T extends Map<any, infer U> ? U : never
