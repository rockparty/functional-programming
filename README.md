# Functional Programming

## Typed functional programming for javascript/typescript

### Requirements

Node.js

### Install

You can install '@rockparty/functional-programming' by entering this command

```
npm install @rockparty/functional-programming
```

### Example

```ts
import { pipe } from '@rockparty/functional-programming'

// functions
const addOne = (x: number): number => x + 1
const double = (x: number): number => x * 2

// compose
const piped = pipe(addOne, double) // (x + 1) * 2

// execute
const result = piped(1) // result = 4
```

with async-await:

```ts
import { pipeAsync } from '@rockparty/functional-programming'

// functions
const addOneAsync = (x: number): Promise<number> => Promise.resolve(x + 1)
const double = (x: number): number => x * 2

// compose
const pipedAsync = pipeAsync(addOneAsync, double) // (await (x + 1)) * 2

// execute
const result = await pipedAsync(1) // result = 4
```

with log:

```ts
import { pipe, trace } from '@rockparty/functional-programming'

// ...

const piped = pipe(
  trace('before addOne'),
  addOne,
  trace('after addOne'),
  double,
  trace('after double')
)(1)
//  before addOne: 1
//  after addOne: 2
//  after double: 4
```

ts type check:

```ts
pipe(
  (s: string) => s,
  (n: number) => n // Type 'string' is not assignable to type 'number'.ts(2345)
)

pipe(
  (s: string) => Promise.resolve(s),
  (s: string) => s // Type 'Promise<string>' is not assignable to type 'string'.ts(2345)
)

pipeAsync(
  (s: string) => Promise.resolve(s),
  (n: number) => n // Type 'string' is not assignable to type 'number'.ts(2345)
)
```

## License

Licensed under [MIT](./LICENSE).
