import {
  User,
  userObj,
  twoFuncOneObj,
  //Calculator,
  //Accumulator,
} from '@/helpers/jsClasses/classBasic';

export default function ClassLessons() {
  const user = new User("John");

  twoFuncOneObj();

  // const calculator = new Calculator();
  // calculator.read();

  // const accumulator = new Accumulator(1);
  // accumulator.read();
  // accumulator.read();

  return (
    <>
      <hr />
      <h2>Class basic</h2>
      <p>{` Name from user instance: ${user.sayHi("John")}`}</p>
      <p>{` Age from userObj: ${userObj.age}`}</p>
      <p>{` a == b (must be true): ${twoFuncOneObj()}`}</p>
      <div>
        {/* <p>{`Sum= ${calculator.sum()}`}</p>
        <p>{`Mul= ${calculator.mul()}`}</p>*/}
      </div>
      <div>
        {/* <p>{`Accumulator value: ${accumulator.value}`}</p>*/}
      </div>
      <p>{` Say Hi from userObj: ${userObj.sayHi()}`}</p>

    </>
  );
}
