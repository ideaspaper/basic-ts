# TypeScript Basic

## Introduction

### Why TypeScript?

- Each and every value in JavaScript has a set of behaviors you can observe from running different operations.
- JavaScript only truly provides dynamic typing - **running** the code to see what happens.
- Most people don't like to get any sorts of **errors when running** their code - those are considered bugs! And when we write new code, we try our best to avoid introducing new bugs.

```js
const message = 'Hello world!';

console.log(message.toLowerCase());
message();
```

```js
// Somewhere in the deepest of node_modules
function fn(x) {
  return x.flip();
}

fn('Hello world!');
```

### Initializing a TypeScript Project

```
npm init -y
npm i typescript
npx tsc --init
```

### Compiling (Transpiling) TypeScript Code to JavaScript Code

```
npx tsc
npx tsc --watch
```

## Basic Types

### Primitive Typess

```ts
let a: string = 'Hello world!';
let b: number = 42;
let c: boolean = false;

a = 'Halo dunia!';
b = false; // Type 'boolean' is not assignable to type 'number'.
c = 42; // Type 'number' is not assignable to type 'boolean'.
```

### Arrays

```ts
const a: number[] = [42, 43, 44];
const aa: Array<number> = [42, 43, 44];
const b: string[] = ['a', 'b', 'c'];
const bb: Array<string> = ['a', 'b', 'c'];
const c: boolean[] = [true, false, true];
const cc: Array<boolean> = [true, false, true];
```

### Functions

```ts
function greet(name: string) {
  console.log(`Hello my name is ${name}`);
}

function add(a: number, b: number): number {
  return a + b;
}
```

### Type Inference

```ts
const a = [42, 43, 44];
const b = ['a', 'b', 'c'];
const c = [true, false, true];

function add(a: number, b: number) {
  return a + b;
}
```

### Contextual Typing

```ts
const names = ['Acong', 'Djoko', 'Sitorus'];
names.forEach((name) => {
  console.log(name.toUpperCase());
});
```

### Objects

```ts
const a: { key1: number, key2: string } = {
  key1: 42,
  key2: 'Fourty-two'
};

const b: { key1: number, key2?: string } = {
  key1: 42
};
```

### Union Types

```ts

```

## References

- [Object, {}, object](https://stackoverflow.com/questions/49464634/difference-between-object-and-object-in-typescript)
