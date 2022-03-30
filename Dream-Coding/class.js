"use strict";
// Object-oriented programming
// class: template
// object: Instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor: 생성자, object를 만들 때 필요한 데이터 전달
  constructor(name, age) {
    // fields
    // 전달받은 데이터를 class에 존재하는 fields에 할당
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const hashin = new Person("hashin", 20);
console.log(hashin.name); // hashin
console.log(hashin.age); // 20
hashin.speak(); // hashin: hello!

// 2. Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  // 값 리턴
  get age() {
    return this._age;
  }
  // 값 설정
  set age(value) {
    // if (value < 0) {
    //    throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age); // 0

// 3. Fields (public, private)
// Too soon!
class Experiment {
  publicField = 2; // 클래스 외부에서 접근 가능
  #privateField = 0; // 클래스 내부에서만 접근 가능
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// Too soon!
// object 상관없이 class 자체에 연결
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // Overriding
  draw() {
    super.draw();
    // 부모의 메소드도 호출되고 그 뒤이어서 정의한 메소드 호출
    console.log("▲");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea()); // 400
const triangle = new Triangle(20, 20, "red");
triangle.draw();
// drawing red color of
// ▲
console.log(triangle.getArea()); // 200

// 6. Class checking: instanceOf
// return value : True , False
console.log(rectangle instanceof Rectangle); // True
console.log(triangle instanceof Rectangle); // False
console.log(triangle instanceof Triangle); // True
console.log(triangle instanceof Shape); // True
console.log(triangle instanceof Object); // True
// 어떤 object이든지 공통적으로 존재하는 method를 사용할 수 있다.
console.log(triangle.toString());
