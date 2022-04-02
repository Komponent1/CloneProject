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

export let datas: Data = {
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
            create_at: new Date(2022, 1).toString(),
            favorite: false
          },
          {
            name: 'Kome2.ts',
            type: 'script',
            lang: 'c#',
            size: 33,
            create_at: new Date(2022, 0).toString(),
            favorite: true
          }
        ]
      },
      {
        name: 'Kome3.ts',
        type: 'script',
        lang: 'javascript',
        size: 253,
        create_at: new Date(2022, 2).toString(),
        favorite: false
      }
    ]
  }
}
