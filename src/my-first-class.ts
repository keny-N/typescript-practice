export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name:${this.name},age:${this.age}`;
  }
}

let taro: Person = new Person('taro', 32);
// let hanako = new Person();
console.log(taro.profile());
