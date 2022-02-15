import React, { useState, useEffect } from 'react';
import { useRequest } from '../hook';
import { useParams , Link, useLocation } from 'react-router-dom';
import * as style from './style';

const Li = () => {
  return (
    <style.li>
      <style.star></style.star>
      <style.name></style.name>
      <style.date></style.date>
    </style.li>
  )
};

const MyRepl: React.FC = ({ fetcher }) => {
  const [data, loading] = useRequest('repl', 'user');
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

  if (loading || !data || !dir) return <div>loading</div>
  return (
    <div>
      <Link state={{ backgroundLocation: location }} to={`/repl/createf/${path['*']}`}><style.button>New folder</style.button></Link>
      {dir.map(({ name, type, sub }, i) => {
        switch(type) {
          case 'dir':
            return <div key={i}><Link to={path['*'] !== '' ? `${path['*']}/${name}`: name}>dir_{name}</Link></div>
          case 'script':
            return <div key={i}>scr_{name}</div>
        }
      })}
    </div>
  )
};

export default MyRepl;