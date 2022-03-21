import React, { useState, useEffect } from 'react';
import { useRequest } from '../../hook';
import { useParams , Link, useLocation, useNavigate } from 'react-router-dom';
import * as style from './style';
import { BtnMenu, Loading, Button, Rating } from '../../component';

const Li: React.FC = ({ path, name, lang, create_at, size, favorite }) => {
  const time = (raw: string) => {
    const date = new Date(raw);
    
    return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
  }
  const navigate = useNavigate();
  const deleteFoler = useRequest('repl', 'del', { paths: path['*'].split('/').filter(e => e !== ''), name }, true).fetcher;
  const editFoler = useRequest('repl', 'edit', { paths: path['*'].split('/').filter(e => e !== ''), name }, true).fetcher;
  const menus = [
    {
      name: 'edit',
      act: () => alert('미구현')
    },
    {
      name: 'delete',
      act: async () => {
        await deleteFoler();
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

const MyRepl: React.FC = ({ fetcher }) => {
  const { data, loading, err } = useRequest('repl', 'user');
  const [dir, setDir] = useState(null);
  const location = useLocation();
  const path = useParams();
  
  const currentDir = () => {
    if (path['*'] === '') setDir(data.sub);
    else {
      const paths = path['*'].split('/').filter(e => e !== '');
      let pos = data.sub;
      for (let i = 0; i < paths.length; i++) {
        pos = pos.find(e => e.name === paths[i] && e.type === 'dir').sub;
      }
      setDir(pos);
    }
  }
  
  useEffect(() => {
    if (!data) return;
    currentDir();
  }, [ data ]);
  
  useEffect(() => {
    if (!dir) return;
    currentDir();
  }, [ path ]);

  if (err) return (<div>Error</div>)
  if (loading || !data) return (<style.div><Loading /></style.div>)
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