import React from 'react';
import * as style from './style';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../';

type createbox = {
  config: string[]
}
const Createbox: React.FC = ({ config }: createbox) => {
  const location = useLocation();

  return (
    <style.wrapper>
      <style.langbox>
        <Link state={{ backgroundLocation: location }} to='/repl/creates/c'>
          <Button text='+'/>
        </Link>
        {config.map((text, i) => (
          <Link key={i} state={{ backgroundLocation: location }} to={`/repl/creates/${text}`}>
            <Button text={text} />
          </Link>
        ))}
      </style.langbox>
    </style.wrapper>
  );
};
type recentbox = {
  config: {
    name: string
    lang: string
    create_at: string,
    type: string,
    favorite: boolean
    size: number
  }[]
}
const Recentbox: React.FC = ({ config }: recentbox) => {
  const getDate = (datestring: string) => {
    const now = new Date();
    const date = new Date(datestring);
    const year = now.getFullYear() - date.getFullYear();
    if (year > 1) return `${year} year ago`;
    const month = now.getMonth() - date.getMonth();
    if (year === 1 && month > 0) return `1 year ago`;
    if (month < 0) return `${month + 12} month ago`;
    if (month > 1) return `${month} month ago`;
    const day = now.getDate() - date.getDate();
    if (month > 0 && day > 0) return `1 month ago`;
    if (day < 0) return `${day + 30} ago`;
    return `${day} day ago`
  }

  return (
    <style.wrapper>
      {config.map((e, i) => (
        <Link key={i} to={e.name}>
          <style.rebox>
            <style.linker>{e.name}</style.linker>
            <style.lang>{e.lang}</style.lang>
            <style.date>{getDate(e.create_at)}</style.date>
          </style.rebox>
        </Link>
      ))}
    </style.wrapper>
  );
};
const Repobox: React.FC = ({ config }) => {
  return (
    <style.wrapper>
      {config.map((e, i) => (
        <Link key={i} to={e.name}>
          <style.rebox>
            <style.linker>{e.name}</style.linker>
            <style.lang>{e.language}</style.lang>
          </style.rebox>
        </Link>
      ))}
    </style.wrapper>
  );
};
type Prop = {
  title: string,
  addon: string
  link: string
  type: 'create' | 'recent' | 'github',
  datas: any
}
const Homebox: React.FC = ({ title, addon, link, type, datas }: Prop) => {
  return (
    <style.div>
      <style.title>{title}</style.title>    
      {type === 'create' ? <Createbox {...datas}/> : null}
      {type === 'recent' ? <Recentbox {...datas}/> : null}
      {type === 'github' ? <Repobox {...datas}/> : null}
      <style.addon><Link to={link}>{addon}</Link></style.addon>
    </style.div>
  )
};

export default Homebox;
