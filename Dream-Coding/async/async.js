// async & await
// - clear style of using promise
// - promise를 좀 더 간결하고 동기적으로 실행되는 것처럼 보이게 함
// - 동기식으로 코드를 순서대로 작성하는 것처럼 간편하게 해주는 api제공

// syntactic sugar
// - 기존에 존재하는 것 위에 간편하게 쓸 수 있는 api를 제공하는 것 ex) Class

// 1. async
// - Promise((resolve, reject)=> ...)를 사용하지 않고 function앞에 async를 붙이면
// - code block이 자동으로 promise로 바꿔준다.
async function fetchUser() {
  // do network request in 10 secs...
  return "hashin";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
// - async가 붙은 함수 안에서만 사용 가능
// - function delay: 정해진 ms를 지나면 resolve를 호출하는 promise가 전달
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}
// function getBanana() {
//   return delay(3000).then(() => "🍌");
// }

async function pickFruits() {
  // await 병렬처리
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

pickFruits().then(console.log);

// 3. useful Promise APIs
// Promise.all
// - Promise배열을 전달하게 되면 모든 Promise들이 병렬적으로 다 받을 때까지 모아줌
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

// Promise.race
// - 배열에 전달된 promise중 가장 먼저 값을 return하는 아이만 전달됨
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
