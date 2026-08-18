export const userObj = {
  name: 'John',
  age: 30,
  sayHi() {
    return this.name;
  },
};

const user = { name: 'John' };
const admin = { name: 'Admin' };

function sayHi() {
  console.log( this.name );
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();

function makeUser() {
  return {
    name: 'John',
    ref() {
      return this;
    }
  };
}
const user1 = makeUser();
console.log( user1.ref().name );

// const calculator = {
//   a: 0,
//   b: 0,
//   read() {
//     this.a = +prompt('Enter a: ', 0);
//     this.b = +prompt('Enter b: ', 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };
// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );

const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() { // shows the current step
    console.log( this.step );
    return this;
  }
};
ladder.up().up().down().showStep().down().showStep();

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
