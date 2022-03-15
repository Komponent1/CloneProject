import { tMenu } from "../../types.d";

export const menu: tMenu[] = [
  {
    className: 'createbtn',
    src: '',
    url: '/repl/creates/c',
    text: 'Create',
    state: {},
    styles: { textAlign: 'center', background: '#6BB5FF', fontSize: '0.9em' }
  },
  {
    className: 'upgradebtn',
    src: '',
    url: '/repl/upgrade',
    text: 'Upgrade',
    styles: { textAlign: 'center', boxShadow: '0 0 0 1px inset #AFB1B3', fontSize: '0.9em' }
  },
  {
    className: 'normal',
    src: '',
    url: '/repl',
    text: 'Home',
  },
  {
    className: 'normal',
    src: '',
    url: '/repl/myrepl',
    text: 'My Repls',
  }
];
