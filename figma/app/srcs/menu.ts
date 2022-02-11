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

  icon.addEventListener('click', () => {
    if (context.style.display === 'block') {
      context.style.display = 'none';
    } else {
      context.style.display = 'block';
    }
  });
}
const makeOnetab = (wrapper: HTMLDivElement, data): void => {
  const icon = createElem('div', 'menu_icon');
  icon.style.background = data.src;
  wrapper.appendChild(icon);
}

export const Menu = (): void => {
  const header = document.getElementById('header');
  const wrapper = createElem('div', 'menu') as HTMLDivElement;

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

  const icons = Array.from(wrapper.children);
  icons.forEach(icon => icon.addEventListener('click', e => {
    e.stopPropagation();
    for (let i = 0; i < icons.length; i++) {
      if (icons[i].children.length === 0) continue;
      else icons[i].children[0].style.display = 'none';
    }
    if (icon.children.length !== 0) {
      icon.children[0].style.display = 'block';
    }
  }));

  window.addEventListener('click', e => {
    if (e.target.classList.contains('menu_icon') 
        || e.target.classList.contains('menu_context')) return;
    
    for (let i = 0; i < icons.length; i++) {
      for (let i = 0; i < icons.length; i++) {
        if (icons[i].children.length === 0) continue;
        else icons[i].children[0].style.display = 'none';
      }
    }
  })
}
