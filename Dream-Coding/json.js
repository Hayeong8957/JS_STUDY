"use strict";
// JSON
// Javascript Object Notation
/** 유용한 JSON 사이트
 * 1. JSON Diff
 *  : 서버로 요청했을 때 첫번째로 받아온 데이터와
 *    두번째로 받아온 데이터의 차이점이 뭔지 모를 때 사용
 * 2. JSON Beautifier
 *  : 서버에서 받아온 json복붙시 format망가지는 경우 방지
 * 3. JSON Parser
 *  : json타입을 object형식으로 표기되는 모습을 확인하고 싶을 때
 * 4. JSON validator
 *  : 유효한 json데이터인지 확인, json이 이상할 때 json문법 확인
 */

// 1. Object to JSON(serialize)
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

// array
json = JSON.stringify(["apple", "banana"]);
console.log(json);

// object
// - 함수는 object에 있는 데이터가 아니므로 제외
// - js자체 특별한 데이터도 json에서 제외됨
const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  //   Symbol: Symbol("id"),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

// 원하는 property만 뽑아서 통제 가능
json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

// 세밀하게 통제하고자 할 때 callback함수를 사용
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "hashin" : value;
});
console.log(json);

// 2. JSON to Object(Deserialize)
// parse(JSON)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); TypeError; is not a function

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate());
// Error; birthDate는 string자체로 obj에 할당되어있기 때문
console.log(obj.birthDate); // 제대로 출력

// parse reviver 사용시 세밀하게 통제 가능
const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj2.birthDate.getDate()); // 제대로 출력
