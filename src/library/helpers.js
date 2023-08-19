export const createElem = (tagName) => document.createElement(tagName);

export const createText = (content) => document.createTextNode(content);

export const getElem = (selector, context = document) =>
  context.querySelector(selector);

export const addClass = (className, element) => {
  element.classList.add(className);
  return element;
};

export const removeClass = (className, element) => {
  element.classList.remove(className);
  return element;
};

export const toggleClass = (className, element) => {
  element.classList.toggle(className);
  return element;
};

export const append = (node, element) => {
  element.append(node);
  return element;
};
