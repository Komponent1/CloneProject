const createElem = (type: string, className: string): HTMLElement => {
  const elem = document.createElement(type);
  elem.classList.add(className);

  return elem;
}

export default createElem;