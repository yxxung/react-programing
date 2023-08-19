
// --------------------------------------------------------------------------
// 📌 [함수형 프로그래밍 개념 학습]
// --------------------------------------------------------------------------
// - 고차 함수 (higher-order function)
// - 커링 (curring function)
// - 클로저 (closure)
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 1. 인사를 건네는 greet 함수를 작성합니다.

// 1-1. 일반 함수
function greet(message, name) {
  return `${name} ${message}`;
}

// console.log(greet('반가워요', '승민님'));
// console.log(greet('신나요', '은빈님'));

// 1-2. 커링 / 클로저
function greetCurry(message) {
  return function greet(name) {
    return `${name} ${message}`;
  }
}


const niceToMeetGreet = greetCurry('반가워요');
const excitingGreet = greetCurry('신나요');

// console.log(niceToMeetGreet('승민'));
// console.log(niceToMeetGreet('은빈'));
// console.log(niceToMeetGreet('다인'));
// console.log(niceToMeetGreet('수완'));

// console.log(excitingGreet('승민'));
// console.log(excitingGreet('은빈'));
// console.log(excitingGreet('다인'));
// console.log(excitingGreet('수완'));

// --------------------------------------------------------------------------
// 2. 친구 이름(3명 이상)을 포함하는 배열을 작성합니다.
const friendNames = '승민 은빈 다인 수완 범쌤 야무쌤 슬비쌤'.split(' ');

const greetMessages = friendNames.map(excitingGreet);

// --------------------------------------------------------------------------
// 3. 인사말과 함께 친구 이름을 불러봅니다.

const log = (name) => console.log(name);

greetMessages.forEach(log);
