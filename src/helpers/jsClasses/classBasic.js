export const userObj = {
  name: 'John',
  age: 30,
  sayHi() {
    return this.name;
  },
};

// const user = { name: 'John' };
// const admin = { name: 'Admin' };

// function sayHi() {
//   console.log( this.name );
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();

// function makeUser() {
//   return {
//     name: 'John',
//     ref() {
//       return this;
//     }
//   };
// }
// const user1 = makeUser();
// console.log( user1.ref().name );

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

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.value += +prompt('Enter value: ', 0);
//   };
// }
// const accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);

// let id = Symbol.for("id");
// let idAgain = Symbol.for("id");
// console.log(`id === idAgain : ${id === idAgain}`);

// const sym = Symbol.for("name");
// const sym2 = Symbol.for("id");
// console.log(Symbol.keyFor(sym)); // name
// console.log(Symbol.keyFor(sym2)); // id

// const recipeMap = new Map([
//   ['cucumber', 500],
//   ['tomatoes', 350],
//   ['onion',    50]
// ]);
// for (const vegetable of recipeMap.keys()) {
//   console.log(vegetable);
// }
// for (const amount of recipeMap.values()) {
//   console.log(amount);
// }
// for (const entry of recipeMap) {
//   console.log(entry);
// }
// recipeMap.forEach((value, key, map) => {
//   console.log(`${key}: ${value} in ${map}`);
// })

// const set = new Set();
// const john = { name: "John" };
// const pete = { name: "Pete" };
// const mary = { name: "Mary" };
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);
// console.log(`Set size: ${set.size}`);
// for (const user of set) {
//   console.log(`User name from Set: ${user.name}`);
// }
// set.forEach((value, valueAgain, set) => {
//   console.log(value);
//   console.log(valueAgain);
//   console.log(set);
// });
// console.log(set.keys());
// console.log(set.values());
// console.log(set.entries());

// const visitsCountMap = new Map();
// function countUser(user) {
//   const count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }
// let john = {name: "John"};
// countUser(john);
// countUser(john);
// console.log(`John visits count: ${visitsCountMap.get(john)}`);
// // Now, john object should be garbage collected, but remains in memory, as it’s a key in visitsCountMap.
// // We need to clean visitsCountMap when we remove users, otherwise it will grow in memory indefinitely. Such cleaning can become a tedious task in complex architectures.
// john = null;
// // We can avoid it by switching to WeakMap instead:

// const visitsCountWeakMap = new WeakMap();
// function countUser(user) {
//   const count = visitsCountWeakMap.get(user) || 0;
//   visitsCountWeakMap.set(user, count + 1);
// }
// let john = {name: "John"};
// countUser(john);
// countUser(john);
// countUser(john);
// console.log(`John visits count: ${visitsCountWeakMap.get(john)}`);
// // Now we don’t have to clean visitsCountMap. 
// // After john object becomes unreachable, by all means except as a key of WeakMap, 
// // it gets removed from memory, along with the information by that key from WeakMap.
// john = null;

// const visitedSet = new WeakSet();
// let john = { name: "John" };
// const pete = { name: "Pete" };
// const mary = { name: "Mary" };
// visitedSet.add(john);
// visitedSet.add(pete);
// visitedSet.add(john);
// // visitedSet has 2 users now
// // check if John visited?
// console.log(visitedSet.has(john)); //true
// // check if Mary visited?
// console.log(visitedSet.has(mary)); //false
// john = null;
// // visitedSet will be cleaned automatically
// console.log(`visitedSet.has(john): ${visitedSet.has(john)}`);

// const prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };
// const doublePrices = Object.fromEntries(
//   // convert prices to array, map each key/value pair into another pair
//   // and then fromEntries gives back the object
//   Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// );
// console.log(doublePrices);

const salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
  "Mike": undefined,
};
function sumSalaries (salaries) {
  let sum = 0;
  for(const salary of Object.values(salaries)) {
    if (salary) {
      sum += salary;
    }
  }
  return sum;
}
console.log(sumSalaries(salaries));


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
