import {
  addOne,
  doubleOperation,
  pipe,
  pipeAsync,
  trace,
} from '@rockparty/functional-programming'

const numberToString = (x: number) => x.toString()
const stringToNumber = (s: string) => parseFloat(s)

const piped = pipe(numberToString, stringToNumber, addOne)

const pipedResult = piped(1)

console.log({ pipedResult })

// Async

const promisedAddOne = (x: number): Promise<number> =>
  Promise.resolve(addOne(x))

const pipedAsync = pipeAsync(
  trace<number>('before add one'),
  addOne,
  trace('after add one'),
  promisedAddOne,
  trace('after promissed add one'),
  addOne,
  doubleOperation(addOne),
  trace<number>('after add one'),
)

pipedAsync(1).then((pipedAsyncResult) => {
  console.log({ pipedAsyncResult })
})

// Type check

const typeError = pipe(
  (s: string) => s,
  (n: number) => n, // Type 'string' is not assignable to type 'number'.ts(2345)
)

const notAPromiseError = pipe(
  (s: string) => Promise.resolve(s),
  (s: string) => s, // Type 'Promise<string>' is not assignable to type 'string'.ts(2345)
)

const asyncTypeError = pipeAsync(
  (s: string) => Promise.resolve(s),
  (n: number) => n, // Type 'string' is not assignable to type 'number'.ts(2345)
)
