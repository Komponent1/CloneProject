const datas = {
  search: ['create', 'run', 'get user name']
}

const repl = (api: string, option?: Object) => {
  switch(api) {
    case('search'):
      return datas.search

    default:
      return null;
  }
};

export default repl;
