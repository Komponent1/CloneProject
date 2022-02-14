import React, { useEffect, useState } from 'react';
import * as style from './style';

const useAutoComplete = (fetcher: Function) => {
  const [text, setText] = useState<string>('');
  const [lis, setLis] = useState<string[]>([]);

  useEffect(async () => {
    const { data } = await fetcher();
    setLis(data.filter(e => e.search(text) !== -1 && text !== ''));
  }, [ text ]);

  return [ lis, text, setText ];
}
type Prop = {
  placeholder: string,
  fetcher?: Function
}

const Autocomplete: React.FC = ({placeholder, fetcher}: Prop) => {
  const [lis, text, setText] = useAutoComplete(fetcher);
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <style.div className="autocomplete">
      <style.input
        placeholder={placeholder}
        value={text}
        onChange={e => setText(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}/>
        <style.ul
          display={lis.length !== 0 && focus}>
          {lis.map((li, i) => (
            <style.li key={i} onClick={() => {
              setText(li)
            }}>
              {li}
            </style.li>
          ))}
        </style.ul>
    </style.div>
  );
};

export default Autocomplete;
