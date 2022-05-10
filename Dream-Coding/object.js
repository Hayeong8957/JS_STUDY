// objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // "object literal" syntax
const obj2 = new Object(); // "object constructor" syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const hashin = { name: "hashin", age: 24 };
print(hashin);

// Javascrip는 동적으로 타입이 런타임때 결정되는 언어
hashin.hasJob = true; // 뒤늦게 객체에 추가 가능
console.log(hashin.hasJob);

delete hashin.hasJob;
console.log(hashin.hasJob); // 삭제도 가능하다.

// 2. Computed properties
// Key should be always string
console.log(hashin.name); // 코딩하는 순간, 그 키에 해당하는 값을 받아오고 싶을 때
console.log(hashin["name"]);
// []를 이용해 object안의 변수를 string 형태로 접근 가능 => computed properties
// 정확하게 어떤 키가 필요한지 모를때, 런타임에서 결정될 때 사용
hashin["hasJob"] = true;
console.log(hashin.hasJob);

function printValue(obj, key) {
  console.log(obj.key); // undefined
  console.log(obj[key]); // hashin
}
printValue(hashin, "name");
// 동적으로 키를 받아와야하는 경우 유용

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = makePerson("hashin", 20);
console.log(person4);
function makePerson(name, age) {
  return {
    name, // name: name,
    age, // age: age,
    // property value hand short기능으로 생략 가능
  };
}

// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log("name" in hashin); // true
console.log("age" in hashin); // true
console.log("random" in hashin); // false
console.log(hashin.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in hashin) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for(let i = 0; i< array.length; i++) {
//     console.log(array[i]);
// }
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "hashin", age: "20" };
const user2 = user;
// user2에 user의 ref가 들어있음
user2.name = "coder";
console.log(user); // user의 name이 coder로 출력됨

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// other way
const user4 = {};
Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big
