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

// const ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() { // shows the current step
//     console.log( this.step );
//     return this;
//   }
// };
// ladder.up().up().down().showStep().down().showStep();

// function UserFunc(name) {
//   this.name = name;
//   this.isAdmin = false;
// }
// const user2 = new UserFunc('Jack');
// console.log(user2.name);
// console.log(user2.isAdmin);
// console.log(user2);

// const obj = {};
// function A() { return obj; };
// function B() { return obj; };
// const a = new A();
// const b = new B();
// console.log( a == b); // true

// function Calculator1() {
//   this.read = function() {
//     this.a = +prompt('Enter value a: ', 0);
//     this.b = +prompt('Enter value b: ', 0);
//   };
//   this.sum = function() {
//     return this.a + this.b;
//   };
//   this.mul = function() {
//     return this.a * this.b;
//   };
// }
// const calculator1 = new Calculator1();
// calculator1.read();
// console.log('Sum=' + calculator1.sum());
// console.log('Mul=' + calculator1.mul());

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt('Enter value: ', 0);
  };
}
const accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);

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
