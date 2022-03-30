// 1. String concatenation
console.log("my" + "cat"); // my cat
console.log("1" + 2); // 12
console.log(`string literals: 1+2=${1 + 2}`); // string literals: 1+2=3

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
// postIncrement: 3, counter: 3
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
// postIncrement: 3, counter: 4

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less then or equal
console.log(10 > 6); // greater then
console.log(10 >= 6); // greater then or equal

// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// 연산이 무겁거나, 함수를 논리연산자에서 제일 뒷쪽으로 배치
// 처음 true이면 그대로 연산 끝
function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("★");
  }
  return true;
}

// && (and), finds the first falsy value
console.log(`or: ${value1 && value2 && check()}`);

// && : null check할 때도 간편하게 사용됨
// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullableObject != null) {
  nullableObject.something;
}

// !(not)
console.log(!value1); // false

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const hashin1 = { name: "hashin" };
const hashin2 = { name: "hashin" };
const hashin3 = hashin1;
console.log(hashin1 == hashin2); // false: 각각 다른 ref가 참조되고 있으므로
console.log(hashin1 === hashin2); // false: ref가 다르므로
console.log(hashin1 === hashin3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === fasle); //false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "hashin" ? "yes" : "no");

// 9. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 10. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}
// while: 3
// while: 2
// while: 1

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);
// do while: 0

// break(end loop), continue(skip now step, and then keep going next step)
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i <= 10; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
