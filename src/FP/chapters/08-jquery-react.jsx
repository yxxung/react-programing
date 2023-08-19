// --------------------------------------------------------------------------
// 📌 [imperative (jQuery) vs. declarative (Functional Programming)]
// --------------------------------------------------------------------------
// - 명령형 vs. 선언형 프로그래밍 스타일
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 선언형 프로그래밍 스타일
// - React 라이브러리 (https://react.dev)
// - React 모방 라이브러리 (lib/y9.js)

/* @jsx h */
import { createElement as h, createRoot, useState } from '@/library/y9';

const initialHeadline = 'React 모방 라이브러리';

function App() {
  const [headline, setHeadline] = useState(initialHeadline);
  const [count, setCount] = useState(10);

  return (
    <div>
      <h2>{headline}</h2>
      <button type="button" onClick={() => {
        setCount(count + 1);
        setHeadline(headline.includes(initialHeadline) ? 'React Mimic Library' : initialHeadline);
      }}>
        {count}
      </button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);

// --------------------------------------------------------------------------
// 명령형 프로그래밍 스타일
// - DOM 스크립트 (Vanilla)
// - jQuery 라이브러리 (https://jquery.com)
jQuery(($) => {
  const initialHeadline = 'jQuery 라이브러리';
  let headline = initialHeadline;
  let count = 10;

  $('#jQuery')
    .html('<div />')
    .find('div')
    .append(`<h2>${headline}</h2>`)
    .append(`<button type="button">${count}</button>`)
    .on('click', 'button', (e) => {
      headline = headline === initialHeadline ? 'jQuery Library' : initialHeadline;
      $(e.target).text(++count).prev().text(headline);
    });
});
