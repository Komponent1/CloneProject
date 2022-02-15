let datas = {
  search: ['create', 'run', 'get user name'],
  lang: ['c', 'c++', 'javascript'],
  user: {
    id: 'seolim',
    sub: [
      {
        name: 'Komp',
        type: 'dir',
        sub: [
          {
            name: 'KOMP2',
            type: 'dir',
            sub: []
          },
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

const create = (type: string, name: string, paths: string[]) => {  
  let pos = datas.user.sub;
  for(let i = 0; i < paths.length; i++) {
    pos = pos.find(e => e.name === paths[i] && e.type === 'dir').sub;
  }
  type === 'dir' ? pos.push({ name, type: 'dir', sub: [] }) : pos.push({ name, type: 'script' });

  return datas.user;
}

const repl = (api: string, option?: any) => {
  switch(api) {
    case('search'):
      return datas.search;
    case('user'):
      return datas.user;
    case('create'):
      return create(option.type, option.name, option.paths);
    default:
      return null;
  }
};

export default repl;
