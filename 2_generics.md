# Generics

A type **generics** is a way to make defined type more usable, and defined (written) in a way similar to function.

For example, lets say we want to create an **object-like** type which has similar properties.

```ts
interface CommonProps {
  length: number;
  isPublic: boolean;
  created_at: number;
  updated_at: number;
}

interface StringData extends CommonProps {
  get: (entry: string) => string;
  set: (...entries: string[]) => boolean;
}

interface NumberData extends CommonProps {
  get: (entry: number) => number;
  set: (...entries: number[]) => boolean;
}
```

In example above, `StringData` and `NumberData` have same properties with minor differences in data type. That type definition can be simplified by create a generic type (ex: `Data`) with one parameter `T`.

```ts
interface Data<T> extends CommonProps {
  get: (entry: T) => T;
  set: (...entries: T[]) => boolean;
}

let stringData: Data<string>;
let numberData: Data<number>;
```

Generics can have default value too.

```ts
interface Data<T = string> extends CommonProps {
  get: (entry: T) => T;
  set: (...entries: T[]) => boolean;
}

let stringData: Data;
let numberData: Data<number>;
```

More examples on generics.

```ts
function genericFunc<T>(inp: T) { }

genericFunc<number>('foo'); // Argument of type 'string' is not assignable to parameter of type 'number'.
genericFunc<boolean>(false);
genericFunc([1, true, 'foo']); // type infered from usage
```

```ts
const arrFunc = <A>(...input: A[]): A[] => {
  return input;
};
const arrFuncRet1 = arrFunc<boolean>(true, true, false); // boolean[]
const arrFuncRet2 = arrFunc('google.com', 'bing.com', 'duckduckgo.com'); // string[]
```

```ts
type Television<T> = (message: T) => T;
type Monitor<T> = (message: T, refreshRate: number) => T;
type Display<U, V> = Television<U> | Monitor<V>;
```
