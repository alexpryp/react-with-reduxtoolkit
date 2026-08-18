import { User, userObj } from '@/helpers/jsClasses/classBasic';

export default function ClassLessons() {
  const user = new User("John");

  return (
    <>
      <hr />
      <h2>Class basic</h2>
      <p>{` Name from user instance: ${user.sayHi("John")}`}</p>
      <p>{` Age from userObj: ${userObj.age}`}</p>

    </>
  );
}
