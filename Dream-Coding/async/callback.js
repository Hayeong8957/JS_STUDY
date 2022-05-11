"use strict";

// Javascript is synchronous.(동기적)
// Execute the code block in order after hoisting.
// 호이스팅 된 이후로 코드가 하나씩 동기적으로 실행이됨
// hoisting: var, function declaration들이 자동적으로 제일 위로 올라가는 것
console.log("1"); // 동기
setTimeout(() => console.log("2"), 1000); // 비동기
console.log("3"); // 동기

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello")); // 동기

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000); // 비동기

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "hashin" && password === "hello") ||
        (id === "bomnal" && password === "2022")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "hashin") {
        onSuccess({ name: "hashin", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role.`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
