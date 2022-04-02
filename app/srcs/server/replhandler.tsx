import { rest } from 'msw';
import { datas } from './repl';
import { GIT_TOKEN } from '../../.env';

export function handler() {
  return [
    rest.get('/api/cmd', getCmd),
    rest.get('/api/user', getUser),
    rest.get('/api/file', getFile),
    rest.get('/api/repo', getRepo),
    rest.post('/api/create', postCreate),
  ]
};

const getCmd: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      command: datas.search
    })
  );
};
const getUser: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      user: datas.user
    })
  );
};
const getFile: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const files = [];

  const reduce = (sub) => {
    for (let i = 0; i < sub.length; i++) {
      if (sub[i].type === 'script') files.push(sub[i])
      else {
        reduce(sub[i].sub);
      }
    }
  }
  reduce(datas.user.sub);

  return (
    res(
      ctx.status(200),
      ctx.json({
        file: files
      })
    )
  );
};
const postCreate: Parameters<typeof rest.post>[1] = async (req, res, ctx) => {
  const data = req.body;
  console.log(data);
  
  return (
    ctx.status(200)
  )
};
const getRepo: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
  const header = {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `Token ${GIT_TOKEN}`
  }
  const data = await fetch('https://api.github.com/users/seo2im/repos', {
    method: 'GET',
    headers: header
  }).then(res => res.json());

  return res(
    ctx.status(200),
    ctx.json(data.slice(0, 3))
  )
};

