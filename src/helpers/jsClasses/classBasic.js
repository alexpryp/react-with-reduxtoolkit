export let userObj = {
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
