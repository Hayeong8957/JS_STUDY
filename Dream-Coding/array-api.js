"use strict";

// Q1. make a string out of an array
// Join(separator?: string): string;
// - Adds all the elements of an array separated by the specified separator string.
{
  const fruits = ["apple", "banana", "orange"];
  // 내 답안)
  // console.log(fruits.toString());
  const result = fruits.join("|");
  console.log(result);
}

// Q2. make an array out of a string
// Split(separator: string | RegExp(정규표현식), limit(리턴받을 배열 사이즈)?: number)
// - Split a string into substrings using the specified separator and return them as an array.
// - split() : 전체 문자열이 배열의 하나의 요소로 반환
// - split(separator) : 구분자 기준으로 배열 요소 반환
// - split(separator, limit) : limit으로 배열의 크기를 지정하여 특정 갯수만 반환
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(", ");
  const result2 = fruits.split(", ", 2);
  console.log(result);
  console.log(result2);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// reverse() : 원본 배열 자체 변환
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
// slice(start?: number, end?: number)
// - splice() : 원본 배열 자체 변환 vs slice() : 새 배열 만들어 연산
// - Returns a section of an array.
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
// find(predicate(callback함수), thisArg)
// - Returns the index of the first element in the array where predicate is true, and undefined otherwise.
// - 모든 요소 호출되었다가 true요소가 나오면 호출 멈추고 true요소 리턴
{
  // 내 답안)
  //   const result = students.filter((item) => {
  //     return item.score === 90;
  //   });
  //   console.log(result);
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
// filter
{
  // 내 답안)
  //   const result = students.filter((item) => {
  //     return item.enrolled === true;
  //   });
  //   console.log(result);
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// map
{
  // 내 답안)
  //   const result = students.map((item) => {
  //     return item.score;
  //   });
  //   console.log(result);
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// some(or연산) & every(and연산)
{
  // 내 답안)
  //   const result = students.some((item) => {
  //     return item.score < 50;
  //   });
  //   console.log(result);
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
// reduce : 값 누적
// - prev : 이전에 callback함수에서 리턴된 값이 전달됨
// - curr : 배열의 아이템을 순차적으로 전달받음
// reduceRight : 맨 오른쪽 배열의 값부터 돌아감
{
  // 내 답안)
  //   const studentScore = students.map((item) => {
  //     return item.score;
  //   });
  //   const result = studentScore.reduce((prev, cur) => {
  //     return prev + cur;
  //   }, 0);
  //   console.log(result);
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // 내 답안)
  //   const studentScore = students.map((item) => {
  //     return item.score;
  //   });
  //   console.log(studentScore.toLocaleString());
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // 내 답안)
  //   const studentScore = students.map((item) => {
  //     return item.score;
  //   });
  //   console.log(studentScore.sort().toLocaleString());
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
