import React, { useState, useEffect } from 'react';
import * as style from './style';

const useAutoComplete = (url: string, fetcher: Function) => {
  const [text, setText] = useState<string>('');
  const [lis, setLis] = useState<string[]>([]);

  useEffect(async () => {
    const { data } = await fetcher();
    setLis(data.filter(e => e.search(text) !== -1 && text !== ''));
  }, [ text ]);

  return [ lis, text, setText ]
}
type Prop = {
  placeholder: string,
  url?: string,
  fetcher?: Function
}
const  Searchbar: React.FC = ({ placeholder, url, fetcher }: Prop) => {
  const [lis, text, setText] = useAutoComplete(url ? url : '', fetcher);
  const [focus, setFocus] = useState<boolean>();

  return (
    <style.div className="autocomplete">
      <style.input className="auto_input"
        value={text}
        onChange={e => setText(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
      />
      <style.autoul className="auto_ul"
        display={lis.length !== 0 && focus}>
        {lis.map((li, i) => (
          <style.autoli className="auto_li" key={i}
            onClick={() => setText(li)}>
            {li}
          </style.autoli>
        ))}
      </style.autoul>
    </style.div>
  )
};

export default Searchbar;
