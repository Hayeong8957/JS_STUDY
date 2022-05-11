"use strict";

// Promise is a JavaScript object for asynchronous operation.(비동기 수행)
// * State(상태): pending(operation수행중) -> fulfilled(operation완료) or rejected(operation문제발생)
// * Producer(원하는 데이터를 제공) vs Consumer(정보를 소비)

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files) => asynchronous
  console.log("doing something...");
  setTimeout(() => {
    // resolve("hashin");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
// * then: promise operation이 성공적으로 작동했을 때, resolve에서 전달된 값 및 원하는 기능 수행
// * catch: promise operation 에러가 발생했을 때, reject에서 받아온 값 수행
// * finally: promise 성공 or 에러 상관없이 무조건 마지막에 호출
promise //
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error: ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen)) // .then(getEgg)(
  .catch((error) => {
    return "🍗";
  }) // 중간 catch에 따라 결과 달라짐
  .then((egg) => cook(egg)) // .then(cook)
  .then((meal) => console.log(meal)) // .then(console.log)
  .catch(console.log);
