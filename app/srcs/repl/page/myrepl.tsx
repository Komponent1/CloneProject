import React, { useState, useEffect } from 'react';
import { useRequest } from '../hook';
import { useParams , Link, useLocation } from 'react-router-dom';
import * as style from './style';

const MyRepl: React.FC = ({ fetcher }) => {
  const [data, loading] = useRequest('repl', 'user');
  const [dir, setDir] = useState(null);
  const location = useLocation();
  const path = useParams();
  useEffect(() => {

    if (!data) return;
    if (path['*'] === '') setDir(data.own);
    else setDir(data.own.filter(e => e.name === path['*'])[0].sub)
  }, [data, path])

  if (loading || !data || !dir) return <div>loading</div>
  return (
    <div>
      <Link state={{ backgroundLocation: location }} to={'/repl/create/folder'}><style.button>New folder</style.button></Link>
      {dir.map(({ name, type, sub }, i) => {
        switch(type) {
          case 'dir':
            return <div key={i}><Link to={name}>dir_{name}</Link></div>
          case 'script':
            return <div key={i}>scr_{name}</div>
        }
      })}
    </div>
  )
};

export default MyRepl;