// --------------------------------------------------------------------------
// 📌 [함수형 프로그래밍 개념 학습]
// --------------------------------------------------------------------------
// - 함수 구성 (function composition)
//   - 함수 로직을 구성하여 새로운 함수를 만드는 것입니다.
//   - ex) slice() 함수는 "전달된 사과"를 "잘게 조각내는 기능"입니다.
//         bake() 함수는 "전달된 조각난 사과"로 "애플파이를 만들어내는 기능"입니다.
//         slice() 함수의 결과를 바로 bake() 함수에 전달할 수 있다면 어떨까요?
//         함수 구성은 그러한 일을 할 수 있게 합니다.
//         const makePie = compose(bake, slice);
//         const applePie = makePie(apple);
// --------------------------------------------------------------------------

// removeClass('oops!!', addClass('oops!!', addClass('wow functional!!', append(createText('hi there'), createElem('div')))))

// 2006 - jQuery
// Object-oriented Programming
// eslint-disable-next-line no-undef
// $('div')
//   .text('hi there')
//   .addClass('wow functional!!')
//   .addClass('oops!!')
//   .removeClass('oops!!');

/* -------------------------------------------------------------------------- */
import { replace, split, length, compose, pipe } from 'ramda';

const sentense =
  '함수 구성은 "함수 로직을 구성하여 새로운 함수를 만드는 것"입니다.';

let result = sentense.replace(/"|'/g, '').split(' ').length;

console.log(result);

// --------------------------------------------------------------------------
// 문장에서 인용 부호(")를 삭제합니다.
const replaceQuots = replace(/"|'/g, '');

// --------------------------------------------------------------------------
// 문장에서 단어를 추춣해 배열로 만듭니다.
const splitSpace = split(' ');

// --------------------------------------------------------------------------
// 추출한 단어로 구성된 배열의 원소 갯수를 구합니다.
// const getArrayCount = length

// --------------------------------------------------------------------------
// Ramda 라이브러리를 사용해 각 함수를 구성(compose) 합니다.
// const myFn = compose(
//   length,
//   splitSpace,
//   replaceQuots,
// );

// const myFn = compose( length, splitSpace, replaceQuots );

// console.log(myFn(sentense));
// console.log(myFn('정말로 감동입니다!'));
// console.log(myFn('고맙습니다 감사합니다!'));

// console.log('R: ', result);

// --------------------------------------------------------------------------
// 구성 방향을 역순(L → R)으로 하는 파이프(pipe)를 사용해봅니다.

const calcWords = pipe(
  replaceQuots,
  splitSpace,
  length
);

console.log(calcWords(sentense));
console.log(calcWords('Performs right-to-left function composition using transforming function. The last function may have any arity; the remaining functions must be unary. Unlike compose, functions are passed in an array.'))
console.log(calcWords('Added in v0.1.0'));