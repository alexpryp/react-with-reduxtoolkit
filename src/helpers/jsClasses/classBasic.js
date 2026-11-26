export const userObj = {
  name: 'John',
  age: 30,
};

export class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return this.name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log('Name is too short.');
      return;
    }

    this._name = value;
  }
}


export function twoFuncOneObj() {
  const obj = { variable: 'var' };

  function A() { return obj };
  function B() { return obj };

  const a = new A();
  const b = new B();

  return a == b;
}

export function Calculator() {
  this.a = 0;
  this.b = 0;

  this.read = function() {
    this.a = +prompt('Enter A value:', '0');
    this.b = +prompt('Enter B value:', '0');
  }

  this.sum = function () {
    return this.a + this.b;
  }

  this.mul = function () {
    return this.a * this.b;
  }
}

export function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt('Enter a new value: ', '0');
  }
}
