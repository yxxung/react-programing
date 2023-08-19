// --------------------------------------------------------------------------
// 📌 [프로그래밍 패러다임]
// --------------------------------------------------------------------------
// - 명령형, 선언형 프로그래밍 비교
// - 함수, 객체 지향 프로그래밍 비교
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 명령형 프로그래밍

const courses = [
  {
    id: 1,
    name: ' imperative programming',
  },
  {
    id: 2,
    name: 'declarative programming ',
  },
];

const updateCourses = [];

for (let i = 0, l = courses.length; i < l; i = i + 1) {
  const course = { ...courses[i] };
  course.name = course.name.trim();
  updateCourses.push(course);
}

for (let i = 0, l = updateCourses.length; i < l; ++i) {
  const course = updateCourses[i];
  course.name = course.name.toUpperCase();
}

for (let i = 0, l = updateCourses.length; i < l; ++i) {
  const course = updateCourses[i];
  course.name = course.name.replace(/\s+/g, '_');
}


// --------------------------------------------------------------------------
// 선언형 프로그래밍

const subjects = [
  {
    id: 1,
    name: ' imperative programming',
  },
  {
    id: 2,
    name: 'declarative programming ',
  },
];


function toTrim(object) {
  const o = { ...object };
  o.name = o.name.trim();
  return o;
}

function toUpperCase(object) {
  const o = { ...object };
  o.name = o.name.toUpperCase();
  return o;
}

function toUnderscore(object) {
  const o = { ...object };
  o.name = o.name.replace(/\s+/g, '_');
  return o;
}

const updateSubjects = subjects.map(toTrim).map(toUpperCase).map(toUnderscore);

// --------------------------------------------------------------------------
// JavaScript 프로그래밍 패러다임
// → 함수(function)를 사용해 구현합니다.

function createCounterButton(element, { count = 0, step = 1, update = null } = {}) {
  if (!element) {
    throw new Error('element가 문서에 존재하지 않습니다.');
  }

  const setCount = (newCount) => {
    count = newCount;
    element.textContent = count;
  }

  element.addEventListener('click', () => {
    setCount(count + step);
    update?.(count);
  });

  setCount(count);

  return element;
}

const counter = createCounterButton(
  document.createElement('button'),
  {
    count: 1,
    update(count) {
      document.querySelector('.functional').textContent = String(count);
    }
  }
);

document.getElementById('demo')?.append(counter);


// --------------------------------------------------------------------------
// JavaScript 프로그래밍 패러다임
// → 클래스(class)를 사용해 구현합니다. (참고: https://mzl.la/3QrTKlF)

class CounterButton {
  #element = null;
  #config = {};
  #updateCallback = null;
  #clearIntervalId = 0;

  static defaultOptions = {
    count: 0,
    step: 1,
  }

  constructor(element, props = {}) {
    if (!element) {
      throw new Error('element가 문서에 존재하지 않습니다.');
    }

    this.#element = element;
    this.#init(props);
  }

  #init(props) {
    this.setConfig(props);
    this.#updateDOM();
    this.#bindEvent();
  }

  #bindEvent() {
    this.#element.addEventListener('click', () => {
      this.setCount();
      this.#updateCallback?.(this.#config.count);
    });
  }

  #updateDOM() {
    const { count } = this.#config;
    this.#element.textContent = count;
  }

  setConfig(userConfig = {}) {
    this.#config = { ...CounterButton.defaultOptions, ...userConfig };
  }

  setCount(newCount) {
    const { count, step } = this.#config;

    this.setConfig({
      ...this.#config,
      count: newCount ?? count + step,
    });

    this.#updateDOM();
  }

  update(callback) {
    this.#updateCallback = callback;
  }

  play(fps = 1000 / 1) {
    this.#clearIntervalId = setInterval(() => {
      const { count, step } = this.#config;
      this.setCount(count + step);
      this.#updateDOM();
    }, fps);
  }

  stop() {
    clearInterval(this.#clearIntervalId);
  }

  mount(container) {
    container.append(this.#element);
  }
}

const counterButton = new CounterButton(
  document.createElement('button'),
  {
    count: 2,
    step: 2
  }
);

counterButton.update((count) => {
  document.querySelector('.object-oriented').textContent = String(count);
})

counterButton.mount(document.getElementById('demo'));


// --------------------------------------------------------------------------
// 웹 컴포넌트(Web Components) API
// → 웹 컴포넌트를 사용해 구현합니다. (참고: https://mzl.la/3YjFdu9)

class CounterButtonComponent extends HTMLElement {
  #config = {
    count: 0,
    step: 1,
  }

  constructor() {
    super();
    this.#init();
  }

  #init() {
    const userConfig = {
      count: Number(this.getAttribute('count')),
      step: Number(this.getAttribute('step')) || 1,
    };

    this.#config = { ...this.#config, ...userConfig };
  }

  #bindEvent(e) {
    if (e.target.matches('button')) {
      this.#setCount();
      this.render();
      // 참고: https://developer.mozilla.org/ko/docs/Web/Events/Creating_and_triggering_events
      this.dispatchEvent(new CustomEvent('update', { detail: {
        count: this.#config.count
      } }));
    }
  }

  #setCount() {
    const { count, step } = this.#config;
    this.#config.count = count + step;
  }

  connectedCallback() {
    // console.log('connected');
    this.render();
    this.addEventListener('click', (e) => this.#bindEvent(e));
  }

  disconnectedCallback() {
    // console.log('disconnected');
    this.removeEventListener('click', (e) => this.#bindEvent(e));
  }

  render() {
    const { count } = this.#config;
    this.innerHTML = `<button type="button">${count}</button>`;
  }
}

customElements.define('counter-button', CounterButtonComponent);

const counterButtonEl = document.querySelector('counter-button');

counterButtonEl.addEventListener('update', ({ detail: { count } }) => {
  document.querySelector('.web-component').textContent = String(count);
});