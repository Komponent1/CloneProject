const datas = {
  search: ['create', 'run', 'get user name'],
  lang: ['c', 'c++', 'javascript'],
  user: {
    id: 'seolim',
    own: [
      {
        name: 'Komp',
        type: 'dir',
        sub: [
          {
            name: 'Kome.ts',
            type: 'script',
          },
          {
            name: 'Comp.ts',
            type: 'script'
          }
        ]
      },
      {
        name: 'srouce.ts',
        type: 'script'
      }
    ]
  }
}

const repl = (api: string, option?: Object) => {
  switch(api) {
    case('search'):
      return datas.search
    case('user'):
      return datas.user

    default:
      return null;
  }
};

export default repl;
