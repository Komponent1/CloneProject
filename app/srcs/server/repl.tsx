type File = {
  name: string,
  type: string
}
type Script = File & {
  lang: string,
  create_at: string,
  size: number
  favorite: boolean
}
type Dir = File & {
  sub: Array<Dir | Script>
}
type User = {
  id: string,
  sub: Array<Dir | Script>
}
type Data = {
  search: string[],
  lang: string[],
  user: User
}

let datas: Data = {
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
            lang: 'c',
            size: 383,
            create_at: Date(),
            favorite: false
          },
          {
            name: 'Kome2.ts',
            type: 'script',
            lang: 'c#',
            size: 33,
            create_at: Date(),
            favorite: true
          }
        ]
      },
      {
        name: 'Kome3.ts',
        type: 'script',
        lang: 'javascript',
        size: 253,
        create_at: Date(),
        favorite: false
      }
    ]
  }
}

const create = (type: string, name: string, paths: string[]) => {  
  let pos = datas.user.sub;
  for(let i = 0; i < paths.length; i++) {
    pos = (pos.find(e => e.name === paths[i] && e.type === 'dir') as Dir).sub;
  }
  type === 'dir' ? pos.push({ name, type: 'dir', sub: [] }) : pos.push({
    type: 'script',
    name, lang: 'javascript', size: 52, create_at: Date(), favorite: false
  });

  return datas.user;
}

const del = (name: string, paths: string) => {
  let pos = datas.user.sub;
  for(let i = 0; i < paths.length; i++) {
    pos = (pos.find(e => e.name === paths[i] && e.type === 'dir') as Dir).sub;
  }

  console.log(pos)
  pos.splice(pos.findIndex(e => e.name === name), 1);
  console.log(pos)

  return datas.user;
}

const edit = (name: string, paths: string) => {
  let pos = datas.user.sub;
  for(let i = 0; i < paths.length; i++) {
    pos = (pos.find(e => e.name === paths[i] && e.type === 'dir') as Dir).sub;
  }
  const idx = pos.findIndex(e => e.name === name);
  (pos[idx] as Script).favorite = !(pos[idx] as Script).favorite

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
    case('del'):
      return del(option.name, option.paths);
    case('edit'):
      return edit(option.name, option.paths);
    default:
      return null;
  }
};

export default repl;
