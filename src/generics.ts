export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(123));
console.log(echo<string>('hum'));
console.log(echo<boolean>(false));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}
console.log(new Mirror<number>(1323).echo());
console.log(new Mirror<string>('hello,generics').echo());
console.log(new Mirror<boolean>(true).echo());
