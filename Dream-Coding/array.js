"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]); // 마지막 인덱스

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for...of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// callback함수를 받아온다.
// fruits.forEach(function (fruit, index, array) {
//   console.log(fruit, index, array);
// });
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push("strawberry", "peach");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("strawberry", "lemon");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push("strawberry", "peach", "lemon");
console.log(fruits);
// fruits.splice(1); 지정한 인덱스부터 싹다 지움
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "apple", "watermelon");
console.log(fruits);

// combine two arrays
// combine items to add to the end of arrays
const fruits2 = ["pear", "coconut"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("watermelon"));
console.log(fruits.indexOf("coconut")); // -1
// includes
console.log(fruits.includes("watermelon"));
console.log(fruits.includes("coconut")); // false

// lastIndexOf
// 동일한 값이 들어있을 경우 가장 마지막에 있는 값의 인덱스 반환
console.clear();
fruits.push("apple");
console.log(fruits);
console.log(fruits.indexOf("apple")); // 첫번째에 있는 값의 인덱스 반환
console.log(fruits.lastIndexOf("apple"));
