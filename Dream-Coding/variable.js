// 1. Use strict
// added in ES5
// use this for valina Javascript
// whole-script strict mode syntax
"use strict";

// 2. Variable
// let (added in ES6)
let globalName = "global name";
{
  let name = "hashin";
  console.log(name);
  name = "hello";
  console.log(name);
}
console.log(name); // Block scope안에 선언된 변수는 출력 X
console.log(globalName); // 전역 변수는 출력 O

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope

console.log(age); // undefined
age = 4;
console.log(age); // 4
var age;

{
  age = 4;
  var age;
}
console.log(age); //4

// 3. Constants
// favor immutable data type always for a few reasons;
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function(함수도 변수에 할당이 가능)
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53 ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`); // value: hello brendan, type: string
const helloBob = `hi ${brendan}!`; // template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // value: hi brendan! type: string

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`); // value: true, type: boolean
console.log(`value: ${test}, type: ${typeof test}`); // value: false, type: boolean

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`); // value: null, type: object

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`); // value: undefined, type: undefined

// symbol, create unique identifiers for objects
// map이나 자료구조에서의 고유식별자, 동시자발적인 코드에서 우선순위 주고싶을 때
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
// 동일한 심볼 만들 때
const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(gsymbol1 === gsymbol2); // true
// symbol을 출력할 때 그냥 출력 시 error, .description이용해서 string 변환해서 출력
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // value: id, type: symbol

// object, real-life object, data structure
const hashin = { name: "hashin", age: 20 };

// 5. Dynamic typing: dynamically typed language
// 선언할 때 타입 선언X, 프로그램이 동작할 때 할당된 값에 따라서 타입이 바뀜
let text = "hello";
console.log(text.charAt(0)); // h

console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = "8" + "2";
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number
console.log(text.charAt(0)); // error
