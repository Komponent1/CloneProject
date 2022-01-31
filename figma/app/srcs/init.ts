import menus from './config/menu';
import { createElem } from './utils';

const makeList = (wrapper: HTMLDivElement, data): void => {
  const icon = createElem('div', 'menu_icon');
  icon.style.backgroundImage = data.src;
  const context = createElem('ul', 'menu_context');
  data.li.forEach(e => {
    const li = createElem('li', 'menu_li');
    li.innerText = e.name;
    if (e.li) {
      const innerContext = createElem('ul', 'menu_inner_context');
      e.li.forEach(i_e => {
        const i_li = createElem('li', 'menu_li');
        i_li.innerText = i_e.name;
        innerContext.appendChild(i_li);
      })
      li.appendChild(innerContext);
    }
    context.appendChild(li);
  });
  icon.appendChild(context);
  wrapper.appendChild(icon);
}
const makeIcon = (wrapper: HTMLDivElement, data): void => {
  const icon = createElem('div', 'menu_icon');
  icon.style.backgroundImage = data.src;
  const context = createElem('ul', 'menu_context');
  data.forEach(e => {
    const li = createElem('li', 'menu_li');
    li.innerHTML = e.name;
    context.appendChild(li);
  });
  icon.appendChild(context);
  wrapper.appendChild(icon);
}
const makeOnetab = (wrapper: HTMLDivElement, data): void => {
  const icon = createElem('div', 'menu_icon');
  icon.style.background = data.src;
  wrapper.appendChild(icon);
}

export const Menu = (): void => {
  const header = document.getElementById('header');
  const wrapper = document.createElement('div');

  menus.forEach(({type, data}, i) => {
    if (type === 'list') {
      makeList(wrapper, data);
    } else if (type === 'icon') {
      makeIcon(wrapper, data);
    } else if (type === 'onetab') {
      makeOnetab(wrapper, data);
    }
  });

  header.appendChild(wrapper);
}
