// --------------------------------------------------------------------------
// 📌 [Ramda 라이브러리]
// --------------------------------------------------------------------------
// - https://ramdajs.com
// --------------------------------------------------------------------------

import { curry } from 'ramda';


const friends = '승민 은빈 다인 수완 동균 선용 치현 규민 소이 현주 규정 명화 수빈 현주 소희 동호 명현 이호 민성 진주'.split(' ');

// --------------------------------------------------------------------------
// 일반 함수 → 커링 함수
let greet = curry((greeting, name) => `${greeting} ${name}`);


// --------------------------------------------------------------------------
// 전문화(specialize) 함수 생성
const happyNewYearGreet = greet('올 해도 행복하길!');
const morningGreet = greet('좋은 아침!!');
const afternoonGreet = greet('맛있는 런치 타임 가져~')
const eveningGreet = greet('우아한 밤이되길!')


// --------------------------------------------------------------------------
// 고차 함수 map 활용
const friendHappyNewYearGreeting = friends.map(happyNewYearGreet);
const friendMorninigGreeting = friends.map(morningGreet);
const friendAfternoonGreeting = friends.map(afternoonGreet);
const friendEveningGreeting = friends.map(eveningGreet);

friendHappyNewYearGreeting.forEach((greetMessage) => console.log(greetMessage));