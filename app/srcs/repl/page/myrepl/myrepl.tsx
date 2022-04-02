import React, { useState, useEffect, useCallback } from 'react';
import { useParams , Link, useLocation, useNavigate } from 'react-router-dom';
import * as style from './style';
import { BtnMenu, Loading, Button, Rating } from '../../component';

const Li: React.FC = ({ path, name, lang, create_at, size, favorite }) => {
  const time = (raw: string) => {
    const date = new Date(raw);
    
    return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
  }
  const navigate = useNavigate();
  // const deleteFoler = useRequest('repl', 'del', { paths: path['*'].split('/').filter(e => e !== ''), name }, true).fetcher;
  // const editFoler = useRequest('repl', 'edit', { paths: path['*'].split('/').filter(e => e !== ''), name }, true).fetcher;
  const menus = [
    {
      name: 'edit',
      act: () => alert('미구현')
    },
    {
      name: 'delete',
      act: async () => {
        // await deleteFoler();
        navigate(path);
      }
    } 
  ]
  

  return (
    <style.li>
      <style.name>
        <Rating num={1}/>
        {name}
      </style.name>
      <style.lang>{lang}</style.lang>
      <style.date>{time(create_at)}</style.date>
      <BtnMenu config={menus}/>
    </style.li>
  )
};

const useDirectory = (path) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState(null);
  const [user, setUser] = useState(null);
  const [dir, setDir] = useState(null);

  const fetcher = useCallback(async () => {
    const data = await fetch('/api/user').then(res => res.json());

    return data.user;
  }, []);

  const currentDir = () => {
    if (path['*'] === '') setDir(user.sub);
    else {
      const paths = path['*'].split('/').filter(e => e !== '');
      let pos = user.sub;
      for (let i = 0; i < paths.length; i++) {
        pos = pos.find(e => e.name === paths[i] && e.type === 'dir').sub;
      }
      setDir(pos);
    }
  }
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const user = await fetcher();
      setUser(user);
    } catch (err) {
      setErr(err);
    }
  }, [ fetcher ]);
  useEffect(() => {
    load();
  }, []);
  useEffect(() => {
    if (user !== null) currentDir();
  }, [ user ]);
  useEffect(() => {
    if (!dir) return;
    currentDir();
  }, [ path ]);
  useEffect(() => {
    if (dir !== null) setLoading(false);
  }, [ dir ])
  useEffect(() => {
    if (err !== null) setLoading(false);
  }, [ err ])

  return { loading, err, dir };
};

const MyRepl: React.FC = () => {
  // const { data, loading, err } = useRequest('repl', 'user');
  const location = useLocation();
  const path = useParams();
  const { loading, err, dir } = useDirectory(path);

  if (err) return (<div>Error</div>)
  if (loading || !dir) return (<style.div><Loading /></style.div>)
  return (
    <style.div>
      <Link state={{ backgroundLocation: location }} to={`/repl/createf/${path['*']}`}>
        <Button text='New Folder' click={() => {}}/>
      </Link>
      {dir.filter(e => e.type === 'dir').map((e, i) => (
        <style.wrapper key={i}><Link to={path['*'] !== '' ? `${path['*']}/${e.name}`: e.name}>dir_{e.name}</Link></style.wrapper>
      ))}
      {dir.filter(e => e.type === 'script').map((e, i) => (
        <Li key={i} path={path} {...e} >scr_{e.name}</Li>
      ))}
    </style.div>
  )
};

export default MyRepl;